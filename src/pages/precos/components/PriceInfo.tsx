
interface PriceInfoProps {
  lastUpdated: string;
  googleSheetsInfo?: string;
}

export const PriceInfo = ({ lastUpdated, googleSheetsInfo }: PriceInfoProps) => {
  return (
    <>
      <div className="mt-6 text-sm text-muted-foreground">
        <p>* Os preços podem variar de acordo com o modelo específico e condição do dispositivo.</p>
        <p>* Esta tabela é apenas uma referência. Para um orçamento preciso, entre em contato conosco.</p>
        <p>* Valores atualizados em {lastUpdated || new Date().toLocaleDateString('pt-BR')}</p>
      </div>

      {googleSheetsInfo && (
        <div className="mt-8 bg-secondary/50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Integração com Google Sheets</h3>
          <p className="mb-4">{googleSheetsInfo}</p>
        </div>
      )}
    </>
  );
};
