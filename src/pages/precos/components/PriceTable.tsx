
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

interface PriceItem {
  model: string;
  repairType: string;
  pixPrice: string;
  cashPrice: string;
  installments2to5: string;
  installments6to10: string;
}

interface PriceTableProps {
  selectedDevice: string;
  filteredData: PriceItem[];
  isLoading: boolean;
  searchTerm: string;
  isSheetLoaded: boolean;
}

export const PriceTable = ({
  selectedDevice,
  filteredData,
  isLoading,
  searchTerm,
  isSheetLoaded
}: PriceTableProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (selectedDevice === 'mac') {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-4">Orçamento Personalizado para Mac</h3>
        <p className="text-muted-foreground mb-6">
          Os valores para reparo de Mac dependem de análise técnica do aparelho e 
          consulta dos valores das peças de acordo com o modelo específico.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link to="/contato">Entre em Contato</Link>
          </Button>
          <WhatsAppButton 
            phoneNumber="+556536216000"
            message="Olá, gostaria de solicitar um orçamento para reparo do meu Mac."
          >
            Orçamento via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Modelo</TableHead>
            <TableHead>Tipo de Reparo</TableHead>
            <TableHead>PIX c/ Desconto</TableHead>
            <TableHead>À Vista/Boleto</TableHead>
            <TableHead>2-5x Cartão</TableHead>
            <TableHead>6-10x Cartão</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length > 0 ? (
            filteredData.map((item: any, index: number) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-secondary/20" : ""}>
                <TableCell className="font-medium">{item.model}</TableCell>
                <TableCell>{item.repairType}</TableCell>
                <TableCell className="font-medium text-primary">{item.pixPrice}</TableCell>
                <TableCell>{item.cashPrice}</TableCell>
                <TableCell>{item.installments2to5}</TableCell>
                <TableCell>{item.installments6to10}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                {searchTerm ? "Nenhum modelo encontrado com esse termo." : "Nenhum dado disponível para este dispositivo."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {filteredData.length > 0 && !isSheetLoaded && (
        <div className="mt-4 text-amber-600 bg-amber-50 p-3 rounded-md text-sm">
          <p>
            <strong>Nota:</strong> Não foi possível carregar os dados mais recentes do Google Sheets. 
            Os valores exibidos podem estar desatualizados.
          </p>
        </div>
      )}
    </div>
  );
};
