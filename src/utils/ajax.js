import axios from 'axios';
import { getHost } from './../constants/data';

const sendRequest = ({ method, endpoint, body }) => axios[method](getHost() + endpoint, body).then((res) => res.data);

export default {
  get: (endpoint) => sendRequest({ method: 'get', endpoint }),
  post: (endpoint, body) => sendRequest({ method: 'post', endpoint, body }),
};
