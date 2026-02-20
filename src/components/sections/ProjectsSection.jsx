import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Zap,
  Images,
  X,
  Lock,
} from "lucide-react";
import { FiGithub, FiFigma } from "react-icons/fi";
import { Button } from "../ui/Button";
import { PROJECTS_DATA } from "../../data/projects";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const featuredCases = PROJECTS_DATA.projects.filter((p) => p.isFeatured);
  const standardProjects = PROJECTS_DATA.projects.filter((p) => !p.isFeatured);

  const openGalleryModal = (project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setSelectedProject(project);
    requestAnimationFrame(() => setIsModalOpen(true));
  };

  const closeGalleryModal = () => {
    setIsModalOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && selectedProject) {
        closeGalleryModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <FolderGit2 className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Proyectos{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Destacados
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-3xl text-lg">
            Más allá del código, me motiva{" "}
            <span className="font-bold text-indigo-300">
              crear utilidad real
            </span>
            . Un ejemplo es la digitalización de un negocio familiar, un
            proyecto donde{" "}
            <span className="font-bold text-indigo-300">
              asumí la responsabilidad de todo el ciclo de desarrollo
            </span>{" "}
            generando un impacto directo en el crecimiento del negocio.
          </p>
        </div>

        {/* =======================================================
            CASOS DE ESTUDIO 
           ======================================================= */}
        <div className="grid grid-cols-1 gap-8 mb-30">
          {featuredCases.map((project) => (
            <article
              key={project.title}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 p-6 md:p-8">
                {/* VISTA PREVIA */}
                <div className="order-2 w-full h-auto xl:h-90 relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="556"
                    height="348"
                    className="w-full h-full object-cover rounded-2xl border border-slate-400 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="order-1 w-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 bg-indigo-500/15 text-indigo-200 text-[11px] font-semibold px-4 py-2 rounded-full tracking-wide uppercase border border-indigo-500/20">
                      <Zap className="w-3 h-3 fill-current" />
                      Caso de Estudio: {project.studyType}
                    </span>
                    <div className="flex gap-2">
                      {project.gallery?.length > 0 && (
                        <button
                          type="button"
                          onClick={() => openGalleryModal(project)}
                          title="Ver capturas"
                          className="size-10 grid place-items-center rounded-full bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
                        >
                          <Images className="size-5" />
                        </button>
                      )}
                      {project.links.design && (
                        <a
                          href={project.links.design}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver diseño"
                          title="Ver diseño en Figma"
                          className="size-10 grid place-items-center rounded-full bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                        >
                          <FiFigma className="size-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver sitio web"
                          title="Ver sitio web"
                          className="size-10 grid place-items-center rounded-full border border-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500"
                        >
                          <ExternalLink className="size-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-400 bg-slate-950 border border-slate-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/*LOGROS*/}
                  {project.achievements && (
                    <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 mb-6">
                      <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> Logros
                      </h4>
                      <ul className="space-y-3">
                        {project.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-slate-300"
                          >
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
           PROYECTOS PERSONALES 
           ======================================================= */}
        <div className="text-center my-16">
          <h3 className="text-2xl font-bold text-white inline-block relative mb-4">
            Laboratorio & Prácticas
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Aquí es donde la curiosidad se convierte en código. Un recorrido
            desde mi{" "}
            <span className="font-bold text-indigo-300">
              Trabajo Final de Grado
            </span>{" "}
            hasta mis últimos experimentos, consolidando bases Frontend y
            Backend mientras exploro nuevas tecnologías.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-30">
          {standardProjects.map((project) => (
            <article
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-auto overflow-hidden bg-slate-800 aspect-16/10">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  width="403"
                  height="252"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 pt-1">
                    {project.year}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                  {/* dangerouslySetInnerHTML={{ __html: project.description }} */}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-950 rounded border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800">
                  {project.links.repo && (
                    <Button
                      variant="outline"
                      className="flex-1 py-2! text-xs!"
                      href={project.links.repo}
                      target="_blank"
                      icon={FiGithub}
                    >
                      Código
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="secondary"
                      className="flex-1 py-2! text-xs!"
                      href={project.links.demo}
                      target="_blank"
                      icon={ExternalLink}
                    >
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 z-90 p-4 md:p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
            isModalOpen
              ? "bg-slate-950/80 backdrop-blur-sm opacity-100"
              : "bg-slate-950/0 backdrop-blur-none opacity-0"
          }`}
          onClick={closeGalleryModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Capturas de ${selectedProject.title}`}
        >
          <div
            className={`max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
              isModalOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="px-6 md:px-8 py-5 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-indigo-300 mb-2">
                  Galería del proyecto
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeGalleryModal}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer transition-all duration-300"
                aria-label="Cerrar modal"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {selectedProject.gallery?.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.gallery.map((item, index) => (
                    <figure
                      key={`${selectedProject.title}-${index}`}
                      className="group bg-slate-950/60 border border-slate-800 rounded-2xl p-3 overflow-hidden"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="object-cover rounded-xl border border-slate-800 group-hover:scale-110 transition-all"
                      />
                      <figcaption className="text-xs text-slate-400 mt-3">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">
                  Este proyecto no tiene capturas cargadas todavía.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
