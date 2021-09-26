import { settings, classNames, select } from './settings.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';

export const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[1].id;
    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        // get page id from href atribute
        const id = clickedElement.getAttribute('href').replace('#', '');
        // run thisApp.activePage with that id
        thisApp.activatePage(id);
        // change URL hash
        window.location.hash = '#/' + 'id';
      });
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;
    // add class 'active' to matching pages remove from non matching
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    // add class 'active' to matching link remove from non matching
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initMenu: function(){
    const thisApp = this;
    for(let productData in thisApp.data.products){
      new Products(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },
  initHome: function(){
    const thisApp = this;
    const homePage = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homePage);
  },
  initContact: function(){
    const thisApp = this;
    const contactPage = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactPage);
  },
  initNavi: function () {
    const navi = document.getElementById('navi');
    const navUL = document.getElementById('nav-ul');
    navi.addEventListener('click', () => {
      navUL.classList.toggle('show');
    });
  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu   method */
        thisApp.initMenu();
      });
  },

  init: function(){
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initContact();
    thisApp.initHome();
    thisApp.initNavi();
  },
};
app.init();
