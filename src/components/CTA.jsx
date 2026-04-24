import { forwardRef } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import MagneticButton from './MagneticButton.jsx';

/**
 * Island CTA — pill with nested circular icon (Button-in-Button pattern).
 * variant: 'solid' (espresso on ivory), 'ghost' (outline on any bg), 'tomato' (accent)
 */
const CTA = forwardRef(function CTA(
  {
    as: Tag = 'a',
    children,
    variant = 'solid',
    size = 'md',
    icon: Icon = ArrowUpRight,
    className = '',
    magnetic = true,
    ...rest
  },
  ref,
) {
  const sizes = {
    sm: 'pl-4 pr-1.5 py-1.5 text-sm gap-3',
    md: 'pl-6 pr-2 py-2 text-[15px] gap-4',
    lg: 'pl-8 pr-2.5 py-2.5 text-base gap-5',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const variants = {
    solid:
      'bg-espresso-800 text-ivory-100 hover:bg-espresso-900 ring-1 ring-inset ring-white/5',
    tomato:
      'bg-tomato-600 text-ivory-100 hover:bg-tomato-500 ring-1 ring-inset ring-white/10',
    ghost:
      'bg-transparent text-espresso-800 hover:bg-espresso-800/5 ring-1 ring-inset ring-espresso-800/20',
    cream:
      'bg-ivory-100 text-espresso-800 hover:bg-ivory-50 ring-1 ring-inset ring-espresso-800/5',
  };

  const iconWrap = {
    solid: 'bg-ivory-100/10 text-ivory-100 group-hover:bg-ivory-100 group-hover:text-espresso-800',
    tomato: 'bg-ivory-100/15 text-ivory-100 group-hover:bg-ivory-100 group-hover:text-tomato-600',
    ghost: 'bg-espresso-800/5 text-espresso-800 group-hover:bg-espresso-800 group-hover:text-ivory-100',
    cream: 'bg-espresso-800/5 text-espresso-800 group-hover:bg-espresso-800 group-hover:text-ivory-100',
  };

  const button = (
    <Tag
      ref={ref}
      className={`group inline-flex items-center rounded-full font-medium tracking-[-0.01em] transition-all duration-500 ease-out-expo active:scale-[0.98] active:-translate-y-[1px] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`flex items-center justify-center rounded-full ${iconSizes[size]} ${iconWrap[variant]} transition-all duration-500 ease-out-expo`}
        aria-hidden="true"
      >
        <Icon
          weight="regular"
          className="w-[1.1em] h-[1.1em] transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
        />
      </span>
    </Tag>
  );

  return magnetic ? <MagneticButton>{button}</MagneticButton> : button;
});

export default CTA;
