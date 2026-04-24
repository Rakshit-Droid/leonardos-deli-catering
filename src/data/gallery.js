import { photos } from './images.js';

const ig = (seed) => `https://picsum.photos/seed/${seed}/900/900`;

export const galleryItems = [
  { id: 1, caption: 'Antipasto, dressed at the counter', tag: 'Cold Case', span: 'wide', src: photos.antipastoHeroLg },
  { id: 2, caption: 'Mozzarella pulled before service', tag: 'House', span: 'tall', src: photos.counterSpread },
  { id: 3, caption: 'Prosciutto di Parma, slicer #2', tag: 'Imports', span: 'square', src: photos.antipastoHero },
  { id: 4, caption: 'Sunday gravy, 9a start', tag: 'Kitchen', span: 'tall', src: photos.trayCateringLg },
  { id: 5, caption: 'Wedding build-out, Nyack', tag: 'Event', span: 'wide', src: photos.trayCatering },
  { id: 6, caption: 'Cannoli, filled to order', tag: 'Dolci', span: 'square', src: photos.dailyBoard },
  { id: 7, caption: 'Focaccia, rosemary & sea salt', tag: 'Bakery', span: 'tall', src: photos.counterSpreadLg },
  { id: 8, caption: 'Corporate lunch, Pearl River', tag: 'Event', span: 'wide', src: photos.interiorCounter },
  { id: 9, caption: 'Sfogliatella on the cooling rack', tag: 'Dolci', span: 'square', src: photos.dailyBoard },
  { id: 10, caption: 'Espresso, Trieste roast', tag: 'Bar', span: 'square', src: photos.storefront },
  { id: 11, caption: 'First Communion luncheon', tag: 'Event', span: 'wide', src: photos.trayCateringLg },
  { id: 12, caption: 'The counter, Saturday 11a', tag: 'Deli', span: 'tall', src: photos.interiorCounter },
];

export const instagramTiles = [
  { id: 'ig1', src: ig('leo-ig-antipasto'), alt: 'Antipasto platter from above' },
  { id: 'ig2', src: ig('leo-ig-mozz'), alt: 'Hand pulling fresh mozzarella' },
  { id: 'ig3', src: ig('leo-ig-cannoli'), alt: 'Cannoli lineup' },
  { id: 'ig4', src: ig('leo-ig-prosciutto'), alt: 'Prosciutto being sliced paper-thin' },
  { id: 'ig5', src: ig('leo-ig-pasta'), alt: 'Baked ziti tray' },
  { id: 'ig6', src: ig('leo-ig-event'), alt: 'Event setup in progress' },
];
