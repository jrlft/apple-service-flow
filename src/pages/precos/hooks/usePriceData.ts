
import { useState, useEffect } from "react";
import { fetchPage, fetchGoogleSheetPrices } from "@/lib/strapi";
import { FALLBACK_PRICES } from "../constants";

export const usePriceData = () => {
  const [priceData, setPriceData] = useState<any>(FALLBACK_PRICES);
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Try to load page content from Strapi
        const pageData = await fetchPage("precos").catch(() => null);
        if (pageData) {
          setPage(pageData);
        }
        
        // Try to load price data from Google Sheets
        const sheetData = await fetchGoogleSheetPrices();
        if (sheetData) {
          setPriceData(sheetData);
          setIsSheetLoaded(true);
          // Set last updated time
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        }
      } catch (error) {
        console.error("Error loading price data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a timer to refresh the sheet data periodically (every 5 minutes)
    const intervalId = setInterval(async () => {
      try {
        const sheetData = await fetchGoogleSheetPrices();
        if (sheetData) {
          setPriceData(sheetData);
          setIsSheetLoaded(true);
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        }
      } catch (error) {
        console.error("Error refreshing price data:", error);
      }
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    priceData,
    page,
    isLoading,
    isSheetLoaded,
    lastUpdated
  };
};
