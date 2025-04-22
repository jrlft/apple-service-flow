
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Only show after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white z-50 shadow-lg border-t border-gray-200 p-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-sm">
              Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você aceita nossa{" "}
              <Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link> e{" "}
              <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <Button onClick={acceptCookies} size="sm">
              Aceitar Cookies
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowConsent(false)} className="border-none p-1">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
