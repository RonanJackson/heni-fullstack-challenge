import express from 'express';
import dotenv from 'dotenv';
import printsRouter from './routes/prints.js';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/prints', printsRouter);
