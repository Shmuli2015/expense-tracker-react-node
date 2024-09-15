import mongoose, { Schema, Document, Model } from 'mongoose';

interface TransactionDocument extends Document {
    text: string;
    amount: number;
    createdAt: Date;
  }

const TransactionsSchema = new Schema<TransactionDocument>({
  text: {
    type: String,
    trim: true,
    required: [true, 'Transaction text is required'],
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
const TransactionModel: Model<TransactionDocument> = mongoose.model<TransactionDocument>('Transactions', TransactionsSchema);

export default TransactionModel;