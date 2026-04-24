import { photos } from './images.js';

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
  { id: 'ig1', src: photos.antipastoHero, alt: 'Antipasto platter — imported meats, cheeses, and marinated vegetables' },
  { id: 'ig2', src: photos.counterSpread, alt: 'The deli counter, mid-service' },
  { id: 'ig3', src: photos.dailyBoard, alt: 'Daily food specials board at Leonardo\'s' },
  { id: 'ig4', src: photos.trayCatering, alt: 'A catering tray ready for delivery' },
  { id: 'ig5', src: photos.interiorCounter, alt: 'Inside Leonardo\'s — counter, cases, and regulars' },
  { id: 'ig6', src: photos.storefront, alt: 'Leonardo\'s Italian Deli & Catering, New City, NY' },
];
