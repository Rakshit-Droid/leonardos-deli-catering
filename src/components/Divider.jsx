export default function Divider({ label, align = 'left' }) {
  return (
    <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
      {align === 'center' && <span aria-hidden="true" className="h-px flex-1 bg-espresso-800/15" />}
      <span className="eyebrow text-espresso-400">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-espresso-800/15" />
    </div>
  );
}
