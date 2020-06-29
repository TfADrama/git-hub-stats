import axios from 'axios';

const API_SCHEME = 'https://';
const BASE_URL = 'api.github.com';

export function configureAxios() {
  axios.defaults.baseURL = `${API_SCHEME}${BASE_URL}`;
  axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';
}
