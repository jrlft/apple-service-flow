
// Helper function to format currency values
export const formatCurrency = (value: any): string => {
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
