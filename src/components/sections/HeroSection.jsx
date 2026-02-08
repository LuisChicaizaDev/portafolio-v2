import { useState } from 'react';
import { ChevronRight, MailCheck, GraduationCap, Atom } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection = () => {
  // Estado para controlar la carga de la imagen
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 lg:pt-50 pb-20 px-6 relative overflow-hidden flex items-center min-h-[90vh] md:min-h-[80vh]">
      
      {/* --- EFECTOS DE FONDO (Background Ambient) --- */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* --- BLOQUE 2: LAYOUT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col items-start text-left md:items-center lg:items-start">
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge icon={GraduationCap} text="Estudiante de Ingeniería Informática" />
              </div>

              {/* Título Principal */}
              <h1 className="text-5xl md:text-7xl font-extrabold md:text-center lg:text-start text-white mb-6 tracking-tight">
                Desarrollador <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">Web</span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
                Estudiante de Ingeniería Informática con <span className="font-bold text-indigo-300">+2 años de experiencia</span> en proyectos reales. Me caracterizo por ser resolutivo: sé investigar, enfrentar problemas y <span className="font-bold text-indigo-300">sacar el trabajo adelante</span>.
                Busco un equipo técnico donde pueda aportar esta autonomía y seguir aprendiendo y creciendo profesionalmente.
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" icon={ChevronRight} onClick={() => scrollToSection('proyectos')}>
                  Ver Proyectos 
                </Button>
                <Button variant="secondary" icon={MailCheck} onClick={() => scrollToSection('contacto')}>
                  Contactarme
                </Button>
              </div>
          </div>

          {/* --- COLUMNA DERECHA IMAGEN  --- */}
          <div className="order-1 lg:order-2 flex justify-center relative">
              
              {/* Contenedor Principal*/}
              <div className="relative group w-72 h-80 sm:w-80 sm:h-96 perspective-1000">
                  
                  {/* Glow de fondo */}
                  <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/20 rounded-4xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>

                  {/* Wireframe */}
                  <div className="absolute inset-0 border-2 border-slate-700/50 rounded-4xl bg-slate-900/40 backdrop-blur-sm -rotate-6 translate-y-4 group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:translate-y-8 transition-all duration-500 ease-out z-0">
                      <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px]"></div>
                  </div>

                  {/* Foto  */}
                  <div className="absolute inset-0 rounded-4xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl z-10 group-hover:scale-[1.02] transition-all duration-500">
                      {/* Skeleton */}
                      <div className="absolute inset-0 bg-slate-800 animate-pulse" style={{ display: isHeroImageLoaded ? 'none' : 'block' }}></div>

                      <img 
                        src="https://img.freepik.com/psd-gratis/ilustracion-icono-contacto-aislada_23-2151903337.jpg?t=st=1769601962~exp=1769605562~hmac=c2458a21f4914926194b5bbc4e3864966b51f73a0c8a950e203c199ef3cf24a1&w=1480" 
                        alt="Luis Chicaiza Desarrollador Frontend" 
                        loading="eager" // Carga inmediata
                        fetchPriority="high" // Alta prioridad
                        className={`w-full h-full object-cover transition-all duration-800 ${isHeroImageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
                        onLoad={() => setIsHeroImageLoaded(true)} // Avisa cuando termina
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>

                  {/* Snippet de Código */}
                  <div className="absolute bottom-8 -left-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl group-hover:-translate-x-4 group-hover:translate-y-2 transition-transform duration-500 z-20">
                      <div className="flex gap-1 mb-2 animate-[pulse_4s_linear_infinite]">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      </div>
                      <div className="space-y-1">
                          <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
                          <div className="h-2 w-14 bg-indigo-500/50 rounded-full"></div>
                      </div>
                      <span className="absolute -bottom-6 left-2 text-xs text-slate-400">Component.jsx</span>
                  </div>

                  {/*  Etiqueta de Nombre */}
                  <div className="absolute bottom-4 right-4 z-20 text-right">
                      <span className="block text-base font-semibold text-indigo-400 tracking-tight">Luis Chicaiza</span>
                  </div>

              </div>
          </div>

        </div>
      </div>
    </section>
  );
};
