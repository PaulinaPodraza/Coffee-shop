import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Products {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProducts = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productsPage(thisProducts.data);
    /* create element using utils.createElementFromHTML */
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    thisProducts.products = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.menu);
    const homeContainer = document.querySelector(select.containerOf.main);
    const aboutUsElement = document.querySelector(select.containerOf.home);
    /* add element to menu */
    menuContainer.appendChild(thisProducts.element);
    homeContainer.insertBefore(thisProducts.products, aboutUsElement);
  }
}

export default Products;
