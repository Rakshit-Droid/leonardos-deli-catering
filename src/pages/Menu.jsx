import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DownloadSimple,
  MagnifyingGlass,
  ShoppingBag,
  ArrowUpRight,
  X,
} from '@phosphor-icons/react';

import CTA from '../components/CTA.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import Divider from '../components/Divider.jsx';

import { site } from '../data/site.js';
import { menuCategories } from '../data/menu.js';
import { deliveryLogos } from '../data/images.js';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const [query, setQuery] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top?.target?.dataset?.id) setActive(top.target.dataset.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    const node = sectionRefs.current[id];
    if (!node) return;
    const offset = 120;
    const top = node.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return menuCategories;
    const q = query.toLowerCase();
    return menuCategories
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            i.name.toLowerCase().includes(q) ||
            i.detail.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <>
      <MenuHero />

      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="sticky top-[88px] z-20 -mx-4 border-b border-espresso-800/10 bg-ivory-100/85 px-4 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              {menuCategories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => scrollTo(c.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium tracking-tight transition-all duration-500 ease-out-expo ${
                    active === c.id
                      ? 'bg-espresso-800 text-ivory-100'
                      : 'bg-espresso-800/5 text-espresso-700 hover:bg-espresso-800/10'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
            <div className="relative w-full md:max-w-xs">
              <MagnifyingGlass
                weight="regular"
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search the menu…"
                className="w-full rounded-full bg-espresso-800/5 py-2.5 pl-10 pr-10 text-sm text-espresso-800 placeholder:text-espresso-400 ring-1 ring-inset ring-espresso-800/10 focus:outline-none focus:ring-espresso-800/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-espresso-800/10 text-espresso-700 transition-colors hover:bg-espresso-800/20"
                >
                  <X className="h-3 w-3" weight="regular" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 pb-24 md:grid-cols-12 md:gap-12">
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-[180px]">
              <div className="eyebrow mb-4 text-espresso-400">Sections</div>
              <ul className="space-y-1">
                {menuCategories.map((c, i) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(c.id)}
                      className={`group flex w-full items-baseline justify-between border-b border-espresso-800/10 py-3 text-left transition-colors ${
                        active === c.id
                          ? 'text-espresso-900'
                          : 'text-espresso-500 hover:text-espresso-800'
                      }`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] text-espresso-400">0{i + 1}</span>
                        <span className="font-display text-lg leading-tight">{c.title}</span>
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          active === c.id ? 'bg-tomato-600' : 'bg-transparent'
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-3xl bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-ivory-100 p-5 shadow-inset">
                  <div className="eyebrow text-espresso-400">Full menu</div>
                  <p className="mt-3 text-sm text-espresso-700 leading-relaxed">
                    Take the deli-credit menu to go, with prices by the pound.
                  </p>
                  <div className="mt-5">
                    <CTA
                      as="a"
                      href={site.menuPdf}
                      target="_blank"
                      rel="noreferrer"
                      variant="solid"
                      size="sm"
                      icon={DownloadSimple}
                      magnetic={false}
                    >
                      Download PDF
                    </CTA>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <EmptySearch query={query} onClear={() => setQuery('')} />
            ) : (
              filtered.map((cat) => (
                <section
                  key={cat.id}
                  data-id={cat.id}
                  ref={(el) => (sectionRefs.current[cat.id] = el)}
                  className="scroll-mt-40 pt-16 first:pt-0 md:pt-20"
                >
                  <Reveal>
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <Eyebrow tone="olive">{cat.kicker}</Eyebrow>
                        <h2 className="mt-4 font-display text-5xl md:text-6xl leading-none tracking-tighter text-espresso-800">
                          {cat.title}
                        </h2>
                      </div>
                      <span className="font-mono text-[11px] text-espresso-400">
                        {cat.items.length.toString().padStart(2, '0')} items
                      </span>
                    </div>
                  </Reveal>

                  <ul className="mt-10 divide-y divide-espresso-800/10">
                    {cat.items.map((item, i) => (
                      <Reveal key={item.name} delay={i * 40}>
                        <li className="group grid grid-cols-12 gap-4 py-6 transition-colors">
                          <div className="col-span-12 md:col-span-8">
                            <div className="flex items-baseline gap-4">
                              <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight text-espresso-800">
                                {item.name}
                              </h3>
                              <span
                                aria-hidden="true"
                                className="hidden flex-1 translate-y-[-4px] border-b border-dotted border-espresso-800/30 md:block"
                              />
                              <span className="hidden font-mono text-base text-espresso-800 md:inline">
                                {item.price}
                              </span>
                            </div>
                            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-espresso-500">
                              {item.detail}
                            </p>
                            {item.pairing && (
                              <div className="mt-3 eyebrow text-tomato-600">
                                Pairs with {item.pairing}
                              </div>
                            )}
                          </div>
                          <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-4 md:justify-end">
                            <span className="font-mono text-base text-espresso-800 md:hidden">
                              {item.price}
                            </span>
                            <a
                              href={site.ordering.direct}
                              target="_blank"
                              rel="noreferrer"
                              className="group/btn inline-flex items-center gap-2 rounded-full bg-espresso-800/5 px-4 py-2 text-[12px] font-medium text-espresso-800 ring-1 ring-inset ring-espresso-800/10 transition-all duration-500 ease-out-expo hover:bg-espresso-800 hover:text-ivory-100"
                            >
                              <ShoppingBag weight="regular" className="h-3.5 w-3.5" />
                              <span>Order</span>
                              <ArrowUpRight className="h-3 w-3 -translate-x-0.5 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-0" />
                            </a>
                          </div>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </section>
              ))
            )}
          </div>
        </div>
      </div>

      <OrderingChannels />
    </>
  );
}

/* --------------------------- MENU HERO --------------------------- */

function MenuHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto grid w-[min(94vw,1280px)] grid-cols-1 items-end gap-10 px-4 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>The menu</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] text-espresso-800">
              Cut to order.
              <br />
              <span className="font-display-italic text-tomato-600">Dressed at</span> the counter.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[52ch] text-espresso-500 text-[17px] leading-relaxed">
              Seven sections, one philosophy: buy well, season correctly, leave it alone.
              Nothing sits in a warming drawer. Nothing comes frozen.
            </p>
          </Reveal>
        </div>
        <Reveal delay={240} className="md:col-span-5">
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <CTA
              as="a"
              href={site.menuPdf}
              target="_blank"
              rel="noreferrer"
              variant="solid"
              size="md"
              icon={DownloadSimple}
            >
              Download PDF menu
            </CTA>
            <CTA
              as="a"
              href={site.ordering.direct}
              target="_blank"
              rel="noreferrer"
              variant="tomato"
              size="md"
              icon={ShoppingBag}
            >
              Order online
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- EMPTY STATE --------------------------- */

function EmptySearch({ query, onClear }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-espresso-800/20 bg-espresso-800/[0.02] px-6 py-20 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso-800/5 text-espresso-400">
        <MagnifyingGlass weight="regular" className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-espresso-800">
        Nothing matches "{query}"
      </h3>
      <p className="mt-3 max-w-sm text-sm text-espresso-500">
        Try a different term — prosciutto, mozzarella, eggplant, cannoli, espresso.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 rounded-full bg-espresso-800 px-5 py-2 text-sm font-medium text-ivory-100 transition-transform active:scale-[0.98]"
      >
        Clear search
      </button>
    </div>
  );
}

/* --------------------------- ORDERING CHANNELS --------------------------- */

function OrderingChannels() {
  const channels = [
    {
      name: 'Direct — Bento',
      sub: 'Lowest fees, fastest pickup',
      href: site.ordering.direct,
      highlight: true,
    },
    { name: 'Grubhub', sub: 'Delivery across Rockland', href: site.ordering.grubhub, logo: deliveryLogos.grubhub },
    { name: 'UberEats', sub: 'Same-day delivery', href: site.ordering.ubereats, logo: deliveryLogos.ubereats },
    { name: 'DoorDash', sub: 'Tri-state delivery', href: site.ordering.doordash, logo: deliveryLogos.doordash },
  ];

  return (
    <section className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <Divider label="Where to order" />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex h-full flex-col justify-between rounded-[1.75rem] p-7 ring-1 ring-inset transition-all duration-500 ease-out-expo ${
                  c.highlight
                    ? 'bg-espresso-800 text-ivory-100 ring-white/5 hover:bg-espresso-900'
                    : 'bg-ivory-100 text-espresso-800 ring-espresso-800/10 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`eyebrow ${
                      c.highlight ? 'text-ivory-100/60' : 'text-espresso-400'
                    }`}
                  >
                    {c.highlight ? 'Recommended' : 'Partner'}
                  </span>
                  {c.logo && (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory-100 p-1.5 ring-1 ring-inset ring-espresso-800/10">
                      <img src={c.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                    </span>
                  )}
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-2xl leading-tight tracking-tight">
                    {c.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      c.highlight ? 'text-ivory-100/70' : 'text-espresso-500'
                    }`}
                  >
                    {c.sub}
                  </p>
                </div>
                <span
                  className={`mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ease-out-expo ${
                    c.highlight
                      ? 'bg-ivory-100/10 text-ivory-100 group-hover:bg-tomato-500'
                      : 'bg-espresso-800/5 text-espresso-800 group-hover:bg-espresso-800 group-hover:text-ivory-100'
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
