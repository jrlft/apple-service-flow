
import { useState, useEffect } from "react";
import { fetchPage } from "@/lib/strapi";
import { FALLBACK_PRICES, SHEET_IDS } from "../constants";

export const usePriceData = () => {
  const [priceData, setPriceData] = useState<any>(FALLBACK_PRICES);
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [activeSheetId, setActiveSheetId] = useState<string>(SHEET_IDS.iphone);

  const loadSheetData = async (deviceType: string = "iphone") => {
    setIsLoading(true);
    
    try {
      const sheetId = SHEET_IDS[deviceType as keyof typeof SHEET_IDS] || SHEET_IDS.iphone;
      console.log(`Loading ${deviceType} data from sheet ID: ${sheetId}`);
      
      // Try CSV format first (more reliable)
      const csvURL = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
      
      try {
        const csvResponse = await fetch(csvURL, {
          cache: "no-store",
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        if (csvResponse.ok) {
          const csvText = await csvResponse.text();
          console.log("CSV data received:", csvText.substring(0, 200) + "...");
          
          const processedData = processCSVData(csvText, deviceType);
          if (processedData && processedData[deviceType] && processedData[deviceType].length > 0) {
            setPriceData(prevData => ({
              ...prevData,
              [deviceType]: processedData[deviceType]
            }));
            
            setIsSheetLoaded(true);
            setLastUpdated(new Date().toLocaleString('pt-BR'));
            console.log(`Successfully loaded ${processedData[deviceType].length} items for ${deviceType} via CSV`);
            return;
          }
        }
      } catch (csvError) {
        console.log("CSV method failed, trying JSON method:", csvError);
      }
      
      // Fallback to JSON format
      const jsonURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
      
      const response = await fetch(jsonURL, {
        cache: "no-store",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch sheet data: ${response.status}`);
      }
      
      const textData = await response.text();
      const jsonText = textData.replace(/^.*\(([\s\S]*)\);?$/, '$1');
      
      const data = JSON.parse(jsonText);
      
      if (data && data.table && data.table.rows) {
        const processedData = processSheetData(data, deviceType);
        
        if (processedData && processedData[deviceType] && processedData[deviceType].length > 0) {
          setPriceData(prevData => ({
            ...prevData,
            [deviceType]: processedData[deviceType] || []
          }));
          
          setIsSheetLoaded(true);
          setLastUpdated(new Date().toLocaleString('pt-BR'));
          console.log(`Successfully loaded ${processedData[deviceType].length} items for ${deviceType} via JSON`);
        }
      }
    } catch (error) {
      console.error(`Error loading ${deviceType} price data:`, error);
      console.log("Verifique se a planilha está publicada na web e acessível publicamente");
      console.log("URL da planilha:", `https://docs.google.com/spreadsheets/d/${SHEET_IDS[deviceType as keyof typeof SHEET_IDS]}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Process CSV data from Google Sheets
  const processCSVData = (csvData: string, currentDeviceType: string) => {
    try {
      console.log("Processing CSV data for", currentDeviceType);
      
      const lines = csvData.split('\n').filter(line => line.trim());
      if (lines.length < 2) {
        console.error("Not enough lines in CSV data");
        return null;
      }
      
      const processedData: Record<string, any[]> = {
        [currentDeviceType]: []
      };
      
      // Skip header row and process data
      for (let i = 1; i < lines.length; i++) {
        const row = parseCSVRow(lines[i]);
        if (row.length < 6) continue;
        
        const [modelo, tipoReparo, valorVista, pix, cartao2a5, cartao6a10] = row;
        
        if (!modelo.trim() || !tipoReparo.trim()) continue;
        
        processedData[currentDeviceType].push({
          model: modelo.trim(),
          repairType: tipoReparo.trim(),
          pixPrice: formatCurrency(pix),
          cashPrice: formatCurrency(valorVista),
          installments2to5: formatCurrency(cartao2a5),
          installments6to10: formatCurrency(cartao6a10)
        });
      }
      
      console.log(`Processed ${processedData[currentDeviceType].length} items from CSV`);
      return processedData;
    } catch (error) {
      console.error("Error processing CSV data:", error);
      return null;
    }
  };

  // Parse CSV row handling quoted values
  const parseCSVRow = (row: string): string[] => {
    const result: string[] = [];
    let inQuote = false;
    let currentValue = '';
    
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      
      if (char === '"') {
        if (i + 1 < row.length && row[i + 1] === '"') {
          currentValue += '"';
          i++;
        } else {
          inQuote = !inQuote;
        }
      } else if (char === ',' && !inQuote) {
        result.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    result.push(currentValue.trim());
    return result;
  };

  // Process the sheet data from Google Sheets API response
  const processSheetData = (data: any, currentDeviceType: string) => {
    try {
      if (!data || !data.table || !data.table.rows) {
        return null;
      }
      
      const processedData: Record<string, any[]> = {
        [currentDeviceType]: []
      };
      
      const headers = data.table.cols.map((col: any) => col.label);
      console.log("Headers:", headers);
      
      const startIndex = data.table.rows[0]?.c[0]?.v === 'Modelo' ? 1 : 0;
      
      for (let i = startIndex; i < data.table.rows.length; i++) {
        const row = data.table.rows[i];
        if (!row.c || row.c.length < 2) continue;
        
        const model = row.c[0]?.v || '';
        const repairType = row.c[1]?.v || '';
        
        if (!model && !repairType) continue;
        
        const cashPrice = formatCurrency(row.c[2]?.v);
        const pixPrice = formatCurrency(row.c[3]?.v);
        const installments2to5 = formatCurrency(row.c[4]?.v);
        const installments6to10 = formatCurrency(row.c[5]?.v);
        
        processedData[currentDeviceType].push({
          model,
          repairType,
          pixPrice,
          cashPrice,
          installments2to5,
          installments6to10
        });
      }
      
      console.log(`Processed ${processedData[currentDeviceType].length} items for ${currentDeviceType}`);
      return processedData;
    } catch (error) {
      console.error("Error processing sheet data:", error);
      return null;
    }
  };

  // Helper function to format currency values
  const formatCurrency = (value: any): string => {
    if (value === undefined || value === null) return '';
    
    if (typeof value === 'number') {
      return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    if (typeof value === 'string') {
      if (value.trim() === '') return '';
      if (value.includes('R$')) return value;
      
      const numValue = Number(value.replace(/[^0-9.,]/g, '').replace(',', '.'));
      if (!isNaN(numValue)) {
        return `R$ ${numValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
      
      return value;
    }
    
    return String(value);
  };

  // Load page data from Strapi when component mounts
  useEffect(() => {
    const loadPageData = async () => {
      try {
        const pageData = await fetchPage("precos");
        if (pageData) {
          setPage(pageData);
        }
      } catch (error) {
        console.error("Error loading page data from Strapi:", error);
      }
    };
    
    loadPageData();
  }, []);

  // Load initial sheet data
  useEffect(() => {
    loadSheetData("iphone");
    
    const intervalId = setInterval(() => {
      console.log("Refreshing price data");
      loadSheetData("iphone");
    }, 15 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const loadDeviceData = (deviceType: string) => {
    if (deviceType === 'mac') return;
    loadSheetData(deviceType);
  };

  return {
    priceData,
    page,
    isLoading,
    isSheetLoaded,
    lastUpdated,
    loadDeviceData
  };
};
