
import { Button } from "@/components/ui/button";

type DeviceType = {
  id: string;
  label: string;
};

interface DeviceFilterProps {
  devices: DeviceType[];
  selectedDevice: string;
  onDeviceChange: (deviceId: string) => void;
}

export const DeviceFilter = ({ 
  devices, 
  selectedDevice, 
  onDeviceChange 
}: DeviceFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {devices.map(device => (
        <Button 
          key={device.id}
          variant={selectedDevice === device.id ? "default" : "outline"} 
          onClick={() => onDeviceChange(device.id)}
        >
          {device.label}
        </Button>
      ))}
    </div>
  );
};
