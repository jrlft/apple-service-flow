
import { formatCurrency } from "./currencyFormatter";

// Parse CSV row handling quoted values
export const parseCSVRow = (row: string): string[] => {
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

// Process CSV data from Google Sheets
export const processCSVData = (csvData: string, currentDeviceType: string) => {
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

// Process the sheet data from Google Sheets API response
export const processSheetData = (data: any, currentDeviceType: string) => {
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
