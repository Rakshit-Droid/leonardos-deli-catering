const CDN = 'https://images.squarespace-cdn.com/content/v1/5e027a3b60c6902ad4330abf';

const build = (path, width = 1500) => `${CDN}/${path}?format=${width}w`;

export const logos = {
  primary: build('1577220883957-6T7XE2R83X64CKEV3O9W/leonardo-logo.png', 1500),
  wordmark: build('1577223210037-HPCBBJ0QZB8HEHK6DEKJ/leonardo-logo.png', 800),
  alt: build('da13b901-9858-47e0-a77b-dd170853a83d/italian+deli+logo+2-02.png', 800),
};

export const photos = {
  antipastoHero: build('1679950582755-VBH4IWDHBPP3D49H5630/IMG_2262_photo.jpg', 1500),
  antipastoHeroLg: build('1679950582755-VBH4IWDHBPP3D49H5630/IMG_2262_photo.jpg', 2000),
  counterSpread: build('1679770985668-P2OOFSZY732OC4OK6RLB/IMG_2816_photo.jpg', 1500),
  counterSpreadLg: build('1679770985668-P2OOFSZY732OC4OK6RLB/IMG_2816_photo.jpg', 2000),
  trayCatering: build('1679770958854-22Q9XMAU2XDJKFOJMUSQ/IMG_2649_photo.jpg', 1500),
  trayCateringLg: build('1679770958854-22Q9XMAU2XDJKFOJMUSQ/IMG_2649_photo.jpg', 2000),
  interiorCounter: build('1679771398629-WN75PQRFG6WKXT7X8HD5/IMG_20200219_122730_1.jpg', 1500),
  dailyBoard: build('1679771909031-C5K8HVJP0OFVNHNFR78J/00100dPORTRAIT_00100_BURST20200111205535315_COVER.jpg', 1500),
  storefront: build('1679771359650-INDDWQCL1J7Z2ZQ2FOUD/IMG_0989_photo.jpg', 1500),
};

export const deliveryLogos = {
  grubhub: build('1577374251796-9VCSHNJ7YHILH8UI48OQ/grubhubapp.png', 400),
  ubereats: build('1577374266391-M4YK397J5MVV9379JVEN/ubereats.png', 400),
  doordash: build('1577374281620-WNYE3AWT2403O52IP568/doordashapp.png', 400),
};
