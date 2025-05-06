
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { useEffect, useState } from "react";
import { fetchPage } from "@/lib/strapi";

const Termos = () => {
  const [page, setPage] = useState<any>(null);
  useEffect(() => { fetchPage("termos").then(setPage); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{page?.attributes?.title || "Termos de Uso"}</h1>
            <div className="prose max-w-none">
              {page?.attributes?.content ? (
                <div dangerouslySetInnerHTML={{ __html: page.attributes.content }} />
              ) : (
                <>
                  <p className="text-muted-foreground italic mb-8">
                    Este é um modelo de página para seus Termos de Uso. Substitua este texto pelo conteúdo real dos seus termos.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">2. Descrição dos Serviços</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">3. Responsabilidades do Usuário</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitação de Responsabilidade</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">5. Direitos de Propriedade Intelectual</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">6. Modificações nos Termos</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">7. Lei Aplicável</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  
                  <p className="mt-8">
                    Última atualização: {new Date().toLocaleDateString()}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termos;
