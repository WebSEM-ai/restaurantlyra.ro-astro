export const siteConfig = {
  type: 'restaurant' as const,
  name: 'Restaurant Lyra',
  tagline: 'Savoare transilvăneană autentică în inima Târgu Mureșului',
  description: 'Restaurant în Târgu Mureș, Transilvania — bucătărie tradițională românească și transilvăneană, atmosferă elegantă, evenimente și catering.',
  domain: 'restaurantlyra.ro',
  logo: '/images/logo-lyra.png',

  locales: {
    default: 'ro' as const,
    available: ['ro', 'hu'] as const,
  },

  theme: {
    primary: '#1a3a2a',
    secondary: '#c8956c',
    accent: '#e8c547',
    dark: '#0f1f17',
    light: '#f5f0e8',
  },

  contact: {
    phone: '+40 xxx xxx xxx',
    email: 'contact@restaurantlyra.ro',
    address: 'Str. Exemplu nr. 1, Târgu Mureș, jud. Mureș, România',
    openHours: '10:00 - 23:00',
    coordinates: { lat: 46.5386, lng: 24.5575 },
  },

  social: {
    instagram: '#',
    facebook: '#',
    tripadvisor: '#',
  },

  reservation: {
    provider: 'direct',
    url: '/contact/',
  },

  analytics: {
    ga4: '',
    googleAds: [],
    metaPixel: '',
  },

  seo: {
    titleTemplate: '%s | Restaurant Lyra Târgu Mureș',
    schemaType: 'Restaurant' as const,
    ogImage: '/images/og-image.webp',
  },

  hours: {
    days: 'Luni - Duminică',
    open: '10:00 - 23:00',
    kitchen: '11:00 - 22:00',
    closed: '-',
  },

  features: [
    { name: 'Bucătărie Tradițională', nameHu: 'Hagyományos Konyha', icon: 'chef' },
    { name: 'Terasă Exterioară', nameHu: 'Kültéri Terasz', icon: 'terrace' },
    { name: 'Evenimente Private', nameHu: 'Magánrendezvények', icon: 'events' },
    { name: 'Catering', nameHu: 'Catering', icon: 'catering' },
    { name: 'Parcare Gratuită', nameHu: 'Ingyenes Parkolás', icon: 'parking' },
    { name: 'WiFi Gratuit', nameHu: 'Ingyenes WiFi', icon: 'wifi' },
    { name: 'Aer Condiționat', nameHu: 'Légkondicionálás', icon: 'ac' },
    { name: 'Loc de Joacă', nameHu: 'Játszótér', icon: 'playground' },
  ],

  galleryImages: {
    interior: [
      { src: '/images/interior/interior-1.webp', alt: 'Interior restaurant' },
      { src: '/images/interior/interior-2.webp', alt: 'Sala de mese' },
      { src: '/images/interior/interior-3.webp', alt: 'Ambient interior' },
      { src: '/images/interior/interior-4.webp', alt: 'Interior detaliu' },
      { src: '/images/interior/interior-5.webp', alt: 'Zona de luat masa' },
      { src: '/images/interior/interior-6.webp', alt: 'Interior panoramic' },
      { src: '/images/interior/interior-7.webp', alt: 'Decor interior' },
      { src: '/images/interior/interior-8.webp', alt: 'Ambianță interior' },
      { src: '/images/interior/interior-9.webp', alt: 'Interior elegant' },
      { src: '/images/interior/interior-10.webp', alt: 'Interior vedere' },
      { src: '/images/interior/interior-11.webp', alt: 'Interior restaurant detaliu' },
      { src: '/images/interior/interior-12.webp', alt: 'Interior amenajare' },
    ],
    exterior: [
      { src: '/images/exterior/exterior-1.webp', alt: 'Exterior restaurant' },
      { src: '/images/exterior/exterior-2.webp', alt: 'Vedere exterior' },
      { src: '/images/exterior/exterior-3.webp', alt: 'Terasă restaurant' },
      { src: '/images/exterior/exterior-4.webp', alt: 'Exterior panoramic' },
      { src: '/images/exterior/exterior-5.webp', alt: 'Exterior seară' },
      { src: '/images/exterior/exterior-6.webp', alt: 'Exterior lateral' },
      { src: '/images/exterior/exterior-7.webp', alt: 'Exterior detaliu' },
      { src: '/images/exterior/exterior-8.webp', alt: 'Exterior vedere' },
      { src: '/images/exterior/exterior-9.webp', alt: 'Curte exterior' },
      { src: '/images/exterior/exterior-10.webp', alt: 'Exterior intrare' },
    ],
    catering: [
      { src: '/images/catering/catering-1.webp', alt: 'Catering prezentare' },
      { src: '/images/catering/catering-2.webp', alt: 'Catering eveniment' },
      { src: '/images/catering/catering-3.webp', alt: 'Catering meniu' },
      { src: '/images/catering/catering-4.webp', alt: 'Catering aranjament' },
    ],
    diverse: [
      { src: '/images/diverse/diverse-1.webp', alt: 'Restaurant diverse' },
      { src: '/images/diverse/diverse-2.webp', alt: 'Preparate restaurant' },
      { src: '/images/diverse/diverse-3.webp', alt: 'Detalii restaurant' },
      { src: '/images/diverse/diverse-4.webp', alt: 'Ambianță diverse' },
      { src: '/images/diverse/diverse-5.webp', alt: 'Restaurant detaliu' },
      { src: '/images/diverse/diverse-6.webp', alt: 'Restaurant vedere' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
