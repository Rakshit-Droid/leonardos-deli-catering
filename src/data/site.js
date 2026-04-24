export const site = {
  name: "Leonardo's",
  fullName: "Leonardo's Italian Deli & Catering",
  tagline: "A family table, since 1986.",
  since: "1986",
  address: {
    line1: '14 N. Main Street',
    line2: 'New City, NY 10956',
    mapQuery: '14+N+Main+Street+New+City+NY+10956',
  },
  phone: {
    deli: '845-638-3455',
    catering: '845-499-2671',
  },
  email: 'leosdelicatering@gmail.com',
  hours: [
    { day: 'Monday — Friday', time: '7:30a — 6:00p' },
    { day: 'Saturday', time: '7:30a — 4:00p' },
    { day: 'Sunday', time: '10:00a — 2:00p' },
  ],
  social: {
    instagram: 'https://www.instagram.com/leonardos_deli/',
    instagramHandle: '@leonardos_deli',
    facebook: 'https://www.facebook.com/leosdelicatering',
  },
  ordering: {
    direct: 'https://leosdelicatering.getbento.com/online-ordering/leos-deli-catering/menu',
    catering: 'https://leosdelicatering.getbento.com/catering-store-v2/leos-deli-catering/menu',
    grubhub: 'https://www.grubhub.com/restaurant/leonardos-italian-deli--catering-14-n-main-st-new-city/',
    ubereats: 'https://www.ubereats.com/en-US/nyc-suburbs/food-delivery/leonardos',
    doordash: 'https://www.doordash.com/store/leonardo-s-italian-deli-catering',
  },
  menuPdf: 'https://www.leosdelicatering.com/s/CREDIT-MENU-2024.pdf',
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Catering', to: '/catering' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
