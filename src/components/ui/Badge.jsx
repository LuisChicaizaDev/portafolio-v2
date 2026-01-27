const Badge = ({ icon: Icon, text }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-indigo-300">
    {Icon && <Icon className="w-3 h-3 mr-2" />}
    {text}
  </span>
);

export default Badge;