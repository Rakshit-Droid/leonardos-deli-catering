import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Minus,
  Plus,
  CalendarBlank,
  ArrowUpRight,
  Phone,
  Star,
  Clock,
  Users,
  CurrencyDollar,
} from '@phosphor-icons/react';

import CTA from '../components/CTA.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import Divider from '../components/Divider.jsx';

import { site } from '../data/site.js';
import {
  cateringPackages,
  cateringGuarantees,
  eventTypes,
} from '../data/packages.js';

export default function Catering() {
  return (
    <>
      <CateringHero />
      <Timeline />
      <PackageCards />
      <ComparisonTable />
      <EventTypes />
      <GuaranteesBar />
      <FAQ />
      <QuoteCTA />
    </>
  );
}

/* --------------------------- HERO --------------------------- */

function CateringHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow tone="tomato">Catering · New City · Tri-state</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-light tracking-[-0.03em] leading-[0.9] text-espresso-800 text-[clamp(2.75rem,9vw,8rem)]">
                A kitchen
                <br />
                <span className="font-display-italic text-tomato-600">at your event.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[54ch] text-espresso-600 text-[18px] leading-relaxed md:text-[20px]">
                Three packages — intimate, signature, and full-service. Every build
                includes the same imports, the same pull, the same family running the line.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA as={Link} to="/contact" variant="tomato" size="lg" icon={CalendarBlank}>
                  Request a quote
                </CTA>
                <CTA
                  as="a"
                  href={`tel:${site.phone.catering.replace(/\D/g, '')}`}
                  variant="ghost"
                  size="lg"
                  icon={Phone}
                >
                  Call catering · {site.phone.catering}
                </CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320} className="md:col-span-4">
            <div className="rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10">
              <div className="rounded-[calc(2rem-0.375rem)] bg-ivory-100 p-7 shadow-inset">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-espresso-400">Next availability</span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-olive-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-olive-600" />
                    Open
                  </span>
                </div>
                <div className="mt-4 font-display text-4xl leading-tight tracking-tight text-espresso-800">
                  Saturday
                </div>
                <div className="font-mono text-sm text-espresso-500">May 3, 2026</div>
                <div className="mt-6 space-y-2 text-sm text-espresso-600">
                  <div className="flex justify-between border-b border-espresso-800/10 pb-2">
                    <span>Lunch service (11a–2p)</span>
                    <span className="font-mono text-olive-700">3 slots</span>
                  </div>
                  <div className="flex justify-between border-b border-espresso-800/10 pb-2">
                    <span>Dinner service (4p–9p)</span>
                    <span className="font-mono text-tomato-600">1 slot</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Late-night (9p+)</span>
                    <span className="font-mono text-olive-700">Open</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TIMELINE (How it works) --------------------------- */

function Timeline() {
  const steps = [
    {
      n: '01',
      title: 'Tell us about the day',
      copy: 'Date, headcount, venue, dietary notes. 60 seconds online or a two-minute phone call.',
      time: 'Day 0',
    },
    {
      n: '02',
      title: 'We build the menu together',
      copy: 'You get a named contact. We trade ideas, we trade tastings if you\'d like. No committee.',
      time: 'Day 1–3',
    },
    {
      n: '03',
      title: 'Quote returned, one page',
      copy: 'Everything priced: food, service, rental coordination, delivery, tax. No asterisks.',
      time: 'Day 2–5',
    },
    {
      n: '04',
      title: 'We cook, set, serve, clear',
      copy: 'Trays arrive hot. Tables stay set. When we leave, there is nothing on the counter.',
      time: 'Event day',
    },
  ];

  return (
    <section className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow tone="olive">How it works</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight text-espresso-800">
                Four steps.
                <br />
                <span className="font-display-italic text-olive-700">No committee.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <ol className="relative space-y-8 border-l border-espresso-800/15 pl-8 md:space-y-10">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ivory-50 ring-2 ring-espresso-800/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-tomato-600" />
                    </span>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-espresso-400">{s.n}</span>
                      <span className="eyebrow text-espresso-400">{s.time}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight tracking-tight text-espresso-800">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-espresso-500 leading-relaxed">
                      {s.copy}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PACKAGE CARDS --------------------------- */

function PackageCards() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Packages</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-espresso-800">
                Three ways to
                <br />
                <span className="font-display-italic text-tomato-600">host.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[36ch] text-espresso-500 leading-relaxed">
              Pick a tier and we'll tune it with you. Custom builds welcome for 40+ guests.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {cateringPackages.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 120}
              className={`md:col-span-4 ${
                p.id === 'bottega' ? 'md:-translate-y-8' : ''
              }`}
            >
              <article className="group relative flex h-full flex-col rounded-[2.25rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10 transition-all duration-500 ease-out-expo hover:-translate-y-1">
                {p.id === 'bottega' && (
                  <span className="absolute -top-3 left-6 z-10 flex items-center gap-1.5 rounded-full bg-tomato-600 px-3 py-1 text-ivory-100 eyebrow">
                    <Star weight="fill" className="h-2.5 w-2.5" />
                    Most booked
                  </span>
                )}
                <div
                  className={`flex h-full flex-col rounded-[calc(2.25rem-0.375rem)] p-8 md:p-10 ${
                    p.id === 'bottega'
                      ? 'bg-espresso-800 text-ivory-100 shadow-card'
                      : 'bg-ivory-100 text-espresso-800 shadow-inset'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className={`eyebrow ${
                          p.id === 'bottega' ? 'text-ivory-100/60' : 'text-espresso-400'
                        }`}
                      >
                        {p.tier}
                      </span>
                      <h3 className="mt-3 font-display text-4xl md:text-5xl leading-none tracking-tight">
                        {p.name}
                      </h3>
                    </div>
                    <span
                      className={`font-mono text-[11px] ${
                        p.id === 'bottega' ? 'text-ivory-100/50' : 'text-espresso-400'
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="font-display text-6xl md:text-7xl leading-none tracking-tighter">
                      ${p.pricePerGuest}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        p.id === 'bottega' ? 'text-ivory-100/50' : 'text-espresso-400'
                      }`}
                    >
                      / guest
                    </span>
                  </div>
                  <p
                    className={`mt-5 text-[15px] leading-relaxed ${
                      p.id === 'bottega' ? 'text-ivory-100/75' : 'text-espresso-500'
                    }`}
                  >
                    {p.summary}
                  </p>

                  <div
                    className={`my-7 h-px w-full ${
                      p.id === 'bottega' ? 'bg-ivory-100/15' : 'bg-espresso-800/10'
                    }`}
                  />

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]">
                    <span className="inline-flex items-center gap-1.5">
                      <Users weight="regular" className="h-3.5 w-3.5 opacity-60" />
                      <span className="font-mono">{p.minGuests}–{p.maxGuests}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock weight="regular" className="h-3.5 w-3.5 opacity-60" />
                      <span>{p.leadTime} notice</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CurrencyDollar weight="regular" className="h-3.5 w-3.5 opacity-60" />
                      <span>Tax incl.</span>
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed">
                        <span
                          className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            p.id === 'bottega' ? 'bg-tomato-400/15 text-tomato-400' : 'bg-olive-600/10 text-olive-700'
                          }`}
                        >
                          <Check weight="bold" className="h-2.5 w-2.5" />
                        </span>
                        <span
                          className={p.id === 'bottega' ? 'text-ivory-100/85' : 'text-espresso-700'}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <div
                      className={`mb-5 text-[11px] font-mono ${
                        p.id === 'bottega' ? 'text-ivory-100/50' : 'text-espresso-400'
                      }`}
                    >
                      Add-ons available: {p.addons.join(' · ')}
                    </div>
                    <CTA
                      as={Link}
                      to="/contact"
                      variant={p.id === 'bottega' ? 'tomato' : 'solid'}
                      size="md"
                      magnetic={false}
                      className="w-full justify-between"
                    >
                      Quote {p.name}
                    </CTA>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- COMPARISON TABLE --------------------------- */

function ComparisonTable() {
  const rows = [
    { label: 'Guest count', values: ['12–24', '25–80', '60–250'] },
    { label: 'Price per guest (starting)', values: ['$28', '$42', '$78'] },
    { label: 'Lead time', values: ['48 hours', '5 days', '3 weeks'] },
    { label: 'Delivery included', values: [true, true, true] },
    { label: 'On-site staff', values: [false, 'Optional', true] },
    { label: 'Hot entrées', values: ['2 choices', '3 choices', 'Unlimited consult'] },
    { label: 'Passed antipasti', values: [false, false, true] },
    { label: 'Espresso bar', values: [false, 'Add-on', 'Included'] },
    { label: 'Rental coordination', values: [false, 'Add-on', true] },
    { label: 'Dedicated coordinator', values: [false, true, true] },
    { label: 'Menu printing', values: [false, 'Add-on', true] },
  ];

  const Cell = ({ v }) => {
    if (v === true) return <Check weight="bold" className="h-4 w-4 text-olive-700" />;
    if (v === false) return <Minus weight="bold" className="h-4 w-4 text-espresso-300" />;
    return <span className="text-sm text-espresso-800">{v}</span>;
  };

  return (
    <section className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="olive">Compare</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight tracking-tight text-espresso-800">
                Everything, on one page.
              </h2>
            </div>
            <span className="font-mono text-[11px] text-espresso-400">Tax & gratuity included</span>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 overflow-hidden rounded-3xl bg-ivory-100 ring-1 ring-inset ring-espresso-800/10">
            <div className="grid grid-cols-4 border-b border-espresso-800/10 bg-espresso-800/[0.02]">
              <div className="px-6 py-5 eyebrow text-espresso-400">Feature</div>
              {cateringPackages.map((p) => (
                <div
                  key={p.id}
                  className={`px-6 py-5 text-left ${
                    p.id === 'bottega' ? 'bg-espresso-800 text-ivory-100' : ''
                  }`}
                >
                  <div
                    className={`eyebrow ${
                      p.id === 'bottega' ? 'text-ivory-100/60' : 'text-espresso-400'
                    }`}
                  >
                    {p.tier}
                  </div>
                  <div className="mt-1 font-display text-xl tracking-tight">
                    {p.name}
                  </div>
                </div>
              ))}
            </div>
            <div>
              {rows.map((row, ri) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 items-center border-b border-espresso-800/5 last:border-b-0 ${
                    ri % 2 === 1 ? 'bg-espresso-800/[0.015]' : ''
                  }`}
                >
                  <div className="px-6 py-4 text-sm text-espresso-700">{row.label}</div>
                  {row.values.map((v, i) => (
                    <div
                      key={i}
                      className={`px-6 py-4 ${
                        cateringPackages[i].id === 'bottega'
                          ? 'bg-espresso-800/[0.03]'
                          : ''
                      }`}
                    >
                      <Cell v={v} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- EVENT TYPES --------------------------- */

function EventTypes() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>What we cater</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight tracking-tight text-espresso-800">
                Eight formats we
                <br />
                <span className="font-display-italic text-tomato-600">know cold.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[40ch] text-espresso-500 leading-relaxed">
                Something else? Shabbat, Diwali, corporate board retreat — we've cooked it.
                Ask.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {eventTypes.map((e, i) => (
                <Reveal key={e} delay={i * 40}>
                  <li className="group flex items-center justify-between border-b border-espresso-800/10 py-5">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-espresso-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-xl md:text-2xl tracking-tight text-espresso-800">
                        {e}
                      </span>
                    </span>
                    <ArrowUpRight
                      weight="regular"
                      className="h-4 w-4 opacity-0 -translate-x-2 text-espresso-500 transition-all duration-500 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GUARANTEES BAR --------------------------- */

function GuaranteesBar() {
  return (
    <section className="bg-espresso-900 py-20 md:py-24 text-ivory-100">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <Eyebrow tone="onDark">What's non-negotiable</Eyebrow>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          {cateringGuarantees.map((g, i) => (
            <Reveal key={g.label} delay={i * 80}>
              <div className="border-t border-ivory-100/15 pt-5">
                <div className="font-mono text-xs text-tomato-400">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tight">
                  {g.label}
                </h3>
                <p className="mt-3 text-sm text-ivory-100/60 leading-relaxed">
                  {g.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */

function FAQ() {
  const faqs = [
    {
      q: 'How far do you deliver?',
      a: 'Rockland, Bergen, Westchester, Manhattan, and Orange Counties. For weddings and full-service events, we travel further — ask.',
    },
    {
      q: 'Do you handle dietary restrictions?',
      a: 'Yes, and sincerely. Celiac is prepared in its own pan on its own day. We handle kosher-style, vegetarian, vegan, and common allergens. Tell us on the quote form and we will build around it.',
    },
    {
      q: 'Can you accommodate last-minute events?',
      a: 'Our Famiglia package needs 48 hours. Smaller office orders from the deli case can be same-day if placed before 10 AM. Call catering directly for emergencies.',
    },
    {
      q: 'Do you provide rentals — tables, chairs, linen?',
      a: 'We coordinate rentals through our preferred vendors and add them to your one-page quote. We do not mark them up.',
    },
    {
      q: 'What\'s included in the staffing?',
      a: 'Bottega and Nozze tiers include service staff, a captain, and on-site kitchen support. Setup time is typically two hours; breakdown is one. Hours beyond the contracted window are billed at cost — never marked up.',
    },
    {
      q: 'Do you offer tastings?',
      a: 'Yes, for full-service events (Nozze tier) or any order over $3,000. Tastings are held in-store by appointment, usually Tuesdays or Wednesdays.',
    },
    {
      q: 'What\'s the deposit policy?',
      a: '25% to lock the date, balance due 48 hours before service. We accept cards, ACH, and checks. Full refunds for cancellations with 14+ days notice.',
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1100px)] px-4">
        <Reveal>
          <Divider label="Frequently asked" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight text-espresso-800">
                Answers, <span className="font-display-italic text-tomato-600">quickly.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-[40ch] text-espresso-500 leading-relaxed">
                If yours isn't here, call catering at{' '}
                <a
                  href={`tel:${site.phone.catering.replace(/\D/g, '')}`}
                  className="font-mono text-espresso-800 underline decoration-tomato-500 decoration-1 underline-offset-[3px]"
                >
                  {site.phone.catering}
                </a>{' '}
                — we answer between 9 and 6.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-espresso-800/10">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-espresso-900"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-espresso-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-xl md:text-2xl tracking-tight text-espresso-800">
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-espresso-800/5 text-espresso-700 transition-transform duration-500 ease-out-expo ${
                        open === i ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <Plus weight="regular" className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-10 pr-10 text-espresso-500 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- QUOTE CTA --------------------------- */

function QuoteCTA() {
  return (
    <section className="pb-28 pt-4 md:pb-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-tomato-600 p-1.5 ring-1 ring-inset ring-white/10">
            <div className="relative rounded-[calc(2.5rem-0.375rem)] bg-tomato-600 p-10 md:p-16 lg:p-20">
              <div aria-hidden="true" className="absolute -right-10 -top-16 h-64 w-64 rounded-full bg-tomato-400/40 blur-3xl" />
              <div className="relative grid grid-cols-1 items-end gap-10 md:grid-cols-12">
                <div className="md:col-span-8">
                  <Eyebrow tone="onDark">Ready when you are</Eyebrow>
                  <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter text-ivory-100">
                    Let's make a menu,
                    <br />
                    <span className="font-display-italic">by Friday.</span>
                  </h2>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
                  <CTA as={Link} to="/contact" variant="cream" size="lg">
                    Request a quote
                  </CTA>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
