import { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import TransactionsModel from "../models/Transactions.model";

const isValidationError = (error: unknown): error is Error.ValidationError =>
  error instanceof Error.ValidationError;

const handleError = (res: Response, error: unknown) => {
  if (isValidationError(error)) {
    const messages = Object.values(error.errors).map((err) => err.message);
    return res.status(400).json({ success: false, error: messages });
  } else if (error instanceof Error) {
    return res.status(500).json({ success: false, error: error.message });
  } else {
    return res
      .status(500)
      .json({ success: false, error: "An unknown error occurred." });
  }
};

export const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transactions = await TransactionsModel.find();    

    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    handleError(res, error);
  }
};

export const addTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { text, amount } = req.body;

    if (!text || !amount) {
      return res.status(400).json({
        success: false,
        error: "Transaction text and amount are required.",
      });
    }

    const transaction = await TransactionsModel.create({ text, amount });

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Transaction id is required.",
      });
    }

    const transaction = await TransactionsModel.findByIdAndDelete(id);

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "Transaction not found." });
    }

    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    handleError(res, error);
  }
};
