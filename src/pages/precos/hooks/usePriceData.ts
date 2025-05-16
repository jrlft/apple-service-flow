import { useState, useEffect } from "react";
import { fetchPage } from "@/lib/strapi";
import { FALLBACK_PRICES, SHEET_IDS } from "../constants";

export const usePriceData = () => {
  const [priceData, setPriceData] = useState<any>(FALLBACK_PRICES);
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [retryCount, setRetryCount] = useState(0);
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
      const data = JSON.parse(jsonText);
      
      console.log("Sheet data received:", data);
      
      if (data && data.table && data.table.rows) {
        // Process the data
        const processedData = processSheetData(data);
        
        if (processedData && Object.keys(processedData).length > 0) {
          // Update only the data for this device type
          setPriceData(prevData => ({
            ...prevData,
            [deviceType]: processedData[deviceType] || []
          }));
          
          setIsSheetLoaded(true);
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        } else {
          throw new Error("Failed to process sheet data");
        }
      } else {
        throw new Error("Invalid data format from Google Sheets");
      }
    } catch (error) {
      console.error(`Error loading ${deviceType} price data:`, error);
      // Keep fallback data for this device type
    } finally {
      setIsLoading(false);
    }
  };

  // Process the sheet data from Google Sheets API response
  const processSheetData = (data: any) => {
    try {
      if (!data || !data.table || !data.table.rows) {
        return null;
      }
      
      // Initialize processed data structure
      const processedData: Record<string, any[]> = {
        iphone: [],
        ipad: [],
        mac: [],
        watch: [],
        airpods: [],
        outros: []
      };
      
      // Get column headers
      const headers = data.table.cols.map((col: any) => col.label);
      console.log("Headers:", headers);
      
      // Process each row
      data.table.rows.forEach((row: any) => {
        if (!row.c || row.c.length < 2) return;
        
        // Extract product info from row
        const productInfo = extractProductInfo(row);
        if (productInfo) {
          const { deviceType, model, repairType, pixPrice, cashPrice, installments2to5, installments6to10 } = productInfo;
          
          // Add to the appropriate device category
          if (processedData[deviceType]) {
            processedData[deviceType].push({
              model,
              repairType,
              pixPrice,
              cashPrice,
              installments2to5,
              installments6to10
            });
          }
        }
      });
      
      // Log the results
      for (const [device, items] of Object.entries(processedData)) {
        console.log(`${device}: ${items.length} items processed`);
      }
      
      return processedData;
    } catch (error) {
      console.error("Error processing sheet data:", error);
      return null;
    }
  };

  // Extract product information from a row
  const extractProductInfo = (row: any) => {
    try {
      // Get values from each cell in the row
      const model = row.c[0]?.v || '';
      const repairType = row.c[1]?.v || '';
      const price10x = formatCurrency(row.c[2]?.v);
      const price5x = formatCurrency(row.c[3]?.v);
      const priceVista = formatCurrency(row.c[4]?.v);
      const pricePix = formatCurrency(row.c[5]?.v);
      
      // Determine device type from model name
      let deviceType = 'outros';
      if (model.toLowerCase().includes('iphone')) deviceType = 'iphone';
      else if (model.toLowerCase().includes('ipad')) deviceType = 'ipad';
      else if (model.toLowerCase().includes('mac')) deviceType = 'mac';
      else if (model.toLowerCase().includes('watch')) deviceType = 'watch';
      else if (model.toLowerCase().includes('airpod')) deviceType = 'airpods';
      
      return {
        deviceType,
        model,
        repairType,
        pixPrice: pricePix,
        cashPrice: priceVista,
        installments2to5: price5x,
        installments6to10: price10x
      };
    } catch (error) {
      console.error("Error extracting product info:", error);
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
