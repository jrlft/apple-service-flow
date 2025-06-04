
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { AlertCircle, Wifi, WifiOff } from "lucide-react";

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
  error?: string;
}

export const PriceTable = ({
  selectedDevice,
  filteredData,
  isLoading,
  searchTerm,
  isSheetLoaded,
  error
}: PriceTableProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando dados da planilha...</p>
        </div>
      </div>
    );
  }

  // Mostrar erro se houver problemas de conexão
  if (error && filteredData.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex items-center justify-center mb-4">
          <WifiOff className="h-12 w-12 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-red-600">Erro de Conexão</h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        <p className="text-sm text-muted-foreground mb-6">
          Não é possível exibir dados desatualizados. Entre em contato para valores atualizados.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link to="/contato">Entre em Contato</Link>
          </Button>
          <WhatsAppButton 
            phoneNumber="+556536216000"
            message={`Olá, gostaria de saber os valores atualizados para reparo de ${selectedDevice}.`}
          >
            WhatsApp para Orçamento
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  if (selectedDevice === 'mac') {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-4">Orçamento Personalizado para Mac</h3>
        <p className="text-muted-foreground mb-6 text-justify">
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
      {/* Indicador de status da conexão */}
      {isSheetLoaded && (
        <div className="flex items-center gap-2 mb-4 text-sm text-green-600">
          <Wifi className="h-4 w-4" />
          <span>Dados sincronizados com a planilha</span>
        </div>
      )}
      
      {error && filteredData.length > 0 && (
        <div className="flex items-center gap-2 mb-4 text-sm text-amber-600 bg-amber-50 p-2 rounded">
          <AlertCircle className="h-4 w-4" />
          <span>Alguns dados podem estar desatualizados</span>
        </div>
      )}

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-primary text-white font-semibold py-3 !hover:bg-primary">Modelo</TableHead>
              <TableHead className="bg-primary text-white font-semibold py-3 !hover:bg-primary">Tipo de Reparo</TableHead>
              <TableHead className="bg-primary text-white font-semibold py-3 !hover:bg-primary">PIX c/ Desconto</TableHead>
              <TableHead className="bg-primary text-white font-semibold py-3 hidden md:table-cell !hover:bg-primary">À Vista/Boleto</TableHead>
              <TableHead className="bg-primary text-white font-semibold py-3 hidden lg:table-cell !hover:bg-primary">2-5x Cartão</TableHead>
              <TableHead className="bg-primary text-white font-semibold py-3 hidden lg:table-cell !hover:bg-primary">6-10x Cartão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item: any, index: number) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-pink-50"}>
                  <TableCell className="font-medium">{item.model}</TableCell>
                  <TableCell>{item.repairType}</TableCell>
                  <TableCell className="font-medium text-primary">{item.pixPrice}</TableCell>
                  <TableCell className="hidden md:table-cell">{item.cashPrice}</TableCell>
                  <TableCell className="hidden lg:table-cell">{item.installments2to5}</TableCell>
                  <TableCell className="hidden lg:table-cell">{item.installments6to10}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  {searchTerm ? "Nenhum modelo encontrado com esse termo." : "Nenhum dado disponível. Verifique a conexão com a planilha."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground md:text-sm">
        <p>* Valores com pagamento no PIX têm 5% de desconto</p>
        <p>* Deslize para o lado para ver todas as opções de pagamento</p>
        {!isSheetLoaded && (
          <p className="text-amber-600 mt-2">⚠️ Para garantir valores atualizados, entre em contato conosco</p>
        )}
      </div>
    </div>
  );
};
