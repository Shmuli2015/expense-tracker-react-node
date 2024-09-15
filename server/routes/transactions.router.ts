import { Router } from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from "../controllers/transactions.controller";

const transactionsRouter = Router();

transactionsRouter.route("/").get(getTransactions).post(addTransaction);
transactionsRouter.route("/:id").delete(deleteTransaction);

export default transactionsRouter;
