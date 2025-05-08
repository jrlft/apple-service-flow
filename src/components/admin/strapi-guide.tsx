
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code } from "lucide-react";

export function StrapiGuide() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Configurando o Strapi 5</CardTitle>
          <CardDescription>
            Guia de configuração do Strapi 5 para gerenciamento de conteúdo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium">1. Instalação</h3>
          <div className="bg-slate-100 p-3 rounded-md">
            <code className="text-sm">
              npx create-strapi-app@latest my-project
            </code>
          </div>
          <p className="text-muted-foreground">
            Siga o assistente de configuração para escolher o banco de dados e outras opções.
            Recomendamos usar SQLite para desenvolvimento e PostgreSQL para produção.
          </p>

          <Separator className="my-4" />

          <h3 className="text-lg font-medium">2. Inicialização do Strapi</h3>
          <div className="bg-slate-100 p-3 rounded-md">
            <code className="text-sm">
              cd my-project<br />
              npm run develop
            </code>
          </div>
          <p className="text-muted-foreground">
            O painel admin estará disponível em http://localhost:1337/admin
          </p>

          <Separator className="my-4" />

          <h3 className="text-lg font-medium">3. Configurando o tipo de conteúdo para blog</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Acesse o painel Admin do Strapi</li>
            <li>Navegue para "Content-Type Builder" no menu lateral</li>
            <li>Crie uma nova collection "blog-posts"</li>
            <li>Adicione os campos: title (texto), content (texto longo), slug (texto, único), excerpt (texto), category (texto), featuredImage (mídia)</li>
            <li>Salve a collection e publique</li>
          </ol>

          <Separator className="my-4" />

          <h3 className="text-lg font-medium">4. Configurando permissões</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Vá para "Settings" → "Roles & Permissions"</li>
            <li>Configure permissões para "Public" para permitir requisições GET</li>
            <li>Configure permissões para "Authenticated" para permitir todas as operações CRUD</li>
          </ol>

          <Separator className="my-4" />

          <h3 className="text-lg font-medium">5. Criando um usuário Admin</h3>
          <p className="text-muted-foreground mb-2">
            Crie um usuário admin para gerenciar o conteúdo via painel administrativo.
          </p>
          <p className="text-muted-foreground">
            Esse usuário será diferente do usuário definido na aplicação React. 
            O usuário React acessa a API do Strapi, enquanto o usuário Strapi gerencia o painel admin.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuração da Aplicação</CardTitle>
          <CardDescription>
            Como configurar sua aplicação para se conectar ao Strapi
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium">1. Configurando variáveis de ambiente</h3>
          <p className="text-muted-foreground">
            Crie um arquivo <code className="bg-slate-100 px-1">.env</code> na raiz do seu projeto com as seguintes variáveis:
          </p>
          <div className="bg-slate-100 p-3 rounded-md">
            <code className="text-sm">
              # Strapi Configuration<br />
              VITE_STRAPI_URL=http://seu-servidor-strapi:1337/api<br />
              VITE_ADMIN_PASSWORD=suaSenhaSeguraDeAdmin<br />
              <br />
              # Other Environment Variables<br />
              VITE_SITE_URL=http://seu-site.com
            </code>
          </div>

          <Separator className="my-4" />

          <h3 className="text-lg font-medium">2. Acessando o Painel Admin</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Na aplicação React, acesse a rota <code className="bg-slate-100 px-1">/admin</code></li>
            <li>Entre com a senha configurada em <code className="bg-slate-100 px-1">VITE_ADMIN_PASSWORD</code></li>
            <li>Você terá acesso ao painel para gerir posts do blog e outros conteúdos</li>
          </ol>

          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-4 flex">
            <Code className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-800">Importante</h4>
              <p className="text-yellow-700 text-sm">
                O admin da aplicação React é separado do admin do Strapi. 
                O admin React permite gerenciar posts usando a API do Strapi, enquanto o admin Strapi 
                permite configurar tipos de conteúdo, campos e gerenciar todos os conteúdos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
