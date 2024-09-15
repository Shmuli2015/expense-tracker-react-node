import { Router } from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from "../controllers/transactions.controller";

const transactionsRouter = Router();

transactionsRouter.route("/").get(getTransactions).post(addTransaction);
transactionsRouter.route("/:id").delete(deleteTransaction);

transactionsRouter.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

export default transactionsRouter;
