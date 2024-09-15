import mongoose, { Schema, Document } from 'mongoose';

interface TransactionDocument extends Document {
    text: string;
    amount: number;
    createdAt: Date;
  }

const TransactionsSchema = new Schema<TransactionDocument>({
  text: {
    type: String,
    required: [true, 'Transaction text is required'],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, 'transaction amount is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Transactions', TransactionsSchema);