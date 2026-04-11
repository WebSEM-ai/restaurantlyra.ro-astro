export const siteConfig = {
  type: 'restaurant' as const,
  name: 'Restaurant Lyra',
  tagline: 'Savoare transilvăneană autentică în inima Târgu Mureșului',
  description: 'Restaurant în Târgu Mureș, Transilvania — bucătărie tradițională românească și transilvăneană, atmosferă elegantă, delivery, evenimente și catering.',
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
    phone: '0751 585 105',
    secondaryPhone: '0265 333 090',
    feedbackPhone: '0749 027 726',
    email: 'office@restaurantlyra.ro',
    address: 'E60 KM 7, Corunca 547567, România',
    streetAddress: 'E60 KM 7',
    locality: 'Corunca',
    region: 'Mureș',
    postalCode: '547567',
    openHours: 'Restaurant: Luni - Duminică · 07:00 - 22:00 (ultima comandă 21:45)',
    deliveryHours: 'Livrări: Luni - Duminică · 10:00 - 22:00',
    mapEmbedUrl: 'https://maps.google.com/maps?q=E60%20KM%207%2C%20Corunca%20547567%2C%20Rom%C3%A2nia&t=m&z=12&output=embed&iwloc=near',
    directionsUrl: 'https://maps.app.goo.gl/gTe8zG7LTud2qPz48',
    coordinates: { lat: 46.5386, lng: 24.5575 },
  },

  delivery: {
    orderUrl: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=afeae6a6-f053-419d-ad8d-5f86abd1f791',
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
    open: '07:00 - 22:00',
    kitchen: '21:45',
    closed: '-',
  },

  features: [
    { name: 'Bucătărie Tradițională', nameHu: 'Hagyományos Konyha', icon: 'chef' },
    { name: 'Terasă Exterioară', nameHu: 'Kültéri Terasz', icon: 'terrace' },
    { name: 'Evenimente Private', nameHu: 'Magánrendezvények', icon: 'events' },
    { name: 'Delivery', nameHu: 'Kiszállítás', icon: 'delivery' },
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
