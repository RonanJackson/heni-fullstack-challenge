import express from 'express';
import { getPrints } from '../services/prints.js';
import { checkApiKey } from '../middlewares/key.js';

const printsRouter = express.Router();

printsRouter.get('/', checkApiKey, async (req, res) => {
  try {
    const { page } = req.query;
    const prints = await getPrints(page);
    res.send(prints);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default printsRouter;
