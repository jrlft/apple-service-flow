import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const NAV_ITEMS = [{
  label: "Início",
  href: "/"
}, {
  label: "Serviços",
  href: "/servicos"
}, {
  label: "iPhone",
  href: "/servicos/iphone"
}, {
  label: "iPad",
  href: "/servicos/ipad"
}, {
  label: "Mac",
  href: "/servicos/mac"
}, {
  label: "Watch",
  href: "/servicos/watch"
}, {
  label: "Preços",
  href: "/precos"
}, {
  label: "Dúvidas",
  href: "/faq"
}, {
  label: "Agendamento",
  href: "/agendamento"
}, {
  label: "Contato",
  href: "/contato"
}, {
  label: "Blog",
  href: "/blog"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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
  return <header className={cn("fixed top-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-white bg-opacity-95 shadow-md py-3" : "bg-transparent py-5")}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="Link TI Logo" src="/lovable-uploads/27d0f32d-9804-4b98-a47a-f2c663bf247a.png" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map(item => <Link key={item.href} to={item.href} className={cn("text-sm font-medium transition-colors hover:text-primary flex items-center gap-1", location.pathname === item.href ? "text-primary" : "text-foreground")}>
              {item.label}
            </Link>)}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleNavbar} aria-label="Toggle Menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
            <nav className="container flex flex-col py-8">
              {NAV_ITEMS.map(item => <Link key={item.href} to={item.href} className={cn("text-lg py-3 font-medium transition-colors hover:text-primary", location.pathname === item.href ? "text-primary" : "text-foreground")}>
                  {item.label}
                </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
}