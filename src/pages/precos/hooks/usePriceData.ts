
import { useState, useEffect } from "react";
import { fetchPage } from "@/lib/strapi";
import { FALLBACK_PRICES, SHEET_IDS } from "../constants";
import { fetchSheetData } from "../utils/googleSheetsApi";
import { processCSVData, processSheetData } from "../utils/dataProcessors";

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
      const result = await fetchSheetData(sheetId, deviceType);
      
      let processedData;
      if (result.format === 'csv') {
        processedData = processCSVData(result.data, deviceType);
      } else {
        processedData = processSheetData(result.data, deviceType);
      }
      
      if (processedData && processedData[deviceType] && processedData[deviceType].length > 0) {
        setPriceData(prevData => ({
          ...prevData,
          [deviceType]: processedData[deviceType]
        }));
        
        setIsSheetLoaded(true);
        setLastUpdated(new Date().toLocaleString('pt-BR'));
        console.log(`Successfully loaded ${processedData[deviceType].length} items for ${deviceType}`);
      }
    } catch (error) {
      console.error(`Error loading ${deviceType} price data:`, error);
      console.log("Verifique se a planilha está publicada na web e acessível publicamente");
      console.log("URL da planilha:", `https://docs.google.com/spreadsheets/d/${SHEET_IDS[deviceType as keyof typeof SHEET_IDS]}`);
    } finally {
      setIsLoading(false);
    }
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
