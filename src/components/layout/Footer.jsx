import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/*  Copyright */}
        <div className="text-center md:text-left">
          <p className="font-medium text-slate-200">
            © {currentYear} Luis Chicaiza
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Desarrollado con <span className="text-indigo-400">React</span> & <span className="text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6">
           <a 
             href="https://www.linkedin.com/in/chicaiza-luis" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="LinkedIn"
             className="text-slate-500 hover:text-indigo-400 transition-colors transform hover:scale-110"
           >
             <FaLinkedin className="w-5 h-5" />
           </a>
           
           <a 
             href="https://github.com/LuisChicaizaDev"
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="GitHub"
             className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"
           >
             <FaGithub className="w-5 h-5" />
           </a>
        </div>

      </div>
    </footer>
  );
};
