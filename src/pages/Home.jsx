import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarBlank,
  ForkKnife,
  Phone,
  ShoppingBag,
  Storefront,
  Quotes,
  InstagramLogo,
  Star,
} from '@phosphor-icons/react';

import CTA from '../components/CTA.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import Divider from '../components/Divider.jsx';

import { site } from '../data/site.js';
import { cateringPackages, cateringGuarantees } from '../data/packages.js';
import { testimonials } from '../data/testimonials.js';
import { instagramTiles, galleryItems } from '../data/gallery.js';
import { photos } from '../data/images.js';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBelt />
      <StorySplit />
      <SignatureGrid />
      <CateringPreview />
      <Guarantees />
      <TestimonialsRail />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}

/* --------------------------- HERO: Asymmetric Editorial --------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100dvh]">
        <div className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-tomato-600/10 blur-[140px]" />
        <div className="absolute -left-40 top-1/3 h-[380px] w-[380px] rounded-full bg-olive-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-[min(94vw,1280px)] grid-cols-1 items-end gap-14 px-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>Est. {site.since} · New City, NY</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-display font-light tracking-[-0.03em] leading-[0.9] text-espresso-800 text-[clamp(3rem,9vw,8.5rem)]">
              The table,{' '}
              <span className="font-display-italic text-tomato-600">set.</span>
              <br />
              The gravy,{' '}
              <span className="font-display-italic text-espresso-600">on.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 max-w-[48ch] text-[17px] leading-relaxed text-espresso-600 md:text-[19px]">
              Leonardo's is a family-run Italian deli &amp; catering house in Rockland County,
              serving imported cheeses, cured meats, sandwiches, and full-service events
              since {site.since}. If your event has a table, we set it.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CTA as={Link} to="/catering" variant="tomato" size="lg">
                Plan your event
              </CTA>
              <CTA as={Link} to="/menu" variant="ghost" size="lg" icon={ForkKnife}>
                See the menu
              </CTA>
              <a
                href={`tel:${site.phone.deli.replace(/\D/g, '')}`}
                className="group ml-2 inline-flex items-center gap-2 text-[14px] font-medium text-espresso-700 transition-colors hover:text-espresso-900"
              >
                <Phone className="h-4 w-4" weight="regular" />
                <span className="font-mono">{site.phone.deli}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360} className="md:col-span-5">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] shadow-card">
                <img
                  src={photos.antipastoHeroLg}
                  alt="An antipasto spread on the counter at Leonardo's Italian Deli"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso-900/60 to-transparent p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="text-ivory-100">
                      <div className="eyebrow text-ivory-100/70">Table One</div>
                      <div className="mt-1 font-display text-xl leading-tight">
                        Antipasto, dressed at the counter
                      </div>
                    </div>
                    <Link
                      to="/gallery"
                      className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-100 text-espresso-800 ring-1 ring-inset ring-espresso-800/10 transition-all duration-500 ease-out-expo hover:bg-tomato-600 hover:text-ivory-100"
                      aria-label="Open gallery"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-8 hidden rounded-2xl bg-ivory-100 px-5 py-4 shadow-card ring-1 ring-inset ring-espresso-800/10 md:block">
              <div className="eyebrow text-espresso-400">This Saturday</div>
              <div className="mt-1 font-display text-lg leading-tight">
                Mozzarella pull · 11a
              </div>
              <div className="mt-2 flex -space-x-2">
                {['leo-av1', 'leo-av2', 'leo-av3'].map((s) => (
                  <img
                    key={s}
                    src={`https://picsum.photos/seed/${s}/80/80`}
                    alt=""
                    className="h-7 w-7 rounded-full ring-2 ring-ivory-100 object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="absolute -right-3 -bottom-4 flex items-center gap-3 rounded-full bg-espresso-800 py-2 pl-4 pr-2 text-ivory-100 shadow-card ring-1 ring-inset ring-white/5">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-tomato-400" weight="fill" />
                ))}
              </div>
              <span className="font-mono text-[11px] text-ivory-100/80">4.9 · 847 reviews</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory-100/10">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 flex w-[min(94vw,1280px)] items-center justify-between gap-6 border-t border-espresso-800/10 px-4 pt-6 text-sm text-espresso-500 md:mt-32">
        <span className="flex items-center gap-2 eyebrow">
          <ArrowDown className="h-3.5 w-3.5" weight="regular" />
          Scroll through the kitchen
        </span>
        <span className="font-mono text-[11px] text-espresso-400">
          01 · Welcome
        </span>
      </div>
    </section>
  );
}

/* --------------------------- MARQUEE BELT --------------------------- */

function MarqueeBelt() {
  const items = [
    'Prosciutto di Parma',
    'Pulled Mozzarella',
    'Sunday Gravy',
    'Sopressata Diavolo',
    'Focaccia al Rosmarino',
    'Burrata di Puglia',
    'Sfogliatella Riccia',
    '24-Month Parmigiano',
    'Tiramisù',
    'Bronze-Die Rigatoni',
    'Aged Balsamico',
    'Espresso Doppio',
  ];

  return (
    <section aria-label="Specialties" className="relative border-y border-espresso-800/10 bg-ivory-50">
      <Marquee className="py-6 font-display text-3xl md:text-4xl text-espresso-800">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center whitespace-nowrap">
            <span className="font-display-italic">{item}</span>
            <span aria-hidden="true" className="px-10 text-tomato-500">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* --------------------------- STORY SPLIT --------------------------- */

function StorySplit() {
  return (
    <section className="mx-auto w-[min(94vw,1280px)] px-4 py-24 md:py-40">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow tone="olive">The House</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-espresso-800">
              Three generations,
              <br />
              <span className="font-display-italic text-olive-700">one counter.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160} className="md:col-span-7">
          <div className="max-w-[60ch] space-y-6 text-espresso-600 text-[17px] leading-relaxed md:pl-8">
            <p>
              Leonardo opened the doors in {site.since}, buying wheels of Parmigiano by the whole and
              slicing prosciutto thinner than anyone in the county. His son runs the kitchen now.
              His granddaughter runs the catering truck.
            </p>
            <p>
              Nothing here is optimized. The dough proves overnight. The gravy starts at 9 AM on the dot.
              The mozzarella is pulled fresh between the 10:30 AM coffee rush and the noon sandwich line.
              If you'd like some to take home, you'll need to come before 2 PM — we sell out.
            </p>
            <p className="font-display-italic text-espresso-700">
              "The shortcut is the long way round." — our dad's rule, and we still follow it.
            </p>
            <div className="flex gap-3 pt-2">
              <CTA as={Link} to="/about" variant="ghost" size="md">
                Our story
              </CTA>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {[
          { n: '38', label: 'Years on Main Street' },
          { n: '1,200+', label: 'Events catered' },
          { n: '42', label: 'Imported cheeses' },
          { n: '7:30a', label: 'Ovens on, every day' },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="border-t border-espresso-800/15 pt-6">
            <div className="font-display text-5xl md:text-6xl leading-none tracking-tight text-espresso-800">
              {s.n}
            </div>
            <div className="mt-3 text-sm text-espresso-500">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- SIGNATURE GRID (Asymmetric Bento) --------------------------- */

function SignatureGrid() {
  return (
    <section className="relative bg-ivory-50 py-24 md:py-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>The specialties</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                A few things we
                <br />
                <span className="font-display-italic text-tomato-600">insist</span> you try.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <CTA as={Link} to="/menu" variant="solid" size="md">
              Browse the full menu
            </CTA>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5 md:auto-rows-[minmax(220px,auto)]">
          <SignatureCard
            className="md:col-span-7 md:row-span-2"
            tall
            image={photos.counterSpreadLg}
            eyebrow="Panini"
            title="The Leonardo"
            detail="Prosciutto di Parma, fresh mozzarella pulled this morning, roasted peppers, arugula, 12-year balsamico."
            price="$14.25"
            to="/menu"
          />
          <SignatureCard
            className="md:col-span-5"
            image={photos.interiorCounter}
            eyebrow="The Counter"
            title="Mozzarella pulled daily"
            detail="Made between 10:30a and noon. Still warm when you buy it."
            price="$13.75 / lb"
            to="/menu"
          />
          <SignatureCard
            className="md:col-span-5"
            image={photos.dailyBoard}
            eyebrow="Dolci"
            title="Cannoli, filled to order"
            detail="Sheep-milk ricotta, candied orange, Bronte pistachio. Never pre-filled."
            price="$4.50"
            to="/menu"
          />
          <SignatureCard
            className="md:col-span-4"
            image={photos.trayCatering}
            eyebrow="Hot entrées"
            title="Sunday Gravy"
            detail="Simmered from 9 AM. Rigatoni tray serves 10."
            price="$14.75 / person"
            to="/menu"
          />
          <SignatureCard
            className="md:col-span-4"
            image={photos.storefront}
            eyebrow="Bar"
            title="Espresso, Trieste Roast"
            detail="Single-origin. Pulled short, never over 25 seconds."
            price="$3.75"
            to="/menu"
          />
          <SignatureCard
            className="md:col-span-4"
            image={photos.antipastoHero}
            eyebrow="Antipasti"
            title="Antipasto Classico"
            detail="Three meats, two cheeses, olives, artichoke, peppers. Serves 2–3."
            price="$14.50"
            to="/menu"
          />
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ image, eyebrow, title, detail, price, to, tall, className = '' }) {
  return (
    <Reveal className={`group relative overflow-hidden rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10 ${className}`}>
      <Link to={to} className="relative block h-full overflow-hidden rounded-[calc(2rem-0.375rem)]">
        <div className={`relative w-full overflow-hidden ${tall ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/75 via-espresso-900/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <div className="flex items-start justify-between">
              <span className="eyebrow rounded-full bg-ivory-100/20 px-3 py-1 text-ivory-100 ring-1 ring-inset ring-ivory-100/20 backdrop-blur-md">
                {eyebrow}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100 text-espresso-800 ring-1 ring-inset ring-espresso-800/10 transition-all duration-500 ease-out-expo group-hover:bg-tomato-600 group-hover:text-ivory-100">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="text-ivory-100">
              <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                {title}
              </h3>
              <p className="mt-2 max-w-[44ch] text-[14px] leading-relaxed text-ivory-100/80">
                {detail}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ivory-100/20 pt-4">
                <span className="font-mono text-[13px] text-ivory-100">{price}</span>
                <span className="h-1 w-1 rounded-full bg-ivory-100/30" aria-hidden="true" />
                <span className="eyebrow text-ivory-100/60">Order in-store</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* --------------------------- CATERING PREVIEW --------------------------- */

function CateringPreview() {
  return (
    <section className="relative bg-espresso-900 py-24 text-ivory-100 md:py-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="onDark">Catering</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter">
                We set the room,
                <br />
                <span className="font-display-italic text-tomato-400">stay quiet,</span>
                <br />
                and cook.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[44ch] text-[17px] text-ivory-100/70 leading-relaxed">
                Three packages — intimate to full-service. From office lunches for twelve
                to weddings for two hundred, with the same prosciutto, the same pull,
                the same mother.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA as={Link} to="/catering" variant="tomato" size="lg">
                  Browse packages
                </CTA>
                <CTA
                  as={Link}
                  to="/contact"
                  variant="cream"
                  size="lg"
                  icon={CalendarBlank}
                >
                  Request a quote
                </CTA>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={200}>
              <div className="space-y-4">
                {cateringPackages.map((pkg, i) => (
                  <Link
                    key={pkg.id}
                    to="/catering"
                    className="group relative flex items-center justify-between gap-6 rounded-[2rem] bg-ivory-100/5 p-1.5 ring-1 ring-inset ring-ivory-100/10 transition-all duration-500 ease-out-expo hover:bg-ivory-100/10"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="flex flex-1 items-center gap-5 rounded-[calc(2rem-0.375rem)] bg-espresso-900/40 p-6 md:p-8">
                      <div className="font-mono text-xs text-ivory-100/40">0{i + 1}</div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                            {pkg.name}
                          </h3>
                          <span className="eyebrow text-ivory-100/50">{pkg.tier}</span>
                        </div>
                        <p className="mt-2 max-w-[52ch] text-sm text-ivory-100/60 leading-relaxed">
                          {pkg.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
                          <span className="font-mono text-ivory-100/80">
                            ${pkg.pricePerGuest} / guest
                          </span>
                          <span className="flex items-center gap-2 text-ivory-100/60">
                            <span className="h-1 w-1 rounded-full bg-ivory-100/30" />
                            {pkg.minGuests}–{pkg.maxGuests} guests
                          </span>
                          <span className="flex items-center gap-2 text-ivory-100/60">
                            <span className="h-1 w-1 rounded-full bg-ivory-100/30" />
                            {pkg.leadTime} notice
                          </span>
                        </div>
                      </div>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 ring-1 ring-inset ring-ivory-100/10 transition-all duration-500 ease-out-expo group-hover:bg-tomato-500 group-hover:text-ivory-100">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GUARANTEES --------------------------- */

function Guarantees() {
  return (
    <section className="mx-auto w-[min(94vw,1280px)] px-4 py-24 md:py-40">
      <Reveal>
        <Divider label="What you can count on" align="center" />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
        {cateringGuarantees.map((g, i) => (
          <Reveal key={g.label} delay={i * 80}>
            <div className="group">
              <div className="font-mono text-xs text-tomato-600">0{i + 1}</div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-espresso-800">
                {g.label}
              </h3>
              <p className="mt-4 max-w-[52ch] text-espresso-500 leading-relaxed">
                {g.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS RAIL --------------------------- */

function TestimonialsRail() {
  return (
    <section className="relative overflow-hidden bg-ivory-50 py-24 md:py-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow tone="olive">Word of mouth</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-espresso-800">
                Heard across
                <br />
                <span className="font-display-italic text-olive-700">the valley.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="font-mono text-xs text-espresso-400">
              {testimonials.length.toString().padStart(2, '0')} of many
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={200}>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:mt-20 md:gap-8 md:px-[max(1rem,calc((100vw-1280px)/2+1rem))]">
          {testimonials.map((t, i) => (
            <article
              key={t.author}
              className="relative flex w-[85vw] shrink-0 snap-start flex-col justify-between rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10 md:w-[560px]"
            >
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-ivory-100 p-8 shadow-inset md:p-10">
                <Quotes weight="fill" className="h-10 w-10 text-tomato-500" />
                <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-[1.2] tracking-tight text-espresso-800">
                  "{t.quote}"
                </blockquote>
                <div className="mt-10 flex items-center justify-between gap-4 border-t border-espresso-800/10 pt-6">
                  <div>
                    <div className="font-display text-lg text-espresso-800">{t.author}</div>
                    <div className="mt-0.5 text-xs text-espresso-500">{t.role}</div>
                  </div>
                  <span className="eyebrow text-espresso-400">0{i + 1}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------- INSTAGRAM FEED --------------------------- */

function InstagramFeed() {
  return (
    <section className="mx-auto w-[min(94vw,1280px)] px-4 py-24 md:py-40">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Reveal>
            <Eyebrow tone="tomato">{site.social.instagramHandle}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              From the <span className="font-display-italic text-tomato-600">feed.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <CTA
            as="a"
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            variant="solid"
            size="md"
            icon={InstagramLogo}
          >
            Follow on Instagram
          </CTA>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {instagramTiles.map((tile, i) => (
          <Reveal key={tile.id} delay={i * 40}>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl bg-espresso-800/5 ring-1 ring-inset ring-espresso-800/10"
            >
              <img
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-espresso-900/0 transition-colors duration-500 ease-out-expo group-hover:bg-espresso-900/40">
                <InstagramLogo
                  weight="regular"
                  className="h-6 w-6 scale-75 text-ivory-100 opacity-0 transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- FINAL CTA --------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden pb-28 pt-12 md:pb-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-espresso-800 p-1.5 ring-1 ring-inset ring-white/5">
          <div className="relative overflow-hidden rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-700 p-10 md:p-16 lg:p-20">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-tomato-500/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-olive-500/15 blur-3xl" />

            <div className="relative grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-8">
                <Reveal>
                  <Eyebrow tone="onDark">Get started</Eyebrow>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter text-ivory-100">
                    Three ways to
                    <br />
                    <span className="font-display-italic text-tomato-400">eat with us.</span>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={160} className="md:col-span-4">
                <p className="max-w-[42ch] text-ivory-100/70 leading-relaxed">
                  Walk into the deli, order online from the kitchen, or let us build
                  an event for you. Whichever — we're ready.
                </p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="relative mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <FinalCTACard
                  icon={Storefront}
                  eyebrow="Walk in"
                  title="Visit the deli"
                  body={`${site.address.line1}, ${site.address.line2.split(',')[0]}`}
                  hrefLabel="Get directions"
                  href={`https://www.google.com/maps/search/?api=1&query=${site.address.mapQuery}`}
                  external
                />
                <FinalCTACard
                  icon={ShoppingBag}
                  eyebrow="Order online"
                  title="Direct from the kitchen"
                  body="Pickup & delivery via Bento, Grubhub, UberEats, DoorDash."
                  hrefLabel="Order now"
                  href={site.ordering.direct}
                  external
                />
                <FinalCTACard
                  icon={CalendarBlank}
                  eyebrow="Catering"
                  title="Plan an event"
                  body="Quotes returned within one business day. Usually same-day."
                  hrefLabel="Request a quote"
                  href="/contact"
                  highlight
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTACard({ icon: Icon, eyebrow, title, body, href, hrefLabel, external, highlight }) {
  const Component = external ? 'a' : Link;
  const linkProps = external
    ? { href, target: '_blank', rel: 'noreferrer' }
    : { to: href };

  return (
    <Component
      {...linkProps}
      className={`group relative flex h-full flex-col justify-between rounded-3xl p-7 ring-1 ring-inset transition-all duration-500 ease-out-expo active:scale-[0.99] ${
        highlight
          ? 'bg-tomato-600 ring-white/10 hover:bg-tomato-500'
          : 'bg-ivory-100/5 ring-ivory-100/10 hover:bg-ivory-100/10'
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ${
            highlight
              ? 'bg-ivory-100/15 text-ivory-100 ring-white/10'
              : 'bg-ivory-100/10 text-ivory-100 ring-ivory-100/10'
          }`}
        >
          <Icon className="h-5 w-5" weight="regular" />
        </span>
        <span className={`eyebrow ${highlight ? 'text-ivory-100/70' : 'text-ivory-100/50'}`}>
          {eyebrow}
        </span>
      </div>
      <div className="mt-12">
        <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight text-ivory-100">
          {title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed ${highlight ? 'text-ivory-100/80' : 'text-ivory-100/60'}`}>
          {body}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-ivory-100">
          <span className="font-medium">{hrefLabel}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Component>
  );
}
