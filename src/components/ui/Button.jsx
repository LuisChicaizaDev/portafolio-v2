// Recibimos
// - children: el texto del botón
// - variant: 'primary', 'secondary' u 'outline'
// - icon: un componente de icono opcional
// - className: clases extra por si necesitamos sobreescribir algo desde fuera
// - props: el resto de propiedades (onClick, type, disabled, etc.)
export const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  className = '', 
  href, // prop para enlaces
  ...props }) => {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 focus:ring-slate-500",
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500"
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;

  // Es un enlace (tiene href) se Renderizamos <a>
  if (href) {
    return (
      <a 
        href={href} 
        className={finalClass} 
        {...props} // Aquí se pasa 'download', 'target'.
      >
        {children}
        {Icon && <Icon className="ml-2 w-4 h-4" />}
      </a>
    );
  }

  return (
    <button 
      className={finalClass} 
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};
