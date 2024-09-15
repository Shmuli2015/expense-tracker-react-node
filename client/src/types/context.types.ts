export interface TransactionType {
  _id: string;
  text: string;
  amount: number;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface AppState {
  transactions: TransactionType[];
  error: string | null;
  loading: boolean;
}

export interface AppContext extends AppState {
  getTransactions: () => void;
  deleteTransaction: (id: string) => void;
  addTransaction: (transaction: TransactionType) => void;
}
