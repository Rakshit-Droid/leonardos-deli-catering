import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Clock, Phone, Envelope, Heart } from '@phosphor-icons/react';

import CTA from '../components/CTA.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import Divider from '../components/Divider.jsx';
import Marquee from '../components/Marquee.jsx';
import { site } from '../data/site.js';
import { photos } from '../data/images.js';

export default function About() {
  return (
    <>
      <AboutHero />
      <OpeningStatement />
      <ThreeGenerations />
      <ValuesMarquee />
      <HouseRules />
      <SourcingMap />
      <TeamStrip />
      <VisitCard />
    </>
  );
}

/* --------------------------- HERO --------------------------- */

function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow tone="olive">About Leonardo's</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 font-display font-light tracking-[-0.03em] leading-[0.9] text-espresso-800 text-[clamp(3rem,9vw,9rem)]">
                Not fast.
                <br />
                <span className="font-display-italic text-tomato-600">Just right.</span>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={160} className="md:col-span-5">
            <p className="text-[19px] text-espresso-600 leading-relaxed md:text-[21px] md:pl-4">
              We opened in {site.since} with a meat slicer, a used espresso machine,
              and a rental agreement on {site.address.line1}. We still have the
              slicer. The espresso machine is new.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- OPENING STATEMENT --------------------------- */

function OpeningStatement() {
  return (
    <section className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1080px)] px-4">
        <Reveal>
          <blockquote className="font-display-italic text-espresso-800 text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] tracking-[-0.01em]">
            "We don't make anything we wouldn't feed our own
            mother. Our own mother is still in the kitchen most
            Saturdays, so — yes, she checks."
          </blockquote>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-espresso-800/30" />
            <div>
              <div className="font-display text-lg text-espresso-800">Matteo Leonardo</div>
              <div className="text-xs text-espresso-500">Second-generation owner, Head of Kitchen</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- THREE GENERATIONS --------------------------- */

function ThreeGenerations() {
  const generations = [
    {
      years: '1924 — 1968',
      name: 'Giuseppe Leonardo',
      role: 'Founder, First Slicer',
      body: 'Giuseppe bought a 14-foot storefront and a Berkel slicer. First day\'s sales: eight prosciutto sandwiches, four Cokes, and a pound of provolone. His rule: never sell anything you haven\'t tasted that morning. Still law.',
      image: 'https://picsum.photos/seed/leo-gen1-portrait-warm/900/1100',
    },
    {
      years: '1968 — 2001',
      name: 'Matteo Leonardo',
      role: 'Second Generation, Head of Kitchen',
      body: 'Matteo trained under his father, then in Parma and Napoli. Came home and added the hot line, the catering trucks, the wedding book. Added espresso. Did not add a freezer.',
      image: 'https://picsum.photos/seed/leo-gen2-kitchen-matteo/900/1100',
    },
    {
      years: '2001 — now',
      name: 'Lucia Leonardo',
      role: 'Third Generation, Catering Director',
      body: 'Lucia runs catering — 1,200+ events and counting. Built the online ordering, the partnerships, the out-of-town delivery. Still pulls mozzarella on Saturdays. Still argues with her father about the gravy.',
      image: 'https://picsum.photos/seed/leo-gen3-lucia-catering/900/1100',
    },
  ];

  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <Eyebrow>Three generations</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-[22ch] font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-espresso-800">
            One family,
            <br />
            <span className="font-display-italic text-olive-700">one counter,</span>
            <br />
            <span className="font-display-italic text-espresso-600">three pairs of hands.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          {generations.map((g, i) => (
            <Reveal
              key={g.name}
              delay={i * 120}
              className={`md:col-span-4 ${
                i === 1 ? 'md:translate-y-12' : i === 2 ? 'md:translate-y-6' : ''
              }`}
            >
              <article>
                <div className="relative overflow-hidden rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                    <img
                      src={g.image}
                      alt={g.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover grayscale-[25%]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso-900/70 to-transparent p-6">
                      <div className="eyebrow text-ivory-100/70">{g.years}</div>
                      <div className="mt-1 font-display text-2xl leading-tight tracking-tight text-ivory-100">
                        {g.name}
                      </div>
                      <div className="mt-1 font-mono text-xs text-ivory-100/70">{g.role}</div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-espresso-600 leading-relaxed">{g.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- VALUES MARQUEE --------------------------- */

function ValuesMarquee() {
  return (
    <section className="border-y border-espresso-800/10 bg-ivory-50 py-6">
      <Marquee className="font-display text-4xl md:text-6xl leading-none text-espresso-800">
        {[
          'Imports, traced',
          'Bread, daily',
          'Mozzarella, pulled',
          'Gravy, slow',
          'Espresso, short',
          'Cannoli, to order',
          'No freezer',
          'No shortcuts',
        ].map((phrase, i) => (
          <span key={i} className="inline-flex items-center whitespace-nowrap">
            <span className="font-display-italic">{phrase}</span>
            <span aria-hidden="true" className="px-8 text-tomato-500">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* --------------------------- HOUSE RULES --------------------------- */

function HouseRules() {
  const rules = [
    {
      n: '01',
      title: 'Taste it before you sell it',
      body: 'Every opened wheel, every new oil, every delivery. Giuseppe\'s rule, still enforced.',
    },
    {
      n: '02',
      title: 'Nothing frozen. Nothing re-warmed',
      body: 'If it\'s not fresh, it goes out the back door. Staff eats well.',
    },
    {
      n: '03',
      title: 'The family that runs it, runs it',
      body: 'One of us is on the floor every open hour. No absentee owners, no contract managers.',
    },
    {
      n: '04',
      title: 'Cappuccino cutoff is 11:00 AM',
      body: 'After that, you get a macchiato. We\'re not sorry. (We\'re a little sorry.)',
    },
    {
      n: '05',
      title: 'Your event, not our reputation',
      body: 'We don\'t push our "signature dishes" on your wedding. We cook what your grandmother made.',
    },
    {
      n: '06',
      title: 'If we overcharge, we fix it',
      body: 'Quote prices lock. If our costs drop, yours drop. If ours rise, yours hold.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow tone="tomato">House rules</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] tracking-tight text-espresso-800">
                Six things we
                <br />
                <span className="font-display-italic text-tomato-600">never</span>
                <br />
                skip.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul>
              {rules.map((r, i) => (
                <Reveal key={r.n} delay={i * 50}>
                  <li className="grid grid-cols-12 gap-4 border-b border-espresso-800/10 py-8 last:border-b-0">
                    <div className="col-span-2 md:col-span-1 font-mono text-xs text-espresso-400 pt-1">
                      {r.n}
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight text-espresso-800">
                        {r.title}
                      </h3>
                      <p className="mt-3 max-w-[60ch] text-espresso-500 leading-relaxed">
                        {r.body}
                      </p>
                    </div>
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

/* --------------------------- SOURCING MAP --------------------------- */

function SourcingMap() {
  const sources = [
    { region: 'Parma, Emilia-Romagna', product: 'Prosciutto di Parma · 24-month', supplier: 'Rossi Family, Fontanellato' },
    { region: 'Napoli, Campania', product: 'Gustarosso San Marzano DOP tomatoes', supplier: 'Cooperativa Dani Coda' },
    { region: 'Modena, Emilia-Romagna', product: 'Aceto Balsamico Tradizionale · 12-year', supplier: 'Acetaia Malpighi' },
    { region: 'Bronte, Sicilia', product: 'Pistachios for mortadella & pastry', supplier: 'Azienda Fastuca' },
    { region: 'Carmignano, Toscana', product: 'Extra virgin olive oil · first press', supplier: 'Tenuta Capezzana' },
    { region: 'Puglia, Altamura', product: 'Burrata · flown Tuesdays & Fridays', supplier: 'Caseificio Artigiana' },
    { region: 'Hudson Valley, NY', product: 'Dairy, eggs, fresh vegetables', supplier: 'Clover Valley Co-op' },
    { region: 'Trieste, Italy', product: 'Espresso & coffee beans', supplier: 'Illy Direct Trade' },
  ];

  return (
    <section className="bg-espresso-900 py-24 md:py-32 text-ivory-100">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="onDark">Where it comes from</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
                We buy from
                <br />
                <span className="font-display-italic text-tomato-400">named</span>
                <br />
                families.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[44ch] text-ivory-100/70 leading-relaxed">
                Not from a catalog. Not from a broker who will be gone next quarter.
                If an import changes, we tell you on the menu.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-ivory-100/10">
              {sources.map((s, i) => (
                <Reveal key={s.region} delay={i * 40}>
                  <li className="grid grid-cols-12 gap-4 py-5">
                    <div className="col-span-12 md:col-span-4">
                      <div className="flex items-center gap-2 eyebrow text-ivory-100/50">
                        <MapPin weight="regular" className="h-3 w-3 text-tomato-400" />
                        {s.region}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                      <div className="font-display text-lg text-ivory-100 tracking-tight">
                        {s.product}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                      <div className="font-mono text-xs text-ivory-100/60">
                        {s.supplier}
                      </div>
                    </div>
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

/* --------------------------- TEAM STRIP --------------------------- */

function TeamStrip() {
  const team = [
    { name: 'Matteo Leonardo', role: 'Head of Kitchen', seed: 'leo-team-matteo' },
    { name: 'Lucia Leonardo', role: 'Catering Director', seed: 'leo-team-lucia' },
    { name: 'Dario Passerini', role: 'Pasta & Breads', seed: 'leo-team-dario' },
    { name: 'Noor Belkacem', role: 'Pastry Chef', seed: 'leo-team-noor' },
    { name: 'Hendrik Vogel', role: 'Service Captain', seed: 'leo-team-hendrik' },
    { name: 'Rosa Giordano', role: 'Counter & Coffee', seed: 'leo-team-rosa' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>The team</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight text-espresso-800">
                Behind the counter.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[36ch] text-espresso-500 leading-relaxed">
              {team.length} people run the deli, the kitchen, and the catering trucks.
              All of them answer the phone.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="group">
                <div className="relative overflow-hidden rounded-2xl bg-espresso-800/5 ring-1 ring-inset ring-espresso-800/10">
                  <div className="aspect-[3/4]">
                    <img
                      src={`https://picsum.photos/seed/${t.seed}/700/900`}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[25%] transition-all duration-[1200ms] ease-out-expo group-hover:grayscale-0 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
                <figcaption className="mt-4">
                  <div className="font-display text-lg leading-tight text-espresso-800">{t.name}</div>
                  <div className="mt-0.5 font-mono text-[11px] text-espresso-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- VISIT CARD --------------------------- */

function VisitCard() {
  return (
    <section className="pb-28 pt-4 md:pb-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10 md:grid-cols-12">
            <div className="relative md:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2.5rem-0.375rem)] md:aspect-auto md:h-full md:rounded-[calc(2.5rem-0.375rem)]">
                <img
                  src={photos.storefront}
                  alt="Leonardo's Italian Deli on N. Main Street, New City"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/20 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-between bg-ivory-100 p-10 shadow-inset md:col-span-6 md:p-14">
              <div>
                <Eyebrow>Come in</Eyebrow>
                <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tighter text-espresso-800">
                  Stop by.
                  <br />
                  <span className="font-display-italic text-tomato-600">Say hi.</span>
                </h2>
                <ul className="mt-10 space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-tomato-600" weight="regular" />
                    <div className="text-sm text-espresso-700">
                      {site.address.line1}<br />
                      {site.address.line2}
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="mt-1 h-4 w-4 shrink-0 text-tomato-600" weight="regular" />
                    <div className="text-sm text-espresso-700">
                      {site.hours.map((h) => (
                        <div key={h.day}>
                          <span className="text-espresso-500">{h.day} · </span>
                          <span className="font-mono">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="h-4 w-4 shrink-0 text-tomato-600" weight="regular" />
                    <a href={`tel:${site.phone.deli.replace(/\D/g, '')}`} className="font-mono text-sm text-espresso-700 hover:text-espresso-900">
                      {site.phone.deli}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Envelope className="h-4 w-4 shrink-0 text-tomato-600" weight="regular" />
                    <a href={`mailto:${site.email}`} className="font-mono text-sm text-espresso-700 hover:text-espresso-900">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA
                  as="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${site.address.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  variant="solid"
                  size="md"
                >
                  Get directions
                </CTA>
                <CTA as={Link} to="/contact" variant="ghost" size="md" icon={Heart}>
                  Reach out
                </CTA>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
