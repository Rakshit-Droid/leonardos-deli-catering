import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Envelope,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  Warning,
  InstagramLogo,
  FacebookLogo,
  CaretDown,
} from '@phosphor-icons/react';

import CTA from '../components/CTA.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import { site } from '../data/site.js';
import { eventTypes } from '../data/packages.js';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <QuoteFormSection />
      <DirectChannels />
      <MapPanel />
    </>
  );
}

/* --------------------------- HERO --------------------------- */

function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow tone="tomato">Get in touch</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-light tracking-[-0.03em] leading-[0.9] text-espresso-800 text-[clamp(3rem,9vw,8rem)]">
                Tell us about
                <br />
                <span className="font-display-italic text-tomato-600">the day.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[54ch] text-espresso-600 text-[18px] leading-relaxed">
                Quotes returned within one business day — usually same-day before 4 PM.
                For urgent dates, call catering directly.
              </p>
            </Reveal>
          </div>
          <Reveal delay={240} className="md:col-span-4">
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${site.phone.catering.replace(/\D/g, '')}`}
                className="group flex items-center justify-between rounded-full bg-espresso-800 py-3 pl-5 pr-2 text-ivory-100 ring-1 ring-inset ring-white/5 transition-all duration-500 ease-out-expo hover:bg-espresso-900"
              >
                <span className="flex items-center gap-3">
                  <Phone weight="regular" className="h-4 w-4" />
                  <span className="font-mono text-sm">{site.phone.catering}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory-100/10 transition-all duration-500 ease-out-expo group-hover:bg-tomato-500">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href={`mailto:${site.email}?subject=Catering%20inquiry`}
                className="group flex items-center justify-between rounded-full bg-ivory-100 py-3 pl-5 pr-2 text-espresso-800 ring-1 ring-inset ring-espresso-800/10 transition-all duration-500 ease-out-expo hover:bg-ivory-50"
              >
                <span className="flex items-center gap-3">
                  <Envelope weight="regular" className="h-4 w-4" />
                  <span className="font-mono text-sm">{site.email}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-800/5 transition-all duration-500 ease-out-expo group-hover:bg-espresso-800 group-hover:text-ivory-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- QUOTE FORM --------------------------- */

function QuoteFormSection() {
  const [state, setState] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: eventTypes[0],
    guestCount: '',
    eventDate: '',
    venue: '',
    dietary: '',
    notes: '',
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'We\'d love to know who we\'re cooking for.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'A real email, please.';
    if (form.phone && form.phone.replace(/\D/g, '').length < 7) next.phone = 'Double-check the number?';
    if (!form.guestCount || Number(form.guestCount) < 1) next.guestCount = 'How many guests, roughly?';
    if (!form.eventDate) next.eventDate = 'Give us a date, even tentative.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setState('submitting');

    try {
      await new Promise((r) => setTimeout(r, 1200));
      setState('success');
    } catch {
      setState('error');
    }
  }

  return (
    <section className="relative bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Quote request</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight text-espresso-800">
                A few quick
                <br />
                <span className="font-display-italic text-olive-700">questions.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[42ch] text-espresso-500 leading-relaxed">
                Four fields are required. The rest help us price accurately.
                You'll hear from a human — not a form bot.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 space-y-5 border-t border-espresso-800/15 pt-8">
                <div>
                  <div className="eyebrow text-espresso-400">What happens next</div>
                  <ol className="mt-3 space-y-3 text-[14px] text-espresso-600">
                    <li className="flex gap-3">
                      <span className="font-mono text-xs text-tomato-600">01</span>
                      <span>Lucia or Matteo reads your note personally.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-xs text-tomato-600">02</span>
                      <span>You get a reply within one business day.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-xs text-tomato-600">03</span>
                      <span>We send a one-page quote — tax, service, everything.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-xs text-tomato-600">04</span>
                      <span>If you'd like a tasting, we'll book it.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-7">
            <div className="rounded-[2rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ivory-100 p-6 shadow-inset md:p-10">
                <AnimatePresence mode="wait">
                  {state === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-start py-8"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-600/15 text-olive-700">
                        <CheckCircle weight="regular" className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] tracking-tight text-espresso-800">
                        Thank you, {form.name.split(' ')[0] || 'friend'}.
                      </h3>
                      <p className="mt-5 max-w-[48ch] text-espresso-500 leading-relaxed">
                        Your note is on Lucia's desk. She'll reply personally within
                        one business day — most often same-day. If your event is
                        sooner than 48 hours, please call {site.phone.catering}.
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <CTA
                          as="button"
                          onClick={() => {
                            setState('idle');
                            setForm({
                              name: '',
                              email: '',
                              phone: '',
                              eventType: eventTypes[0],
                              guestCount: '',
                              eventDate: '',
                              venue: '',
                              dietary: '',
                              notes: '',
                            });
                            setErrors({});
                          }}
                          variant="ghost"
                          size="md"
                          magnetic={false}
                        >
                          Submit another
                        </CTA>
                        <CTA
                          as="a"
                          href={site.social.instagram}
                          target="_blank"
                          rel="noreferrer"
                          variant="solid"
                          size="md"
                          icon={InstagramLogo}
                          magnetic={false}
                        >
                          Follow us meanwhile
                        </CTA>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="grid grid-cols-1 gap-5 md:grid-cols-2"
                    >
                      <Field label="Your name" error={errors.name} required className="md:col-span-2">
                        <input
                          type="text"
                          value={form.name}
                          onChange={update('name')}
                          autoComplete="name"
                          placeholder="Iris Halvorsen-Conte"
                          className={inputClass(errors.name)}
                        />
                      </Field>

                      <Field label="Email" error={errors.email} required>
                        <input
                          type="email"
                          value={form.email}
                          onChange={update('email')}
                          autoComplete="email"
                          placeholder="iris@studio.co"
                          className={inputClass(errors.email)}
                        />
                      </Field>

                      <Field label="Phone" error={errors.phone} hint="Optional — for faster follow-up">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          autoComplete="tel"
                          placeholder="+1 845 555 0142"
                          className={inputClass(errors.phone)}
                        />
                      </Field>

                      <Field label="Event type" className="md:col-span-2">
                        <div className="relative">
                          <select
                            value={form.eventType}
                            onChange={update('eventType')}
                            className={`${inputClass(false)} appearance-none pr-10`}
                          >
                            {eventTypes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          <CaretDown
                            weight="regular"
                            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso-400"
                          />
                        </div>
                      </Field>

                      <Field label="Guest count" error={errors.guestCount} required>
                        <input
                          type="number"
                          min="1"
                          value={form.guestCount}
                          onChange={update('guestCount')}
                          placeholder="48"
                          className={inputClass(errors.guestCount)}
                        />
                      </Field>

                      <Field label="Event date" error={errors.eventDate} required>
                        <input
                          type="date"
                          value={form.eventDate}
                          onChange={update('eventDate')}
                          className={inputClass(errors.eventDate)}
                        />
                      </Field>

                      <Field label="Venue or location" className="md:col-span-2">
                        <input
                          type="text"
                          value={form.venue}
                          onChange={update('venue')}
                          placeholder="Hudson Loft, Pearl River, NY"
                          className={inputClass(false)}
                        />
                      </Field>

                      <Field label="Dietary notes" className="md:col-span-2" hint="Celiac, vegan, allergies, preferences — tell us freely">
                        <input
                          type="text"
                          value={form.dietary}
                          onChange={update('dietary')}
                          placeholder="Two guests celiac, one vegan, no shellfish at the kids' table"
                          className={inputClass(false)}
                        />
                      </Field>

                      <Field label="Anything else" className="md:col-span-2" hint="Tone, timing, dishes you've loved elsewhere — any context welcome">
                        <textarea
                          rows={4}
                          value={form.notes}
                          onChange={update('notes')}
                          placeholder="This is a surprise for my dad's 70th. He's from Avellino. Make it feel like Sunday."
                          className={`${inputClass(false)} resize-none`}
                        />
                      </Field>

                      {state === 'error' && (
                        <div className="md:col-span-2 flex items-start gap-3 rounded-2xl bg-tomato-600/10 p-4 ring-1 ring-inset ring-tomato-600/20">
                          <Warning weight="regular" className="mt-0.5 h-5 w-5 shrink-0 text-tomato-600" />
                          <div className="text-sm text-tomato-600">
                            Something went wrong on our end. Try again, or call{' '}
                            <a href={`tel:${site.phone.catering.replace(/\D/g, '')}`} className="font-mono underline underline-offset-2">
                              {site.phone.catering}
                            </a>.
                          </div>
                        </div>
                      )}

                      <div className="md:col-span-2 mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-espresso-800/10 pt-6">
                        <span className="eyebrow text-espresso-400">
                          Response within 1 business day
                        </span>
                        <CTA
                          as="button"
                          type="submit"
                          variant="tomato"
                          size="lg"
                          magnetic={false}
                          disabled={state === 'submitting'}
                        >
                          {state === 'submitting' ? 'Sending…' : 'Send quote request'}
                        </CTA>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError) {
  return `w-full rounded-2xl bg-espresso-800/[0.04] px-4 py-3.5 text-[15px] text-espresso-800 placeholder:text-espresso-400 ring-1 ring-inset transition-all duration-500 ease-out-expo focus:outline-none focus:bg-ivory-50 ${
    hasError
      ? 'ring-tomato-600/40 focus:ring-tomato-600/60'
      : 'ring-espresso-800/10 focus:ring-espresso-800/30'
  }`;
}

function Field({ label, hint, error, required, className = '', children }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-[13px] font-medium text-espresso-700">
          {label}
          {required && <span className="ml-1 text-tomato-600">*</span>}
        </span>
        {hint && !error && (
          <span className="text-[11px] text-espresso-400">{hint}</span>
        )}
      </span>
      {children}
      {error && (
        <span className="flex items-center gap-1.5 text-[12px] text-tomato-600">
          <Warning weight="regular" className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}

/* --------------------------- DIRECT CHANNELS --------------------------- */

function DirectChannels() {
  const channels = [
    {
      icon: Phone,
      eyebrow: 'Call the deli',
      title: site.phone.deli,
      sub: 'Orders, questions, daily specials.',
      href: `tel:${site.phone.deli.replace(/\D/g, '')}`,
    },
    {
      icon: Phone,
      eyebrow: 'Call catering',
      title: site.phone.catering,
      sub: 'Event quotes, tastings, deliveries.',
      href: `tel:${site.phone.catering.replace(/\D/g, '')}`,
      highlight: true,
    },
    {
      icon: Envelope,
      eyebrow: 'Email',
      title: site.email,
      sub: 'Written inquiries, media, vendors.',
      href: `mailto:${site.email}`,
    },
    {
      icon: InstagramLogo,
      eyebrow: 'Instagram',
      title: site.social.instagramHandle,
      sub: 'Daily specials, Saturday pulls, behind the counter.',
      href: site.social.instagram,
      external: true,
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <Eyebrow>Direct channels</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-[18ch] font-display text-5xl md:text-6xl leading-[0.95] tracking-tight text-espresso-800">
            Or just
            <br />
            <span className="font-display-italic text-tomato-600">pick up the phone.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className={`group relative flex items-center justify-between gap-6 rounded-[1.75rem] p-7 ring-1 ring-inset transition-all duration-500 ease-out-expo active:scale-[0.99] md:p-8 ${
                  c.highlight
                    ? 'bg-tomato-600 text-ivory-100 ring-white/10 hover:bg-tomato-500'
                    : 'bg-ivory-100 text-espresso-800 ring-espresso-800/10 hover:bg-ivory-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ${
                        c.highlight
                          ? 'bg-ivory-100/15 text-ivory-100 ring-white/10'
                          : 'bg-espresso-800/5 text-espresso-700 ring-espresso-800/10'
                      }`}
                    >
                      <c.icon weight="regular" className="h-4 w-4" />
                    </span>
                    <span
                      className={`eyebrow ${
                        c.highlight ? 'text-ivory-100/70' : 'text-espresso-400'
                      }`}
                    >
                      {c.eyebrow}
                    </span>
                  </div>
                  <div className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
                    {c.title}
                  </div>
                  <div className={`mt-2 text-sm ${c.highlight ? 'text-ivory-100/80' : 'text-espresso-500'}`}>
                    {c.sub}
                  </div>
                </div>
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-out-expo ${
                    c.highlight
                      ? 'bg-ivory-100/10 text-ivory-100 group-hover:bg-ivory-100 group-hover:text-tomato-600'
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

/* --------------------------- MAP PANEL --------------------------- */

function MapPanel() {
  const mapSrc = `https://maps.google.com/maps?q=${site.address.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="pb-28 md:pb-40">
      <div className="mx-auto w-[min(94vw,1280px)] px-4">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-espresso-800/5 p-1.5 ring-1 ring-inset ring-espresso-800/10 md:grid-cols-12">
            <div className="bg-espresso-800 text-ivory-100 p-10 md:col-span-5 md:p-14">
              <Eyebrow tone="onDark">Find us</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[0.95] tracking-tighter text-ivory-100">
                {site.address.line1}
              </h2>
              <p className="mt-3 font-mono text-sm text-ivory-100/70">
                {site.address.line2}
              </p>

              <ul className="mt-10 space-y-3">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between border-b border-ivory-100/10 pb-2 text-sm">
                    <span className="text-ivory-100/70">{h.day}</span>
                    <span className="font-mono text-ivory-100">{h.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <CTA
                  as="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${site.address.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  variant="cream"
                  size="md"
                >
                  Open in Google Maps
                </CTA>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100/5 text-ivory-100 ring-1 ring-inset ring-ivory-100/15 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900"
                >
                  <FacebookLogo className="h-4 w-4" />
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100/5 text-ivory-100 ring-1 ring-inset ring-ivory-100/15 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900"
                >
                  <InstagramLogo className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative md:col-span-7">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                <iframe
                  title="Leonardo's on Google Maps"
                  src={mapSrc}
                  className="absolute inset-0 h-full w-full rounded-[calc(2.5rem-0.375rem)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: 'grayscale(30%) contrast(0.95) saturate(0.9)' }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
