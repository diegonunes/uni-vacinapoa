import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.covid19.especiaisg1.globo/api',
});

export default api;
