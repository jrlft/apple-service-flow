
export const fetchSheetData = async (sheetId: string, deviceType: string) => {
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
      return { data: csvText, format: 'csv' };
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
  
  return { data, format: 'json' };
};
