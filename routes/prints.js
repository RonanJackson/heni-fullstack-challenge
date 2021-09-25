import express from 'express';
const printsRouter = express.Router();
import { getPrints } from '../services/prints.js';
import { checkApiKey } from '../middlewares/key.js';

printsRouter.get('/', checkApiKey, async (req, res) => {
  try {
    const prints = await getPrints();
    res.send(prints);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default printsRouter;
