
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteEditingGuide } from "@/components/admin/site-editing-guide";
import { DeploymentGuide } from "@/components/admin/deployment-guide";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Área Administrativa</h1>
          
          <Tabs defaultValue="editing">
            <TabsList className="mb-8">
              <TabsTrigger value="editing">Guia de Edição</TabsTrigger>
              <TabsTrigger value="deployment">Guia de Implantação</TabsTrigger>
            </TabsList>
            
            <TabsContent value="editing">
              <SiteEditingGuide />
            </TabsContent>
            
            <TabsContent value="deployment">
              <DeploymentGuide />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
