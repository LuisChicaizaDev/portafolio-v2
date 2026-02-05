import { Briefcase, GraduationCap, Calendar, CheckCircle2, Route } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/experience';
import { Badge } from '../ui/Badge';

export const ExperienceSection = () => {

  return (
    <section id="trayectoria" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Grid Pattern*/}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[44px_44px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <Route className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experiencia <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">& Formación</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-3xl text-lg">
            Mi recorrido técnico combinando el trabajo en entornos reales con la formación académica continua en ingeniería.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* EXPERIENCIA LABORAL */}
          <div className="lg:col-span-7 space-y-12">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </span>
              Experiencia Laboral
            </h3>

            <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
              {EXPERIENCE_DATA.work.map((job) => (
                <div key={job.company} className="group relative pl-8 md:pl-12">

                  {/* Punto en la línea de tiempo */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_4px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_18px_rgba(99,102,241,0.9)] transition-all"></div>

                  {/* Tarjeta de Experiencia */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {job.role}
                      </h4>
                      
                      <Badge icon={Calendar} text={job.dates}/>
                    </div>

                    <h5 className="text-md text-slate-400 font-medium mb-4">
                      {job.company}
                    </h5>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Logros / Tareas */}
                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" />
                          <span className="opacity-90">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORMACIÓN */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              Formación Académica
            </h3>

            <div className="space-y-6">
              {EXPERIENCE_DATA.education.map((edu) => (
                <div key={edu.id} className="bg-slate-900/30 border border-slate-800 p-5 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-slate-200 font-bold text-sm leading-tight">
                      {edu.degree}
                    </h4>
                    {edu.current && (
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                        Actual
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400 text-xs font-medium mb-1">{edu.school}</p>
                  <p className="text-slate-500 text-xs mb-3">{edu.dates}</p>
                  {/* Descripción opcional corta */}
                  {/* <p className="text-slate-400 text-xs leading-relaxed">{edu.description}</p> */}
                </div>
              ))}
            </div>

            {/* Mensaje motivacional o cierre */}
            <div className="bg-linear-to-br from-slate-900 to-indigo-950/30 p-5 rounded-xl border border-slate-800/50 mt-8">
              <p className="text-slate-400 text-sm italic">
                "La formación continua es mi motor. Actualmente compagino mi trabajo con estudios de ingeniería para profundizar en arquitecturas complejas."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};