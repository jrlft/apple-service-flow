
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

// Removidos os dados de fallback para evitar mostrar informações incorretas
