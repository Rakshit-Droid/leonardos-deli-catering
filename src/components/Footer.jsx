import { Link } from 'react-router-dom';
import { InstagramLogo, FacebookLogo, Envelope, Phone, MapPin, ArrowUpRight } from '@phosphor-icons/react';
import { site, nav } from '../data/site.js';
import { logos } from '../data/images.js';
import Marquee from './Marquee.jsx';

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-espresso-900 text-ivory-100">
      <Marquee
        items={[
          'Family-run since 1986',
          'Imports from Parma, Naples & Sicily',
          'Catering across the tri-state',
          '14 N. Main, New City',
          'Pulled mozzarella daily',
          'Espresso until 11a (we\'re strict)',
        ]}
        className="border-y border-ivory-100/10 py-8"
      >
        {null}
      </Marquee>

      <div className="mx-auto grid w-[min(94vw,1180px)] grid-cols-1 gap-14 px-4 py-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <img
            src={logos.primary}
            alt="Leonardo's Italian Deli & Catering"
            className="h-14 w-auto invert brightness-0 opacity-90"
          />
          <h2 className="mt-8 font-display text-5xl md:text-6xl leading-[0.95] tracking-tighter">
            Come in <span className="font-display-italic text-tomato-400">hungry.</span><br />
            Leave fed.
          </h2>
          <p className="mt-6 max-w-[42ch] text-ivory-100/65 leading-relaxed">
            We've been feeding New City and the Hudson Valley for nearly four decades.
            Breakfast at 7:30, gravy on by nine, catering trucks loaded by noon.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${site.address.mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 text-ivory-100/80 hover:text-ivory-100"
            >
              <MapPin weight="regular" className="mt-1 h-4 w-4 shrink-0 text-tomato-400" />
              <span className="text-sm leading-relaxed">
                {site.address.line1}<br />
                {site.address.line2}
              </span>
              <ArrowUpRight className="mt-1 h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-500 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0" />
            </a>
            <a href={`tel:${site.phone.deli.replace(/\D/g, '')}`} className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-100">
              <Phone weight="regular" className="h-4 w-4 shrink-0 text-tomato-400" />
              <span className="font-mono text-sm">{site.phone.deli} · deli</span>
            </a>
            <a href={`tel:${site.phone.catering.replace(/\D/g, '')}`} className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-100">
              <Phone weight="regular" className="h-4 w-4 shrink-0 text-tomato-400" />
              <span className="font-mono text-sm">{site.phone.catering} · catering</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-100">
              <Envelope weight="regular" className="h-4 w-4 shrink-0 text-tomato-400" />
              <span className="font-mono text-sm">{site.email}</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <span className="eyebrow text-ivory-100/50">Visit</span>
          <ul className="mt-4 space-y-2.5">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-ivory-100/10 pb-2 text-sm">
                <span className="text-ivory-100/70">{h.day}</span>
                <span className="font-mono text-ivory-100/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="eyebrow text-ivory-100/50">Navigate</span>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group inline-flex items-center gap-2 text-sm text-ivory-100/80 transition-colors hover:text-ivory-100"
                >
                  <span>{n.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-500 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-2">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100/5 ring-1 ring-inset ring-ivory-100/10 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900"
            >
              <InstagramLogo weight="regular" className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100/5 ring-1 ring-inset ring-ivory-100/10 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900"
            >
              <FacebookLogo weight="regular" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="mx-auto flex w-[min(94vw,1180px)] flex-col items-start justify-between gap-4 px-4 py-8 font-mono text-[11px] text-ivory-100/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Leonardo's Italian Deli & Catering · All rights reserved.</span>
          <span className="flex items-center gap-3">
            <span>Designed with patience.</span>
            <span className="h-1 w-1 rounded-full bg-ivory-100/30" aria-hidden="true" />
            <span>Rockland County, NY</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
