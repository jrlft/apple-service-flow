
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/shared/LanguageSelector";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const NAV_ITEMS_ROW_1 = [
    {
      label: t('nav.home'),
      href: "/"
    },
    {
      label: t('nav.services'),
      href: "/servicos"
    },
    {
      label: t('nav.iphone'),
      href: "/servicos/iphone"
    },
    {
      label: t('nav.ipad'),
      href: "/servicos/ipad"
    },
    {
      label: t('nav.mac'),
      href: "/servicos/mac"
    },
    {
      label: t('nav.watch'),
      href: "/servicos/watch"
    },
    {
      label: t('nav.otherServices'),
      href: "/servicos/outros"
    }
  ];

  const NAV_ITEMS_ROW_2 = [
    {
      label: t('nav.airpods'),
      href: "/servicos/airpods"
    },
    {
      label: "Quiz",
      href: "/quiz"
    },
    {
      label: t('nav.prices'),
      href: "/precos"
    },
    {
      label: t('nav.faq'),
      href: "/faq"
    },
    {
      label: t('nav.appointment'),
      href: "/agendamento"
    },
    {
      label: t('nav.contact'),
      href: "/contato"
    },
    {
      label: t('nav.blog'),
      href: "/blog"
    },
    {
      label: "SOS Dados",
      href: "/sos-dados",
      special: true
    }
  ];

  // Para mobile, combine todas as opções
  const ALL_NAV_ITEMS = [...NAV_ITEMS_ROW_1, ...NAV_ITEMS_ROW_2];

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur dark:bg-gray-900/95 shadow-md py-2" : "bg-transparent py-3"
    )}>
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Layout horizontal completo */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                alt="Link TI Logo" 
                src="/lovable-uploads/27d0f32d-9804-4b98-a47a-f2c663bf247a.png" 
                className="h-12" 
              />
            </Link>

            {/* Container do menu e controles */}
            <div className="flex items-center h-full">
              {/* Menu principal em duas linhas */}
              <div className="flex flex-col justify-center h-full mr-6">
                {/* Primeira linha do menu */}
                <nav className="flex items-center space-x-3 mb-1 justify-end">
                  {NAV_ITEMS_ROW_1.map(item => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                        location.pathname === item.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Segunda linha do menu */}
                <nav className="flex items-center space-x-3 justify-end">
                  {NAV_ITEMS_ROW_2.map(item => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                        item.special ? "text-red-500 font-bold" : (location.pathname === item.href ? "text-primary" : "text-foreground")
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Linha separadora vertical */}
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 mx-4"></div>

              {/* Controles de idioma e tema */}
              <div className="flex flex-col justify-center h-full space-y-1">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              alt="Link TI Logo" 
              src="/lovable-uploads/27d0f32d-9804-4b98-a47a-f2c663bf247a.png" 
              className="h-10" 
            />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleNavbar} 
              aria-label={t('nav.toggleMenu')}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 lg:hidden">
            <nav className="container flex flex-col py-8">
              {ALL_NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-lg py-3 font-medium transition-colors hover:text-primary",
                    (item as any).special ? "text-red-500 font-bold" : (location.pathname === item.href ? "text-primary" : "text-foreground")
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
