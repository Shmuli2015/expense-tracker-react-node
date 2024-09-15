import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
 import morgan from 'morgan';

import transactionsRouter from './routes/transactions.router';
import connectDB from './config/db';

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactionsRouter);

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(
    colors.yellow.bold(
      `Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`
    )
  );
});