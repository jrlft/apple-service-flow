
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
      label: t('nav.airpods'),
      href: "/servicos/airpods"
    }
  ];

  const NAV_ITEMS_ROW_2 = [
    {
      label: t('nav.otherServices'),
      href: "/servicos/outros"
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
          {/* Primeira linha - Logo + Navegação + Controles */}
          <div className="flex items-start justify-between mb-2">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                alt="Link TI Logo" 
                src="/lovable-uploads/27d0f32d-9804-4b98-a47a-f2c663bf247a.png" 
                className="h-12" 
              />
            </Link>

            <div className="flex items-start gap-8">
              {/* Navegação primeira linha */}
              <nav className="flex items-center space-x-6">
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

              {/* Controles empilhados - idioma em cima, modo escuro embaixo */}
              <div className="flex flex-col items-end gap-1">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Segunda linha - Navegação secundária alinhada à direita */}
          <div className="flex justify-end" style={{ marginRight: '140px' }}>
            <nav className="flex items-center space-x-6">
              {NAV_ITEMS_ROW_2.map(item => (
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
                    location.pathname === item.href ? "text-primary" : "text-foreground"
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
