import { ExternalLink, FolderGit2, CheckCircle2, Zap, Palette, Folder } from 'lucide-react';
import { FiGithub } from "react-icons/fi";
import { Button } from '../ui/Button'; 
import { PROJECTS_DATA } from '../../data/projects';

export const ProjectsSection = () => {
  // Separamos los proyectos: Destacados vs Estándar
  const featuredCases = PROJECTS_DATA.projects.filter(p => p.isFeatured);
  const standardProjects = PROJECTS_DATA.projects.filter(p => !p.isFeatured);

  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <FolderGit2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Proyectos <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">Destacados</span>
              </h2>
           </div>
           <p className="text-slate-400 max-w-3xl text-lg">
              Más allá del código, me motiva resolver problemas y ayudar. Aquí muestro cómo apliqué mis conocimientos para impulsar un negocio familiar, utilizando este reto real como plataforma de aprendizaje para dominar todo el ciclo de desarrollo de un proyecto.
           </p>
        </div>

        {/* =======================================================
            CASOS DE ESTUDIO 
           ======================================================= */}
        <div className="grid gap-12 mb-30">
           {featuredCases.map((project) => (
             <article 
               key={project.title} 
               className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
             >
                <div className="flex flex-col lg:flex-row h-full">
                  
                  {/* COLUMNA IZQUIERDA: IMAGEN */}
                  <div className="w-full h-auto lg:h-auto relative overflow-hidden bg-slate-950">
                     {/* Badge Flotante "CASO DE ESTUDIO" */}
                     <div className="absolute top-6 left-6 z-20">
                        <span className="inline-flex items-center gap-2 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-indigo-600/20 tracking-wide uppercase">
                           <Zap className="w-3 h-3 fill-current" />
                           Caso de Estudio: {project.studyType}
                        </span>
                     </div>
                     
                     <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       loading="lazy"
                       className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                     />
                  </div>

                  {/*  CONTENIDO */}
                  <div className="w-full p-6 lg:p-8 flex flex-col justify-center">
                     
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                       {project.title}
                     </h3>
                     
                     <p className="text-slate-400 text-base leading-relaxed mb-8">
                       {project.description}
                     </p>

                     {/*LOGROS*/}
                     {project.achievements && (
                       <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-8">
                          <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Logros
                          </h4>
                          <ul className="space-y-3">
                             {project.achievements.map((item, i) => (
                               <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                                  {item}
                               </li>
                             ))}
                          </ul>
                       </div>
                     )}

                     {/* TAGS */}
                     <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-slate-400 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                     </div>

                     {/* BOTONES */}
                     <div className="flex flex-wrap gap-4">
                        {project.links.demo && (
                          <Button 
                            variant="primary" 
                            href={project.links.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            icon={ExternalLink}
                          >
                            Ver Resultado
                          </Button>
                        )}
                        {/* Botón Figma si existe */}
                        {project.links.design && (
                           <Button 
                             variant="outline" 
                             href={project.links.design} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             icon={Palette}
                           >
                             Ver Diseño
                           </Button>
                        )}
                        {/* Botón Repo (si lo hubiera en futuro) */}
                        {project.links.repo && (
                           <Button 
                             variant="outline" 
                             href={project.links.repo} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             icon={FiGithub}
                           >
                             Código
                           </Button>
                        )}
                     </div>

                  </div>
                </div>
             </article>
           ))}
        </div>

        {/* =======================================================
           PROYECTOS PERSONALES 
           ======================================================= */}      
        <div className="my-16 flex items-end gap-4">
           <div>
           <h3 className="text-2xl font-bold text-white mb-4">
              Laboratorio & Prácticas
            </h3>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Desde mi Trabajo Final de Curso hasta mis últimos experimentos con IA. 
              Aquí es donde pruebo nuevas tecnologías y consolido conocimientos.
            </p>
           </div>
           <div className="h-px grow bg-slate-800 mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-30">
          {standardProjects.map((project) => (
            <article 
              key={project.title} 
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-auto overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <span className="text-xs font-mono text-slate-500 pt-1">{project.year}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                  {/* dangerouslySetInnerHTML={{ __html: project.description }} */}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-950 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800">
                  {project.links.repo && (
                    <Button variant="outline" className="flex-1 py-2! text-xs!" href={project.links.repo} target="_blank" icon={FiGithub}>Código</Button>
                  )}
                  {project.links.demo && (
                    <Button variant="secondary" className="flex-1 py-2! text-xs!" href={project.links.demo} target="_blank" icon={ExternalLink}>Demo</Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            OTROS PROYECTOS 
           ======================================================= */}
        <div className="text-center my-16">
            <h3 className="text-2xl font-bold text-white inline-block relative mb-4">
              Otros Proyectos
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Pequeños proyectos enfocados en experimentar y dominar conceptos específicos (CSS Grid, Flexbox React Hooks, Maquetación) que me han servido como primera toma de contacto para probar nuevas tecnologías.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS_DATA.other_projects.map((project) => (
            <div 
              key={project.title}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-slate-700"
            >
               {/* HEADER CARD: CARPETA + LINKS */}
               <div className="flex justify-between items-start mb-6">
                  <div className="text-indigo-500 group-hover:text-indigo-400 transition-colors">
                     <Folder className="size-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-4">
                     {project.links.repo && (
                       <a 
                         href={project.links.repo} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-slate-400 hover:text-white transition-colors"
                         aria-label="Ver Código"
                       >
                         <FiGithub className="w-5 h-5" />
                       </a>
                     )}
                     {project.links.demo && (
                       <a 
                         href={project.links.demo} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-slate-400 hover:text-white transition-colors"
                         aria-label="Ver Demo"
                       >
                         <ExternalLink className="w-5 h-5" />
                       </a>
                     )}
                  </div>
               </div>
               
               {/* TITULO & DESCRIPCION */}
               <h4 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                 {project.title}
               </h4>
               
               <p className="text-sm h-auto text-slate-400 leading-relaxed mb-6 overflow-hidden">
                 {project.description}
               </p>
               
               {/* TAGS AL PIE */}
               <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-950 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};