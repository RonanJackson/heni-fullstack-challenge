import { useQuery } from 'react-query';
import axios from 'axios';

const getPrints = async (page) => {
  const res = await axios.get(`http://localhost:5000/prints?page=${page}`);
  return res.data;
};

export const useGetPrints = (page) => {
  return useQuery(['printsData', page], () => getPrints(page));
};
