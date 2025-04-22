
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-12">
          <div className="container">
            <AnimatedElement>
              <SectionTitle 
                title="Política de Cookies" 
                subtitle="Saiba como utilizamos cookies em nosso site"
                centered
              />
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white rounded-lg shadow-md p-8 prose prose-blue max-w-none">
                <h2>1. O que são cookies?</h2>
                <p>
                  Cookies são pequenos arquivos de texto que os sites colocam no seu dispositivo quando você os visita. 
                  Esses arquivos armazenam informações sobre suas preferências e outras informações que ajudam a melhorar 
                  sua experiência no site.
                </p>

                <h2>2. Como usamos os cookies?</h2>
                <p>Utilizamos cookies pelos seguintes motivos:</p>
                <ul>
                  <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site.</li>
                  <li><strong>Cookies de preferências:</strong> Permitem que o site lembre suas escolhas e personalize a experiência.</li>
                  <li><strong>Cookies estatísticos:</strong> Ajudam-nos a entender como os visitantes interagem com o site.</li>
                  <li><strong>Cookies de marketing:</strong> Utilizados para rastrear os visitantes entre sites para permitir anúncios personalizados.</li>
                </ul>

                <h2>3. Quais cookies utilizamos?</h2>
                
                <h3>3.1 Cookies Essenciais</h3>
                <p>
                  Estes cookies são necessários para o funcionamento do site e não podem ser desativados em nossos sistemas. 
                  Geralmente são configurados apenas em resposta a ações feitas por você, como definir suas preferências de 
                  privacidade, fazer login ou preencher formulários.
                </p>
                
                <h3>3.2 Cookies de Preferências</h3>
                <p>
                  Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Podem ser definidos 
                  por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas.
                </p>
                
                <h3>3.3 Cookies Estatísticos</h3>
                <p>
                  Estes cookies nos permitem contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho 
                  do nosso site. Eles nos ajudam a saber quais páginas são mais e menos populares e como os visitantes se movimentam 
                  pelo site.
                </p>
                
                <h3>3.4 Cookies de Marketing</h3>
                <p>
                  Estes cookies podem ser definidos através do nosso site pelos nossos parceiros de publicidade. Podem ser usados 
                  por essas empresas para criar um perfil de seus interesses e mostrar anúncios relevantes em outros sites.
                </p>

                <h2>4. Como gerenciar cookies?</h2>
                <p>
                  A maioria dos navegadores permite que você gerencie suas preferências de cookies. Você pode configurar seu 
                  navegador para recusar cookies ou para alertá-lo quando os sites tentam colocar cookies em seu dispositivo.
                </p>
                
                <p>Você pode ajustar suas configurações de cookies nos seguintes navegadores:</p>
                <ul>
                  <li><strong>Google Chrome:</strong> Menu &gt; Configurações &gt; Privacidade e segurança &gt; Cookies e dados do site</li>
                  <li><strong>Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade e Segurança &gt; Cookies</li>
                  <li><strong>Safari:</strong> Preferências &gt; Privacidade</li>
                  <li><strong>Microsoft Edge:</strong> Menu &gt; Configurações &gt; Cookies e permissões do site</li>
                </ul>

                <h2>5. Alterações na política de cookies</h2>
                <p>
                  Podemos atualizar esta política de cookies periodicamente. Recomendamos que você revise esta página 
                  regularmente para se manter informado sobre como estamos utilizando cookies.
                </p>

                <h2>6. Contato</h2>
                <p>
                  Se você tiver alguma dúvida sobre como usamos cookies, entre em contato conosco pelos canais disponíveis 
                  na página de contato.
                </p>
                
                <p className="text-sm text-muted-foreground mt-8">
                  Última atualização: {new Date().toLocaleDateString()}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
