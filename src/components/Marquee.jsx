import React from 'react';

const Marquee = React.memo(function Marquee({
  items,
  separator = '  •  ',
  className = '',
  speed = 'default',
  reverse = false,
  children,
}) {
  const content = children ?? (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap">
          <span>{item}</span>
          <span aria-hidden="true" className="px-8 text-espresso-400">
            {separator}
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={`marquee-track flex w-max ${
          speed === 'slow' ? 'slow' : ''
        } ${reverse ? 'reverse' : ''}`}
      >
        <div className="flex shrink-0">{content}</div>
        <div className="flex shrink-0">{content}</div>
      </div>
    </div>
  );
});

export default Marquee;
