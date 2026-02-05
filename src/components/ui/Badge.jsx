export const Badge = ({ icon: Icon, text }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium bg-slate-900 border border-slate-800 text-indigo-300">
    {Icon && <Icon className="size-4.5 mr-2" />}
    {text}
  </span>
);

