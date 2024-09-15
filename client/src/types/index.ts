export interface TransactionType {
    id: string;
    text: string;
    amount: number;
}

export interface AppState {
    transactions: TransactionType[];
}

export interface AppContext extends AppState {
    deleteTransaction: (id: string) => void;
    addTransaction: (transaction: TransactionType) => void;
}