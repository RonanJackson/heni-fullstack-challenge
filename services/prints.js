import axios from 'axios';

const BASE_URL = 'https://api.harvardartmuseums.org';

const getPrints = async () => {
  const res = await axios(
    `${BASE_URL}/object?classification=Prints&apikey=${process.env.apikey}&hasimage=1&sort=rank&sortorder=desc&q=verificationlevel:4`,
  );
  return res.data;
};

export { getPrints };
