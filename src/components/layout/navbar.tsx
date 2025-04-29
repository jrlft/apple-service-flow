
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "iPhone", href: "/servicos/iphone" },
  { label: "iPad", href: "/servicos/ipad" },
  { label: "Mac", href: "/servicos/mac" },
  { label: "Watch", href: "/servicos/watch" },
  { label: "Preços", href: "/precos" },
  { label: "Contato", href: "/contato" },
  { label: "Curso de iPhone", href: "/curso-iphone", highlight: true },
  { label: "Blog", href: "/blog" },
];

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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="bg-gray-200 h-10 w-32 rounded-md flex items-center justify-center text-sm text-gray-500">
            Logo Placeholder
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                location.pathname === item.href ? "text-primary" : "text-foreground",
                item.highlight ? "px-3 py-1 rounded bg-primary text-white shadow font-bold border border-primary" : ""
              )}
            >
              {item.label}
              {item.highlight && (
                <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded uppercase font-bold animate-pulse">Novo</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleNavbar}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
            <nav className="container flex flex-col py-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                location.pathname === item.href ? "text-primary" : "text-foreground",
                item.highlight ? "px-3 py-1 rounded bg-primary text-white shadow font-bold border border-primary" : ""
              )}
            >
              {item.label}
              {item.highlight && (
                <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded uppercase font-bold animate-pulse">Novo</span>
              )}
            </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
