
import { useState, useEffect } from "react";
import { fetchPage, fetchGoogleSheetPrices } from "@/lib/strapi";
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
        
        // Try to load price data from Google Sheets
        try {
          console.log("Fetching Google Sheets data, attempt:", retryCount + 1);
          const sheetData = await fetchGoogleSheetPrices();
          
          console.log("Received sheet data:", sheetData);
          
          if (sheetData && Object.keys(sheetData).length > 0) {
            console.log("Sheet data loaded successfully:", sheetData);
            
            // Log device counts to diagnose data issues
            Object.keys(sheetData).forEach(key => {
              console.log(`Device ${key} has ${sheetData[key]?.length || 0} entries`);
              if (sheetData[key]?.length > 0) {
                console.log(`First entry example:`, sheetData[key][0]);
              }
            });
            
            setPriceData(sheetData);
            setIsSheetLoaded(true);
            // Set last updated time
            setLastUpdated(new Date().toLocaleString('pt-BR'));
            setRetryCount(0); // Reset retry count on success
          } else {
            console.warn("Failed to load Google Sheet data or empty data returned, using fallback data");
            if (retryCount < 3) {
              // Retry after a short delay (exponential backoff)
              const delay = Math.pow(2, retryCount) * 1000;
              console.log(`Retrying in ${delay}ms (attempt ${retryCount + 1})`);
              setTimeout(() => setRetryCount(prev => prev + 1), delay);
            }
          }
        } catch (error) {
          console.error("Error loading price data from Google Sheets:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a timer to refresh the sheet data periodically (every 5 minutes)
    const intervalId = setInterval(async () => {
      console.log("Refreshing price data from Google Sheets");
      try {
        const sheetData = await fetchGoogleSheetPrices();
        if (sheetData && Object.keys(sheetData).length > 0) {
          console.log("Sheet data refreshed successfully");
          setPriceData(sheetData);
          setIsSheetLoaded(true);
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        } else {
          console.warn("Failed to refresh Google Sheet data");
        }
      } catch (error) {
        console.error("Error refreshing price data:", error);
      }
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(intervalId);
  }, [retryCount]);

  return {
    priceData,
    page,
    isLoading,
    isSheetLoaded,
    lastUpdated
  };
};
