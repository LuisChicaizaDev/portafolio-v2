import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ];

  const navClasses = isScrolled 
    ? 'top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 w-auto lg:w-190 rounded-3xl bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border border-slate-600/50' 
    : 'top-0 left-0 right-0 w-full bg-transparent py-6';

  const containerClasses = isScrolled
    ? 'w-full px-6' 
    : 'w-full max-w-6xl px-6 md:px-8 mx-auto'; 

  return (
    <>
      {/* Overlay oscuro para móvil */}
      {isMobileMenuOpen && (
        <div 
          className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
        <div className={`${containerClasses} transition-all duration-300 mx-auto`}>
          <div className="flex justify-between items-center">
            
            <a href="#inicio" className="group flex items-center gap-2 text-slate-100">
              <div className="bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                <img src="/assets/logo-luis.svg" className="size-10" alt="Logo Luis Chicaiza" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Luis<span className="text-indigo-500">Dev</span>
              </span>
            </a>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-6 text-sm font-medium text-slate-400">
                {navLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                ))}
              </ul>

              {/* Separador */}
              <div className="h-6 w-0.5 bg-slate-700"></div>

              {/* Iconos Sociales y CV */}
              <div className="flex items-center gap-4">
                
                <SocialLinks />
                
                {/* BOTÓN DE DESCARGA CV*/}
                <Button variant="primary" className="py-1.5! px-4! text-xs! gap-2" icon={FileText}>
                  CV
                </Button>
              </div>
            </div>

            {/* --- MENU HAMBURGUESA --- */}
            <button 
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div className={`lg:hidden absolute top-full left-0 w-full mt-1 bg-slate-950 border border-slate-600/50 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl origin-top transition-all duration-350 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible scale-100" 
            : "opacity-0 -translate-y-5 invisible scale-90"
          }`}
        >
          {navLinks.map((link) =>(
            <a 
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-slate-800" />
          {/* Iconos Sociales y CV */}
          <div className="flex flex-col items-center justify-center gap-6">

            <Button variant="primary" className="gap-2" icon={FileText}>
              Descargar CV
            </Button>

            {/* Iconos Sociales*/}
            <SocialLinks iconSize="size-6" />
          </div>
        </div>
      </nav>
    </>
  );
};
