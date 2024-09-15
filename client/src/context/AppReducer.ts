import { Action, AppState, TransactionType } from "../types/context.types";

export const ActionTypes = {
  GET_TRANSACTIONS: "GET_TRANSACTIONS",
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  ADD_TRANSACTION: "ADD_TRANSACTION",
  TRANSACTIONS_ERROR: "TRANSACTIONS_ERROR",
};

export default (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: TransactionType) => transaction._id !== action.payload
        ),
      };

    case ActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case ActionTypes.TRANSACTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
