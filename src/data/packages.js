export const cateringPackages = [
  {
    id: 'famiglia',
    name: 'La Famiglia',
    tier: 'Intimate',
    minGuests: 12,
    maxGuests: 24,
    pricePerGuest: '28',
    leadTime: '48 hours',
    summary:
      'A Sunday-table format for rehearsal dinners, small birthdays, and office lunches that should feel like home.',
    includes: [
      'Antipasto platter with two imported cheeses & three cured meats',
      'Choice of two hot entrées (tray)',
      'One seasonal pasta (tray)',
      'Two composed salads & a focaccia basket',
      'Dessert: cannoli, biscotti, seasonal fruit',
    ],
    addons: ['Wine pairing counsel', 'Delivery within 12 miles', 'Chafing dish rental'],
  },
  {
    id: 'bottega',
    name: 'La Bottega',
    tier: 'Signature',
    minGuests: 25,
    maxGuests: 80,
    pricePerGuest: '42',
    leadTime: '5 days',
    summary:
      'Our most-ordered spread for corporate events, milestone birthdays, and post-service receptions. Staff-attended on request.',
    includes: [
      'Grand antipasto table — four cheeses, five meats, marinated vegetables',
      'Build-your-own panino station with four breads',
      'Choice of three hot entrées + two pasta trays',
      'Insalata trio: Caesar, tricolore, panzanella',
      'Dolci table: tiramisù, sfogliatella, cannoli, torta della nonna',
    ],
    addons: ['Attending chef on site', 'Espresso bar with barista', 'Bespoke menu printing'],
  },
  {
    id: 'nozze',
    name: 'Nozze & Eventi',
    tier: 'Full-Service',
    minGuests: 60,
    maxGuests: 250,
    pricePerGuest: '78',
    leadTime: '3 weeks',
    summary:
      'Weddings, christenings, First Communions, and anniversaries — a plated or hybrid service with kitchen, front-of-house, and setup.',
    includes: [
      'Private menu consultation (in-store, 90 min)',
      'Passed antipasti during cocktails (six selections)',
      'Plated or family-style primi, secondi, contorni',
      'Dedicated service team & captain',
      'China, glassware, linen, & chafing rental coordination',
      'Wedding cake or Italian dolci tower',
    ],
    addons: ['On-site pasta station', 'Mozzarella pulling demonstration', 'Late-night panino service'],
  },
];

export const cateringGuarantees = [
  {
    label: 'Hand-delivered, staged, & tidied',
    copy: 'We don’t drop-and-go. A member of our family stays to set the table and clean the counter.',
  },
  {
    label: 'No mystery pricing',
    copy: 'Everything quoted is everything you pay. Tax, fuel, and coordination fee included on page one.',
  },
  {
    label: 'Imports you can trace',
    copy: 'Prosciutto from Parma, mozzarella pulled that morning, olive oil from a named Tuscan estate.',
  },
  {
    label: 'Dietary, sincerely handled',
    copy: 'Celiac, kosher-style, vegetarian, vegan. We cook it in its own pan on its own day.',
  },
];

export const eventTypes = [
  'Weddings & Rehearsal Dinners',
  'Corporate Lunches & Off-Sites',
  'First Communion & Confirmation',
  'Shivas & Memorial Services',
  'Film & Production Crew Catering',
  'Sweet Sixteens & Graduations',
  'Holiday Parties & Christmas Eve',
  'Rockland County Private Events',
];
