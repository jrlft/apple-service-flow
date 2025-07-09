
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Headphones, Smartphone, HardDrive } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OutrosServicos = () => {
  const { t, language } = useLanguage();
  
  const servicosExtras = [
    {
      categoria: t('otherServices.categories.physicalCleaning'),
      itens: [
        { dispositivo: "iPhone", preco: "R$ 50,00", descricao: t('otherServices.cleaning.iphone') },
        { dispositivo: "iPad", preco: "R$ 70,00", descricao: t('otherServices.cleaning.ipad') },
        { dispositivo: "MacBook", preco: "R$ 120,00", descricao: t('otherServices.cleaning.macbook') },
        { dispositivo: "iMac", preco: "R$ 150,00", descricao: t('otherServices.cleaning.imac') },
        { dispositivo: "Apple Watch", preco: "R$ 30,00", descricao: t('otherServices.cleaning.applewatch') }
      ]
    },
    {
      categoria: t('otherServices.categories.backupRestore'),
      itens: [
        { dispositivo: "iPhone/iPad", preco: "R$ 80,00", descricao: t('otherServices.backup.iphoneipad') },
        { dispositivo: "Mac", preco: "R$ 150,00", descricao: t('otherServices.backup.mac') },
        { dispositivo: t('otherServices.backup.dataRecovery'), preco: "A partir de R$ 200,00", descricao: t('otherServices.backup.dataRecovery') }
      ]
    },
    {
      categoria: t('otherServices.categories.smartphoneRental'),
      itens: [
        { dispositivo: "iPhone temporário", preco: "R$ 25,00/dia", descricao: t('otherServices.rental.temporaryIphoneDaily') },
        { dispositivo: "iPhone básico", preco: "R$ 120,00/semana", descricao: t('otherServices.rental.basicIphone') },
        { dispositivo: "iPhone premium", preco: "R$ 200,00/semana", descricao: t('otherServices.rental.premiumIphone') }
      ]
    },
    {
      categoria: t('otherServices.categories.diagnosticConsulting'),
      itens: [
        { dispositivo: "Diagnóstico completo", preco: "R$ 60,00", descricao: t('otherServices.diagnostic.complete') },
        { dispositivo: "Consultoria técnica", preco: "R$ 100,00/hora", descricao: t('otherServices.diagnostic.technicalConsulting') },
        { dispositivo: "Setup inicial", preco: "R$ 120,00", descricao: t('otherServices.diagnostic.initialSetup') }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-4xl mx-auto text-center">
                <SectionTitle 
                  title={t('otherServices.title')} 
                  subtitle={t('otherServices.subtitle')} 
                  centered
                />
                <p className="text-muted-foreground">
                  {t('otherServices.description')}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Seção Beats, Locação e Recuperação */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <AnimatedElement direction="left">
                <div className="bg-card rounded-lg shadow-md p-8 border">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <Headphones className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t('otherServices.beats.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('otherServices.beats.description')}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• {t('otherServices.beats.driverRepair')}</li>
                    <li>• {t('otherServices.beats.padReplacement')}</li>
                    <li>• {t('otherServices.beats.cableRepair')}</li>
                    <li>• {t('otherServices.beats.preventiveMaintenance')}</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message={t('otherServices.beats.whatsappMessage')}
                    className="w-full"
                  >
                    {t('otherServices.beats.getQuote')}
                  </WhatsAppButton>
                </div>
              </AnimatedElement>

              <AnimatedElement>
                <div className="bg-card rounded-lg shadow-md p-8 border">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <Smartphone className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t('otherServices.rental.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('otherServices.rental.description')}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• {t('otherServices.rental.temporaryIphone')}</li>
                    <li>• {t('otherServices.rental.dailyWeekly')}</li>
                    <li>• {t('otherServices.rental.basicPremium')}</li>
                    <li>• {t('otherServices.rental.setupIncluded')}</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message={t('otherServices.rental.whatsappMessage')}
                    className="w-full"
                  >
                    {t('otherServices.rental.requestRental')}
                  </WhatsAppButton>
                </div>
              </AnimatedElement>

              <AnimatedElement direction="right">
                <div className="bg-card rounded-lg shadow-md p-8 border">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <HardDrive className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t('otherServices.recovery.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('otherServices.recovery.description')}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• {t('otherServices.recovery.photosVideos')}</li>
                    <li>• {t('otherServices.recovery.fullBackup')}</li>
                    <li>• {t('otherServices.recovery.contactRestore')}</li>
                    <li>• {t('otherServices.recovery.dataMigration')}</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message={t('otherServices.recovery.whatsappMessage')}
                    className="w-full"
                  >
                    {t('otherServices.recovery.recoverData')}
                  </WhatsAppButton>
                </div>
              </AnimatedElement>
            </div>

            {/* Tabela de Outros Serviços */}
            <AnimatedElement>
              <div className="bg-card rounded-lg shadow-md p-8 border">
                <h3 className="text-2xl font-bold mb-6 text-center">{t('otherServices.priceTable.title')}</h3>
                <p className="text-muted-foreground text-center mb-8">
                  {t('otherServices.priceTable.description')}
                </p>
                
                {servicosExtras.map((categoria, index) => (
                  <div key={index} className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary">{categoria.categoria}</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border px-4 py-3 text-left font-semibold">{t('otherServices.table.device')}</th>
                            <th className="border border-border px-4 py-3 text-left font-semibold">{t('otherServices.table.price')}</th>
                            <th className="border border-border px-4 py-3 text-left font-semibold">{t('otherServices.table.description')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoria.itens.map((item, itemIndex) => (
                            <tr key={itemIndex} className="hover:bg-muted/50">
                              <td className="border border-border px-4 py-3">{item.dispositivo}</td>
                              <td className="border border-border px-4 py-3 font-semibold text-primary">{item.preco}</td>
                              <td className="border border-border px-4 py-3 text-sm text-muted-foreground">{item.descricao}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-6 border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>{language === 'en' ? 'Note:' : 'Observações:'}</strong> {t('otherServices.note')}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="text-3xl font-bold mb-6">{t('otherServices.customService.title')}</h2>
                <p className="text-lg mb-8 opacity-90">
                  {t('otherServices.customService.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <a href="/contato">{language === 'en' ? 'Contact Us' : 'Entre em Contato'}</a>
                  </Button>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message={t('otherServices.customService.whatsappMessage')}
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90"
                  >
                    WhatsApp
                  </WhatsAppButton>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OutrosServicos;
