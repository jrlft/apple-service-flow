
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
        
        // Try to fetch directly from Google Sheet URL
        try {
          console.log("Fetching Google Sheets data directly, attempt:", retryCount + 1);
          
          // Using a CORS proxy to access the Google Sheet
          const sheetURL = "https://docs.google.com/spreadsheets/d/1QD_ZgaC5-pDjTpryvlW-AmOoQXbjI8SLl9heWnx3rwU/gviz/tq?tqx=out:json&sheet=";
          
          // Try to fetch iphone prices
          const fetchDeviceData = async (deviceType: string) => {
            try {
              const response = await fetch(`${sheetURL}${deviceType}`);
              const text = await response.text();
              
              // Google Sheets returns data wrapped in a callback, remove that
              const jsonText = text.replace(/.*\((.*)\);?/s, '$1');
              const data = JSON.parse(jsonText);
              
              // Format the data
              const formattedData = data.table.rows.map((row: any) => {
                const rowData = row.c;
                return {
                  model: rowData[0]?.v || "",
                  repairType: rowData[1]?.v || "",
                  price: rowData[2]?.v || "",
                  warranty: rowData[3]?.v || "",
                  time: rowData[4]?.v || ""
                };
              });
              
              return formattedData.filter((d: any) => d.model && d.repairType);
            } catch (error) {
              console.error(`Error fetching ${deviceType} data:`, error);
              return [];
            }
          };
          
          // Fetch all device types
          const devices = ["iphone", "ipad", "mac", "watch"];
          const devicePromises = devices.map(device => fetchDeviceData(device)
            .then(data => ({ [device]: data }))
          );
          
          const results = await Promise.all(devicePromises);
          
          // Combine all results
          const combinedData = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
          
          console.log("Combined sheet data:", combinedData);
          
          if (combinedData && Object.values(combinedData).some((arr: any) => arr.length > 0)) {
            setPriceData(combinedData);
            setIsSheetLoaded(true);
            setLastUpdated(new Date().toLocaleString('pt-BR'));
            setRetryCount(0); // Reset retry count on success
          } else {
            console.warn("Direct Google Sheet fetch returned empty data, trying Strapi as fallback");
            const sheetData = await fetchGoogleSheetPrices();
            
            if (sheetData && Object.keys(sheetData).length > 0) {
              setPriceData(sheetData);
              setIsSheetLoaded(true);
              setLastUpdated(new Date().toLocaleString('pt-BR'));
            } else if (retryCount < 3) {
              const delay = Math.pow(2, retryCount) * 1000;
              console.log(`Retrying in ${delay}ms (attempt ${retryCount + 1})`);
              setTimeout(() => setRetryCount(prev => prev + 1), delay);
            }
          }
        } catch (error) {
          console.error("Error loading price data:", error);
          
          // Fallback to Strapi fetch
          try {
            const sheetData = await fetchGoogleSheetPrices();
            if (sheetData && Object.keys(sheetData).length > 0) {
              setPriceData(sheetData);
              setIsSheetLoaded(true);
              setLastUpdated(new Date().toLocaleString('pt-BR'));
            }
          } catch (strApiError) {
            console.error("Strapi fallback also failed:", strApiError);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a timer to refresh the sheet data periodically (every 5 minutes)
    const intervalId = setInterval(async () => {
      console.log("Refreshing price data");
      loadData();
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
