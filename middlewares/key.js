const checkApiKey = (req, res, next) => {
  if (!process.env.apikey)
    next(res.status(400).send({ error: 'Missing API Key' }));
  else next();
};

module.exports = { checkApiKey };
