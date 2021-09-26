import { templates } from '../settings.js';

class Contact {
  constructor(element){
    const thisContact = this;
    thisContact.render(element);
  }

  render(element) {
    const thisContact = this;
    const generatedHTML = templates.contactPage();
    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contact;