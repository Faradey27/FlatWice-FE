import queryString from 'query-string';

class Router {
  query = {};

  constructor(component) {
    this.component = component;
  }

  push(href) {
    this.query = queryString.parse(href.replace('/', ''));
    this.component.setProps({ router: this });
  }

  setComponent(component) {
    this.component = component;
  }
}

export default {
  instance: (component) => new Router(component),
};
