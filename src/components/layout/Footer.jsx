import { SocialLinks } from "../ui/SocialLinks"

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/*  Copyright */}
        <div className="text-center md:text-left">
          <p className="font-medium text-slate-400">
            © {currentYear} Luis Chicaiza
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Desarrollado con <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Tailwind CSS</span> & <span className="text-indigo-400">Cursor</span>.
          </p>
        </div>

        {/* Redes Sociales */}
        <SocialLinks />
      </div>
    </footer>
  );
};
