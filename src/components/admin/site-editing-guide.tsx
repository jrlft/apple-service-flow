
import { Button } from "@/components/ui/button";

export function SiteEditingGuide() {
  const downloadPdf = () => {
    // In a real implementation, this would generate or download a PDF
    alert("Em um site real, este botão geraria ou baixaria um PDF com instruções detalhadas.");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guia de Edição do Site</h2>
      <p className="mb-4">
        Aqui está um guia básico para editar seu site. Para instruções mais detalhadas, 
        baixe o PDF completo clicando no botão abaixo.
      </p>
      
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-lg font-medium">Estrutura de Arquivos</h3>
          <p className="text-muted-foreground">
            O código-fonte do site está organizado em pastas específicas:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li><strong>src/pages</strong>: Contém as páginas principais do site</li>
            <li><strong>src/components</strong>: Componentes reutilizáveis</li>
            <li><strong>public</strong>: Imagens e arquivos estáticos</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium">Editando Conteúdo</h3>
          <p className="text-muted-foreground">
            Para editar textos, abra os arquivos correspondentes nas pastas src/pages ou src/components e 
            modifique os textos dentro das tags.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium">Adicionando Imagens</h3>
          <p className="text-muted-foreground">
            Coloque suas imagens na pasta public/ e referencie-as nos componentes.
          </p>
          <div className="bg-gray-100 p-3 rounded-md mt-2 text-sm">
            <code>{"<img src=\"/nome-da-imagem.jpg\" alt=\"Descrição da imagem\" />"}</code>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium">Hospedagem</h3>
          <p className="text-muted-foreground">
            Para hospedar o site, execute o comando <code>npm run build</code> para gerar a pasta dist/. 
            Faça upload de todo o conteúdo desta pasta para o servidor de hospedagem.
          </p>
        </div>
      </div>
      
      <Button onClick={downloadPdf}>
        Baixar Guia Completo em PDF
      </Button>
    </div>
  );
}
