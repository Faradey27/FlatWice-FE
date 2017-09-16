import ajax from './../../utils/ajax';

class Api {
  get = (url) => ajax.get(url);
}

export default (new Api());
