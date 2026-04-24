import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { List, X, Phone } from '@phosphor-icons/react';
import { site, nav } from '../data/site.js';
import { logos } from '../data/images.js';
import CTA from './CTA.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '0px' },
    );
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:48px;width:1px;pointer-events:none;';
    document.body.prepend(sentinel);
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-auto mx-auto mt-4 flex w-[min(94vw,1180px)] items-center justify-between gap-4 px-2 transition-all duration-500 ease-out-expo md:mt-5">
          <Link
            to="/"
            aria-label="Leonardo's Italian Deli & Catering — home"
            className="group flex flex-col items-center gap-1.5 rounded-[2rem] bg-ivory-100/90 px-5 py-2.5 ring-1 ring-inset ring-espresso-800/10 backdrop-blur-xl transition-all duration-500 ease-out-expo hover:bg-ivory-50"
          >
            <img
              src={logos.primary}
              alt="Leonardo's Italian Deli & Catering"
              className="h-[66px] w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-[1.04] md:h-[72px]"
            />
            <span className="eyebrow text-[10px] leading-none text-espresso-400/80">
              New City, NY
            </span>
          </Link>

          <nav
            className={`hidden items-center gap-1 rounded-full py-1.5 pl-2 pr-1.5 ring-1 ring-inset backdrop-blur-xl transition-all duration-500 ease-out-expo md:flex ${
              scrolled
                ? 'bg-ivory-100/90 ring-espresso-800/10 shadow-diffuse'
                : 'bg-ivory-100/60 ring-espresso-800/10'
            }`}
          >
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-1.5 text-[14px] font-medium tracking-tight transition-all duration-500 ease-out-expo ${
                    isActive
                      ? 'bg-espresso-800 text-ivory-100'
                      : 'text-espresso-700 hover:text-espresso-900'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phone.deli.replace(/\D/g, '')}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-ivory-100/80 px-3 py-2 text-[13px] font-medium text-espresso-800 ring-1 ring-inset ring-espresso-800/10 backdrop-blur-xl transition-all duration-500 ease-out-expo hover:bg-ivory-50"
            >
              <Phone weight="regular" className="h-4 w-4" />
              {site.phone.deli}
            </a>
            <CTA
              as={Link}
              to="/contact"
              variant="tomato"
              size="sm"
              className="hidden md:inline-flex"
            >
              Request a quote
            </CTA>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100/80 ring-1 ring-inset ring-espresso-800/10 backdrop-blur-xl transition-all duration-500 ease-out-expo hover:bg-ivory-50 md:hidden"
            >
              <span className="sr-only">Toggle</span>
              <MorphIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-ivory-50/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <div className="mb-6 eyebrow text-espresso-400">Menu</div>
              <ul className="flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.to}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <NavLink
                      to={n.to}
                      end={n.to === '/'}
                      className={({ isActive }) =>
                        `flex items-baseline justify-between border-b border-espresso-800/10 py-4 font-display text-4xl leading-none tracking-tight transition-colors ${
                          isActive ? 'text-tomato-600' : 'text-espresso-800'
                        }`
                      }
                    >
                      <span>{n.label}</span>
                      <span className="eyebrow text-espresso-400">0{i + 1}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-4 pt-10">
                <a
                  href={`tel:${site.phone.deli.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-espresso-800"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-mono text-sm">{site.phone.deli}</span>
                </a>
                <CTA as={Link} to="/contact" variant="tomato" size="md" magnetic={false}>
                  Request a quote
                </CTA>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MorphIcon({ open }) {
  return (
    <span className="relative block h-4 w-4">
      <List
        weight="regular"
        className={`absolute inset-0 h-4 w-4 text-espresso-800 transition-all duration-500 ease-out-expo ${
          open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
        }`}
      />
      <X
        weight="regular"
        className={`absolute inset-0 h-4 w-4 text-espresso-800 transition-all duration-500 ease-out-expo ${
          open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
        }`}
      />
    </span>
  );
}
