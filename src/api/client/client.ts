import axios from 'axios';
import Config from 'react-native-config';

export const client = axios.create({
  baseURL: Config.BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
