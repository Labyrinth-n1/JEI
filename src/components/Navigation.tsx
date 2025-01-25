import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logojei from "../assets/images/jei.png"
import { useNavigate } from "react-router-dom";
import "./css/Navigation.css"

const Navigation = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Programme", href: "#programme" },
  ];

  return (
    <nav style={{
       boxShadow:'0 2px 5px rgba(0,0,0,0.3)',
       padding:'.5rem',
       alignItems:'center',
       justifyContent:'center',

    }}
          className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              <img src={logojei} className='logo' alt="Logo de la JEI" />
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-black-600 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
                href="#inscription"
              >
               
                <Button
                    style={{backgroundColor:"#0e885a", borderRadius: '20px'}}
                    className="w-full" 
                    size="lg"
                    onClick={() => {navigate(menuItems[2].href)}}
                >
                      Inscription
                </Button>

                </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <a 
                href="#inscription"
              >
               
               <Button
                    style={{backgroundColor:"#0e885a"}}
                    className="w-full" 
                    size="lg"
                    onClick={() => {navigate(menuItems[2].href)}}
                >
                    Inscription
                </Button>

                </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;