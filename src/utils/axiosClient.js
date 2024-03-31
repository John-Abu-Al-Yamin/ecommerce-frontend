import axios from 'axios';

const apikey = process.env.REACT_APP_REST_API;
const apiUrl = "https://back-end-ecommerce-strapi.onrender.com/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

export default axiosClient;
