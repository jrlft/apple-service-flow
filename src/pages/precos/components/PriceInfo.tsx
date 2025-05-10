
import React from "react";

interface PriceInfoProps {
  googleSheetsInfo?: string;
}

export const PriceInfo: React.FC<PriceInfoProps> = ({ googleSheetsInfo }) => {
  return (
    <div className="mt-6 text-sm text-muted-foreground space-y-2">
      {googleSheetsInfo && (
        <p dangerouslySetInnerHTML={{ __html: googleSheetsInfo }} />
      )}
    </div>
  );
};
