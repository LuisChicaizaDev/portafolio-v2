import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      
      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/chicaiza-luis" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        className="text-slate-400 hover:text-white transition-colors"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
      
      {/* GitHub */}
      <a 
        href="https://github.com/LuisChicaizaDev"
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
        className="text-slate-400 hover:text-white transition-colors"
      >
        <FaGithub className="w-5 h-5" />
      </a>

    </div>
  );
};
