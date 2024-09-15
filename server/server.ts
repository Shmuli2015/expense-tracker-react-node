import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";

import transactionsRouter from "./routes/transactions.router";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors());

console.log(process.env.MODE_ENV);

if (process.env.MODE_ENV === "development") {
  app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
      const duration = Date.now() - start;
      console.log(
        colors.blue(
          `[${req.method}] ${req.originalUrl} ${res.statusCode} ${duration}ms`
        )
      );
    });
    next();
  });
}

app.use("/api/v1/transactions", transactionsRouter);

if (process.env.MODE_ENV === "production") {
  console.log(colors.yellow.bold("Production mode enabled"));
  
  app.use(express.static("../client/dist"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
  });
}

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(
    colors.yellow.bold(
      `Server is running on port ${PORT} in ${
        process.env.MODE_ENV
      } mode`
    )
  );
});
