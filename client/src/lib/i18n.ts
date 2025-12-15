const translations: Record<string, Record<string, string>> = {
  fr: {
    products: 'Produits',
    about: 'À propos',
    panier: 'Panier',
    contact: 'Contact',
    contactFaq: 'Contact & FAQ'
  },
  en: {
    products: 'Products',
    about: 'About',
    panier: 'Cart',
    contact: 'Contact',
    contactFaq: 'Contact & FAQ'
  }
};

let locale = 'fr';

export function setLocale(l: string) {
  locale = l;
}

export function t(key: string) {
  return translations[locale]?.[key] ?? key;
}

export default { t, setLocale };
