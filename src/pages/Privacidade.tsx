
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

import { useEffect, useState } from "react";
import { fetchPage } from "@/lib/strapi";

const Privacidade = () => {
  const [page, setPage] = useState<any>(null);
  useEffect(() => { fetchPage("privacidade").then(setPage); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-12">
          <div className="container">
            <AnimatedElement>
              <SectionTitle 
                title={page?.attributes?.title || "Política de Privacidade"} 
                subtitle={page?.attributes?.subtitle || "Saiba como coletamos e utilizamos suas informações"}
                centered
              />
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white rounded-lg shadow-md p-8 prose prose-blue max-w-none">
                {page?.attributes?.content ? (
                  <div dangerouslySetInnerHTML={{ __html: page.attributes.content }} />
                ) : (
                  <div>Carregando...</div>
                )}
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos, processamos e compartilhamos suas informações, incluindo dados pessoais, 
                  relacionados ao uso dos nossos serviços. Valorizamos a privacidade dos nossos clientes e nos comprometemos a proteger seus dados pessoais.
                </p>

                <h2>2. Informações que coletamos</h2>
                <p>Podemos coletar os seguintes tipos de informações:</p>

                <h3>2.1 Informações que você nos fornece</h3>
                <ul>
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Endereço físico</li>
                  <li>Detalhes sobre seus dispositivos Apple</li>
                  <li>Informações de pagamento (quando aplicável)</li>
                  <li>Outras informações que você optar por fornecer</li>
                </ul>

                <h3>2.2 Informações coletadas automaticamente</h3>
                <ul>
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visualizadas e tempo gasto no site</li>
                  <li>Cookies e tecnologias similares (conforme descrito em nossa Política de Cookies)</li>
                </ul>

                <h2>3. Como usamos suas informações</h2>
                <p>Utilizamos suas informações para os seguintes propósitos:</p>
                <ul>
                  <li>Fornecer, manter e melhorar nossos serviços</li>
                  <li>Processar reparos e serviços solicitados</li>
                  <li>Comunicar-se com você sobre serviços, atualizações e promoções</li>
                  <li>Fornecer suporte ao cliente</li>
                  <li>Analisar como nossos serviços são utilizados</li>
                  <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2>4. Compartilhamento de informações</h2>
                <p>Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
                <ul>
                  <li>Com prestadores de serviços que trabalham em nosso nome</li>
                  <li>Com a Apple Inc. para serviços de garantia e suporte autorizado</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com seu consentimento ou mediante suas instruções</li>
                </ul>

                <p>
                  Não vendemos suas informações pessoais a terceiros para fins de marketing.
                </p>

                <h2>5. Segurança dos dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, 
                  alteração, divulgação ou destruição não autorizada. No entanto, nenhum método de transmissão pela internet ou método de 
                  armazenamento eletrônico é 100% seguro.
                </p>

                <h2>6. Seus direitos</h2>
                <p>Dependendo da sua localização, você pode ter os seguintes direitos:</p>
                <ul>
                  <li>Acessar as informações que temos sobre você</li>
                  <li>Corrigir ou atualizar informações imprecisas</li>
                  <li>Solicitar a exclusão de suas informações</li>
                  <li>Solicitar a restrição do processamento de suas informações</li>
                  <li>Portabilidade de dados</li>
                  <li>Opor-se ao processamento de suas informações</li>
                </ul>

                <h2>7. Retenção de dados</h2>
                <p>
                  Mantemos suas informações pelo tempo necessário para fornecer os serviços solicitados e cumprir nossas obrigações legais. 
                  Quando não precisamos mais processar suas informações, excluímos ou anonimizamos de maneira segura.
                </p>

                <h2>8. Crianças</h2>
                <p>
                  Nossos serviços não são destinados a crianças menores de 13 anos, e não coletamos intencionalmente informações pessoais 
                  de crianças menores de 13 anos.
                </p>

                <h2>9. Alterações a esta política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando 
                  a nova Política de Privacidade nesta página.
                </p>

                <h2>10. Contato</h2>
                <p>
                  Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelos canais disponíveis na página de contato.
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

export default Privacidade;
