export default function Eyebrow({ children, tone = 'default', className = '' }) {
  const tones = {
    default:
      'bg-espresso-800/5 text-espresso-700 ring-espresso-800/10',
    onDark:
      'bg-ivory-100/10 text-ivory-100/80 ring-ivory-100/15',
    olive:
      'bg-olive-600/10 text-olive-700 ring-olive-600/20',
    tomato:
      'bg-tomato-600/10 text-tomato-600 ring-tomato-600/20',
  };
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-inset ${tones[tone]} ${className}`}
    >
      <span className="relative flex h-1 w-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
        <span className="relative inline-flex h-1 w-1 rounded-full bg-current" />
      </span>
      {children}
    </span>
  );
}
