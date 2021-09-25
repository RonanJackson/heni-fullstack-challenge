import { useQuery } from 'react-query';
import axios from 'axios';

const getPrints = async () => {
  const res = await axios.get('/prints');
  return res.data;
};

export const useGetPrints = () => {
  return useQuery('printsData', getPrints);
};
