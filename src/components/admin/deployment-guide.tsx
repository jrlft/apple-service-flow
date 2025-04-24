
import { Button } from "@/components/ui/button";

export function DeploymentGuide() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guia de Implantação do Site</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">1. Preparando os Arquivos</h3>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              Abra o terminal no diretório do projeto
            </li>
            <li>
              Execute o comando <code className="bg-gray-100 px-2 py-1 rounded">npm run build</code>
            </li>
            <li>
              Isso criará uma pasta chamada <code className="bg-gray-100 px-2 py-1 rounded">dist</code> com todos os arquivos otimizados do site
            </li>
          </ol>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">2. Fazendo Upload para o Servidor</h3>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              Conecte-se ao seu servidor via FTP usando um programa como FileZilla
            </li>
            <li>
              Navegue até a pasta raiz do seu domínio (geralmente chamada de <code className="bg-gray-100 px-2 py-1 rounded">public_html</code>, <code className="bg-gray-100 px-2 py-1 rounded">www</code> ou <code className="bg-gray-100 px-2 py-1 rounded">htdocs</code>)
            </li>
            <li>
              Faça upload de todo o conteúdo da pasta <code className="bg-gray-100 px-2 py-1 rounded">dist</code> para esta pasta
            </li>
          </ol>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">3. Configuração do Servidor</h3>
          <p className="mt-2">
            Este site foi criado como um aplicativo de página única (SPA), então você precisa configurar seu servidor para redirecionar todas as solicitações para o arquivo index.html.
          </p>
          
          <div className="mt-4">
            <h4 className="font-medium">Para servidores Apache:</h4>
            <p className="text-sm">Crie ou edite um arquivo <code>.htaccess</code> na raiz do seu site com o seguinte conteúdo:</p>
            <pre className="bg-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
              {`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`}
            </pre>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium">Para servidores Nginx:</h4>
            <p className="text-sm">Adicione o seguinte ao seu arquivo de configuração Nginx:</p>
            <pre className="bg-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
              {`location / {
  try_files $uri $uri/ /index.html;
}`}
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">4. Estrutura de Arquivos no Servidor</h3>
          <p className="mt-2">
            Depois de fazer o upload, seu servidor deve ter esta estrutura básica:
          </p>
          <pre className="bg-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
            {`public_html/ (ou www/ ou htdocs/)
├── assets/
├── images/
├── index.html
└── .htaccess (para servidores Apache)`}
          </pre>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">5. Testando o Site</h3>
          <p className="mt-2">
            Após fazer o upload e configurar o servidor, acesse seu domínio para verificar se o site está funcionando corretamente.
            Teste a navegação entre páginas e verifique se os recursos (imagens, estilos) estão carregando corretamente.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <Button>
          Baixar Guia de Implantação Completo
        </Button>
      </div>
    </div>
  );
}
