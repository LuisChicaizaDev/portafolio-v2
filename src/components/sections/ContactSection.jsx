import { useState } from 'react'
import { Mail, Linkedin, ExternalLink, Copy, Check } from 'lucide-react'

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "luis97chicaiza@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout( () => setCopied(false), 2000);
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- TEXTO Y BOTONES --- */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              colaborar?
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Si buscas un perfil híbrido con mentalidad de ingeniero para tu equipo frontend o fullstack, mi terminal siempre está abierta.
          </p>

          <div className="flex flex-col gap-4 max-w-lg">

            {/* BOTÓN EMAIL  */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 md:p-6 inline-flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 hover:border-indigo-500/30 transition-colors">

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>

                <div className="text-left">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Escríbeme a</p>
                  <a 
                    href={`mailto:${email}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Botón Copiar */}
              <button
                onClick={handleCopy}
                className="self-end p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all active:scale-95 ml-0 md:ml-2"
                title="Copiar email"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* BOTÓN LINKEDIN */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 md:p-6 inline-flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 hover:border-indigo-500/30 transition-colors">

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400">
                  <Linkedin className="w-6 h-6" />
                </div>

                <div className="text-left">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Linkedin</p>
                  <a 
                    href="https://www.linkedin.com/in/chicaiza-luis/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    in/chicaiza-luis
                  </a>
                </div>
              </div>


              <a
                href="https://www.linkedin.com/in/chicaiza-luis/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-end p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all active:scale-95 ml-0 md:ml-2"
                title="Ir a LinkedIn"
              >
                <ExternalLink className="w-5 h-5  transition-colors" />
              </a>
            </div>

          </div>
        </div>

      {/* --- VS CODE MOCKUP  --- */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-1 bg-linear-to-tr from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="relative bg-slate-900 border font-mono border-slate-800 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]">

            {/* Barra superior (Tabs) */}
            <div className="flex items-center bg-slate-950/50 px-4 py-2 pb-0">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              {/* Tab */}
              <div className="bg-slate-950/50 text-indigo-200 text-xs px-3 py-1.5 rounded-t-md flex items-center gap-2 border border-slate-900">
                <span className="text-[#61DAFB]">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  className="w-5 h-5"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                </span> App.jsx
              </div>
              {/* Tab Activa */}
              <div className="bg-slate-800 text-indigo-400 text-xs px-3 py-1.5 rounded-t-md flex items-center gap-2 border-t-2 border-indigo-500">
                <span className="text-[#61DAFB]">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  className="w-5 h-5"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                </span> ContactSection.jsx
              </div>
            </div>

            {/* Área de Código */}
            <div className="p-6 font-bold text-sm leading-relaxed overflow-x-auto">
              <div className="flex">
                {/* Números de línea */}
                <div className="flex flex-col text-slate-600 pr-4 select-none text-right">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                </div>

                {/* Código con Syntax Highlighting simulado */}
                <div className="text-slate-300">
                  <div>
                    <span className="text-purple-400">import</span> {'{'} useState {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;
                  </div>
                  <div className="h-4"></div>
                  <div>
                    <span className="text-blue-400 italic">export const</span> <span className="text-yellow-300">ContactSection</span> = () <span className="text-blue-400">=&gt;</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-500">&lt;</span><span className="text-red-400">div</span> <span className="text-orange-300">className</span>=<span className="text-emerald-300">"status-card"</span><span className="text-slate-500">&gt;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-slate-500">&lt;</span><span className="text-red-400">h1</span><span className="text-slate-500">&gt;</span>
                    Buscando nuevos retos profesionales 🚀
                    <span className="text-slate-500">&lt;/</span><span className="text-red-400">h1</span><span className="text-slate-500">&gt;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-slate-500">&lt;</span><span className="text-yellow-300">Availability</span>
                  </div>
                  <div className="pl-16">
                    <span className="text-orange-300">status</span>=<span className="text-blue-400">{'{'}</span><span className="text-emerald-300">true</span><span className="text-blue-400">{'}'}</span>
                  </div>
                  <div className="pl-16">
                    <span className="text-orange-300">type</span>=<span className="text-emerald-300">"Frontend"</span>
                  </div>
                  <div className="pl-16">
                    <span className="text-orange-300">location</span>=<span className="text-emerald-300">"Presencial / Híbrido / Remoto"</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-slate-500">/&gt;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-500">&lt;/</span><span className="text-red-400">div</span><span className="text-slate-500">&gt;</span>
                  </div>
                  <div className="pl-4">
                    );
                  </div>
                  <div>{'}'};</div>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
