import axios from 'axios';

const financialBaseUrl = process.env.REACT_APP_FM_URL;

export const financialBackendInstance = axios.create({
  baseURL: financialBaseUrl,
});
