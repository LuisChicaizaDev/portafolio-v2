import { ExternalLink, Images, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export const AiExperimentCard = ({ project, onOpenGallery }) => (
  <article className="group relative bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
    <div className="flex flex-col lg:flex-row items-stretch gap-0">
      <div className="order-2 lg:order-1 lg:w-3/5 p-6 md:p-8 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <span className="inline-flex self-start items-center gap-2 bg-indigo-500/15 text-indigo-200 text-[11px] font-semibold px-4 py-2 rounded-full tracking-wide uppercase border border-indigo-500/20">
            <Sparkles className="size-3.5" />
            {project.studyType}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.year}
          </span>
        </div>

        <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {project.title}
        </h4>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 mb-5">
          <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Sparkles className="size-4" />
            IA en el desarrollo
          </h5>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.aiUsage}
          </p>
        </div>

        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
          Flujo de desarrollo con IA
        </p>
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-300 mb-4">
          {project.workflow}
        </p>

        <div className="mb-5">
          <ul className="space-y-2">
            {project.keyDecisions.slice(0, 3).map((decision) => (
              <li key={decision} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                {decision}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-950 rounded border border-slate-800">
              {tag}
            </span>
          ))}
        </div>

        {(project.links.demo || onOpenGallery) && (
          <div className="mt-auto pt-4 border-t border-slate-800 flex flex-wrap gap-3">
            {project.links.demo && (
              <Button
                variant="primary"
                className="w-full sm:w-auto py-3! text-sm!"
                href={project.links.demo}
                target="_blank"
                icon={ExternalLink}
              >
                Ver proyecto
              </Button>
            )}
            {onOpenGallery && (
              <Button
                type="button"
                variant="primary"
                className="w-full sm:w-auto py-3! text-sm!"
                onClick={onOpenGallery}
                icon={Images}
              >
                Ver galería
              </Button>
            )}
          </div>
        )}
      </div>

      {project.image && (
        <div className="order-1 lg:order-2 lg:aspect-auto lg:w-2/5 relative bg-slate-800 overflow-hidden border-b lg:border-b-0 lg:border-l border-slate-800">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
          <picture className="block w-full h-full">
            <source media="(max-width: 1023px)" srcSet={project.mobileImage} />
            <img
              src={project.image}
              alt={`Vista previa de ${project.title}`}
              width="1000"
              height="1350"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </picture>
        </div>
      )}
    </div>
  </article>
);
