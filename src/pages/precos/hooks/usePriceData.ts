
import { useState, useEffect } from "react";
import { fetchPage } from "@/lib/strapi";
import { FALLBACK_PRICES } from "../constants";

export const usePriceData = () => {
  const [priceData, setPriceData] = useState<any>(FALLBACK_PRICES);
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Try to load page content from Strapi
        try {
          const pageData = await fetchPage("precos");
          if (pageData) {
            setPage(pageData);
          }
        } catch (error) {
          console.error("Error loading page data from Strapi:", error);
        }
        
        // Try to fetch directly from Google Sheet URL
        try {
          console.log("Fetching Google Sheets data directly, attempt:", retryCount + 1);
          
          // Using Google Sheets published data format
          const sheetId = "1QD_ZgaC5-pDjTpryvlW-AmOoQXbjI8SLl9heWnx3rwU";
          const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
          
          const response = await fetch(sheetURL);
          const textData = await response.text();
          
          // Google Sheets returns data wrapped in a callback, remove that
          const jsonText = textData.replace(/^.*\(([\s\S]*)\);?$/, '$1');
          const data = JSON.parse(jsonText);
          
          console.log("Raw data:", data);
          
          if (data && data.table && data.table.rows) {
            // Process the data
            const processedData: Record<string, any[]> = {
              iphone: [],
              ipad: [],
              mac: [],
              watch: []
            };
            
            const headers = data.table.cols.map((col: any) => col.label);
            console.log("Headers:", headers);
            
            data.table.rows.forEach((row: any) => {
              if (!row.c || row.c.length < 2) return;
              
              const product = row.c[0]?.v?.toString().toLowerCase() || '';
              
              if (product && (product.includes('iphone') || product.includes('ipad') || product.includes('mac') || product.includes('watch'))) {
                let deviceType = 'iphone';
                if (product.includes('ipad')) deviceType = 'ipad';
                else if (product.includes('mac')) deviceType = 'mac';
                else if (product.includes('watch')) deviceType = 'watch';
                
                const item = {
                  model: row.c[0]?.v || '',
                  repairType: row.c[1]?.v || '',
                  pixPrice: formatCurrency(row.c[3]?.v || ''),
                  cashPrice: formatCurrency(row.c[2]?.v || ''),
                  installments2to5: formatCurrency(row.c[2]?.v || ''),
                  installments6to10: formatCurrency(row.c[3]?.v || '')
                };
                
                processedData[deviceType].push(item);
              }
            });
            
            // Log the number of items per device
            for (const [device, items] of Object.entries(processedData)) {
              console.log(`${device}: ${items.length} items`);
            }
            
            setPriceData(processedData);
            setIsSheetLoaded(true);
            setLastUpdated(new Date().toLocaleString('pt-BR'));
          } else {
            throw new Error("Invalid data format from Google Sheets");
          }
        } catch (error) {
          console.error("Error loading price data from Google Sheets:", error);
          
          if (retryCount < 2) {
            const delay = Math.pow(2, retryCount) * 1000;
            console.log(`Retrying in ${delay}ms (attempt ${retryCount + 1})`);
            setTimeout(() => setRetryCount(prev => prev + 1), delay);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a timer to refresh the sheet data periodically (every 5 minutes)
    const intervalId = setInterval(() => {
      console.log("Refreshing price data");
      loadData();
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(intervalId);
  }, [retryCount]);

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

  return {
    priceData,
    page,
    isLoading,
    isSheetLoaded,
    lastUpdated
  };
};
