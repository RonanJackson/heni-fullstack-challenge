import express from 'express';
const printsRouter = express.Router();
import { getPrints } from '../services/prints.js';

printsRouter.get('/', async (req, res) => {
  try {
    const prints = await getPrints();
    res.send(prints);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export default printsRouter;
