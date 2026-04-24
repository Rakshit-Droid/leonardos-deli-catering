import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, InstagramLogo } from '@phosphor-icons/react';

import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import { galleryItems } from '../data/gallery.js';
import { site } from '../data/site.js';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const tags = useMemo(
    () => ['All', ...new Set(galleryItems.map((g) => g.tag))],
    [],
  );

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((g) => g.tag === filter),
    [filter],
  );

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prev = () =>
    setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () =>
    setLightbox((i) => (i + 1) % filtered.length);

  return (
    <>
      <GalleryHero />

      <div className="mx-auto w-[min(94vw,1400px)] px-4 pb-24">
        <div className="sticky top-[88px] z-20 -mx-4 border-b border-espresso-800/10 bg-ivory-100/85 px-4 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium tracking-tight transition-all duration-500 ease-out-expo ${
                  filter === t
                    ? 'bg-espresso-800 text-ivory-100'
                    : 'bg-espresso-800/5 text-espresso-700 hover:bg-espresso-800/10'
                }`}
              >
                {t}
                <span
                  className={`ml-2 font-mono text-[10px] ${
                    filter === t ? 'text-ivory-100/60' : 'text-espresso-400'
                  }`}
                >
                  {(t === 'All'
                    ? galleryItems.length
                    : galleryItems.filter((g) => g.tag === t).length)
                    .toString()
                    .padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4 md:auto-rows-[180px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => {
              const spanClass =
                item.span === 'wide'
                  ? 'col-span-2 md:col-span-3 md:row-span-2'
                  : item.span === 'tall'
                  ? 'col-span-2 md:col-span-2 md:row-span-3'
                  : 'col-span-2 md:col-span-2 md:row-span-2';
              return (
                <motion.button
                  type="button"
                  key={item.id}
                  layout
                  onClick={() => openLightbox(idx)}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (idx % 8) * 0.04,
                  }}
                  className={`group relative overflow-hidden rounded-2xl bg-espresso-800/5 ring-1 ring-inset ring-espresso-800/10 ${spanClass}`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/65 via-espresso-900/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div className="text-left text-ivory-100">
                      <div className="eyebrow text-ivory-100/70">{item.tag}</div>
                      <div className="mt-0.5 font-display text-base md:text-lg leading-tight">
                        {item.caption}
                      </div>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ivory-100 text-espresso-800 opacity-0 transition-all duration-500 ease-out-expo group-hover:opacity-100">
                      <ArrowRight className="h-3.5 w-3.5" weight="regular" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-espresso-800/20 bg-espresso-800/[0.02] px-6 py-20 text-center">
            <div className="font-display text-2xl text-espresso-800">
              No images in this collection yet.
            </div>
            <p className="mt-3 text-sm text-espresso-500">
              New shoots added each month. Follow along on Instagram.
            </p>
            <div className="mt-6 inline-flex">
              <CTA
                as="a"
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                variant="solid"
                size="sm"
                icon={InstagramLogo}
              >
                {site.social.instagramHandle}
              </CTA>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            item={filtered[lightbox]}
            index={lightbox}
            total={filtered.length}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* --------------------------- GALLERY HERO --------------------------- */

function GalleryHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto w-[min(94vw,1400px)] px-4">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-light tracking-[-0.03em] leading-[0.9] text-espresso-800 text-[clamp(2.75rem,9vw,8rem)]">
                From the
                <br />
                <span className="font-display-italic text-tomato-600">counter.</span>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={160} className="md:col-span-4">
            <p className="max-w-[44ch] text-espresso-500 text-[17px] leading-relaxed">
              Weekday rush, Sunday gravy, wedding setups, and the espresso machine
              at 7:31 AM. Real service, shot as it happens.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- LIGHTBOX --------------------------- */

function Lightbox({ item, index, total, onClose, onPrev, onNext }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-900/92 backdrop-blur-3xl"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 ring-1 ring-inset ring-ivory-100/15 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900 md:right-6 md:top-6"
      >
        <X className="h-4 w-4" weight="regular" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 ring-1 ring-inset ring-ivory-100/15 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900 md:left-8"
      >
        <ArrowLeft className="h-4 w-4" weight="regular" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 ring-1 ring-inset ring-ivory-100/15 transition-all duration-500 ease-out-expo hover:bg-ivory-100 hover:text-espresso-900 md:right-8"
      >
        <ArrowRight className="h-4 w-4" weight="regular" />
      </button>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.96, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-h-[85dvh] w-[min(90vw,1100px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.caption}
          className="max-h-[75dvh] w-full rounded-2xl object-contain shadow-card"
        />
        <div className="mt-5 flex items-end justify-between gap-6 text-ivory-100">
          <div>
            <div className="eyebrow text-ivory-100/60">{item.tag}</div>
            <div className="mt-1 font-display text-2xl md:text-3xl leading-tight">
              {item.caption}
            </div>
          </div>
          <div className="font-mono text-xs text-ivory-100/60">
            {(index + 1).toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
