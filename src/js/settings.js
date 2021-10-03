export const select = {
  templateOf: {
    homePage: '#template-home-widget',
    productsPage: '#template-products-widget',
    contactPage: '#template-contact-widget',
  },
  containerOf: {
    menu: '#products',
    main: '#home',
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
  },
  nav: {
    links: '.main-nav a',
  },
};
export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};
export const settings = {
  db: {
  url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};
export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  productsPage: Handlebars.compile(document.querySelector(select.templateOf.productsPage).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};