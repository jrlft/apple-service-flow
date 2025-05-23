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
      
      // Using Google Sheets published data format
      const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
      
      const response = await fetch(sheetURL, {
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
      
      // Google Sheets returns data wrapped in a callback, remove that
      const jsonText = textData.replace(/^.*\(([\s\S]*)\);?$/, '$1');
      console.log("JSON Text after regex:", jsonText.substring(0, 200) + "...");
      
      try {
        const data = JSON.parse(jsonText);
        console.log("Sheet data parsed successfully");
        
        if (data && data.table && data.table.rows) {
          console.log(`Found ${data.table.rows.length} rows in the sheet`);
          
          // Process the data
          const processedData = processSheetData(data, deviceType);
          
          if (processedData && processedData[deviceType] && processedData[deviceType].length > 0) {
            // Update only the data for this device type
            setPriceData(prevData => ({
              ...prevData,
              [deviceType]: processedData[deviceType] || []
            }));
            
            setIsSheetLoaded(true);
            setLastUpdated(new Date().toLocaleString('pt-BR'));
            console.log(`Successfully loaded ${processedData[deviceType].length} items for ${deviceType}`);
          } else {
            console.error("Failed to process sheet data for", deviceType);
            throw new Error("Failed to process sheet data");
          }
        } else {
          console.error("Invalid data format from Google Sheets", data);
          throw new Error("Invalid data format from Google Sheets");
        }
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        throw new Error("Error parsing sheet data");
      }
    } catch (error) {
      console.error(`Error loading ${deviceType} price data:`, error);
      // Keep fallback data for this device type
    } finally {
      setIsLoading(false);
    }
  };

  // Process the sheet data from Google Sheets API response
  const processSheetData = (data: any, currentDeviceType: string) => {
    try {
      if (!data || !data.table || !data.table.rows) {
        return null;
      }
      
      // Initialize processed data structure focusing on current device type
      const processedData: Record<string, any[]> = {
        [currentDeviceType]: []
      };
      
      // Get column headers
      const headers = data.table.cols.map((col: any) => col.label);
      console.log("Headers:", headers);
      
      // Skip the header row if present
      const startIndex = data.table.rows[0]?.c[0]?.v === 'Modelo' ? 1 : 0;
      
      // Process each row
      for (let i = startIndex; i < data.table.rows.length; i++) {
        const row = data.table.rows[i];
        if (!row.c || row.c.length < 2) continue;
        
        const model = row.c[0]?.v || '';
        const repairType = row.c[1]?.v || '';
        
        // Skip empty rows
        if (!model && !repairType) continue;
        
        // Get price values with fallbacks
        const installments6to10 = formatCurrency(row.c[2]?.v);
        const installments2to5 = formatCurrency(row.c[3]?.v);
        const cashPrice = formatCurrency(row.c[4]?.v);
        const pixPrice = formatCurrency(row.c[5]?.v);
        
        // Add to the device category
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
    
    // If it's already a string with formatting
    if (typeof value === 'string') {
      if (value.trim() === '') return '';
      if (value.includes('R$')) return value;
      
      // Try to convert string to number and format
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
    
    // Set up a timer to refresh the sheet data periodically (every 15 minutes)
    const intervalId = setInterval(() => {
      console.log("Refreshing price data");
      loadSheetData("iphone");
    }, 15 * 60 * 1000); // 15 minutes
    
    return () => clearInterval(intervalId);
  }, []);

  // Function to load data for a specific device type
  const loadDeviceData = (deviceType: string) => {
    if (deviceType === 'mac') return; // Mac doesn't use sheet data
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
