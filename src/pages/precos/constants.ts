// Tipos de dispositivos
export const DEVICE_TYPES = [
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "mac", label: "Mac" },
  { id: "watch", label: "Apple Watch" },
  { id: "airpods", label: "AirPods" },
  { id: "outros", label: "Outros Serviços" }
];

// Mapping of device types to Google Sheet IDs
export const SHEET_IDS = {
  iphone: "1s8BXmaQUCeVs76B5aWCEnMWV-HiOGgOjCoxkeSR9vto",
  ipad: "1s8BXmaQUCeVs76B5aWCEnMWV-HiOGgOjCoxkeSR9vto", // Using same sheet for now
  watch: "1s8BXmaQUCeVs76B5aWCEnMWV-HiOGgOjCoxkeSR9vto", // Using same sheet for now
  airpods: "1s8BXmaQUCeVs76B5aWCEnMWV-HiOGgOjCoxkeSR9vto", // Using same sheet for now
  outros: "1s8BXmaQUCeVs76B5aWCEnMWV-HiOGgOjCoxkeSR9vto" // Using same sheet for now
};

// Fallback data (used when Google Sheets is unavailable)
export const FALLBACK_PRICES = {
  iphone: [
    { model: "iPhone SE", repairType: "Troca de Tela", pixPrice: "R$ 290", cashPrice: "R$ 310", installments2to5: "R$ 320", installments6to10: "R$ 350" },
    { model: "iPhone 11", repairType: "Troca de Tela", pixPrice: "R$ 590", cashPrice: "R$ 610", installments2to5: "R$ 630", installments6to10: "R$ 650" },
    { model: "iPhone 12", repairType: "Troca de Tela", pixPrice: "R$ 890", cashPrice: "R$ 920", installments2to5: "R$ 950", installments6to10: "R$ 990" },
    { model: "iPhone 13", repairType: "Troca de Tela", pixPrice: "R$ 1090", cashPrice: "R$ 1130", installments2to5: "R$ 1160", installments6to10: "R$ 1200" }
  ],
  ipad: [
    { model: "iPad (7ª geração)", repairType: "Troca de Tela", pixPrice: "R$ 590", cashPrice: "R$ 610", installments2to5: "R$ 630", installments6to10: "R$ 650" },
    { model: "iPad Air", repairType: "Troca de Tela", pixPrice: "R$ 790", cashPrice: "R$ 830", installments2to5: "R$ 850", installments6to10: "R$ 880" }
  ],
  watch: [
    { model: "Apple Watch Series 3", repairType: "Troca de Bateria", pixPrice: "R$ 290", cashPrice: "R$ 310", installments2to5: "R$ 320", installments6to10: "R$ 330" },
    { model: "Apple Watch Series 7", repairType: "Troca de Tela", pixPrice: "R$ 790", cashPrice: "R$ 820", installments2to5: "R$ 840", installments6to10: "R$ 870" }
  ],
  airpods: [
    { model: "AirPods 2", repairType: "Troca de Bateria", pixPrice: "R$ 240", cashPrice: "R$ 260", installments2to5: "R$ 280", installments6to10: "R$ 300" },
    { model: "AirPods Pro", repairType: "Reparo", pixPrice: "R$ 390", cashPrice: "R$ 410", installments2to5: "R$ 430", installments6to10: "R$ 450" }
  ],
  outros: [
    { model: "Beats", repairType: "Reparo Geral", pixPrice: "R$ 290", cashPrice: "R$ 310", installments2to5: "R$ 320", installments6to10: "R$ 350" }
  ],
  mac: []
};
