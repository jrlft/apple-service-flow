
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Centro Autorizado Apple</h3>
            <p className="mb-6">
              Assistência técnica especializada em produtos Apple com técnicos certificados 
              e peças originais para o melhor serviço.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos/iphone" className="hover:text-accent transition-colors">Reparo de iPhone</Link></li>
              <li><Link to="/servicos/ipad" className="hover:text-accent transition-colors">Reparo de iPad</Link></li>
              <li><Link to="/servicos/mac" className="hover:text-accent transition-colors">Reparo de Mac</Link></li>
              <li><Link to="/servicos/watch" className="hover:text-accent transition-colors">Reparo de Apple Watch</Link></li>
              <li><Link to="/precos" className="hover:text-accent transition-colors">Tabela de Preços</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/termos" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/cookies" className="hover:text-accent transition-colors">Política de Cookies</Link></li>
              <li><Link to="/garantia" className="hover:text-accent transition-colors">Termos de Garantia</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@exemplo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Av. Exemplo, 123 - Cidade</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Centro Autorizado Apple. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Apple é uma marca registrada da Apple Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
