import axios from 'axios';

const FMbaseUrl = process.env.REACT_APP_FM_URL;
const apiKey = process.env.REACT_APP_FM_API_KEY;

export const financialModelingInstance = axios.create({
  baseURL: FMbaseUrl,
  params: {
    apikey: apiKey,
  },
});
