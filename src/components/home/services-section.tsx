
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const SERVICES = [
    {
      title: "iPhone",
      description: t('services.iphone.description'),
      icon: <Smartphone className="h-10 w-10" />,
      link: "/servicos/iphone",
      delay: 0,
    },
    {
      title: "iPad",
      description: t('services.ipad.description'),
      icon: <Tablet className="h-10 w-10" />,
      link: "/servicos/ipad",
      delay: 0.1,
    },
    {
      title: "Mac",
      description: t('services.mac.description'),
      icon: <Laptop className="h-10 w-10" />,
      link: "/servicos/mac",
      delay: 0.2,
    },
    {
      title: "Apple Watch",
      description: t('services.watch.description'),
      icon: <Watch className="h-10 w-10" />,
      link: "/servicos/watch",
      delay: 0.3,
    },
    {
      title: "AirPods",
      description: t('services.airpods.description'),
      icon: <Headphones className="h-10 w-10" />,
      link: "/servicos/airpods",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-secondary dark:bg-secondary/10">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title={t('services.title')}
            subtitle={t('services.subtitle')}
            centered
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {SERVICES.map((service, index) => (
            <AnimatedElement key={index} delay={service.delay}>
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md h-full flex flex-col border dark:border-border">
                <div className="bg-primary bg-opacity-10 dark:bg-primary/20 p-4 rounded-full w-fit mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground flex-grow mb-4 text-sm">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.link}>{t('services.learnMore')}</Link>
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
