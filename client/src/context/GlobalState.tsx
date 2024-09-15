import { createContext, ReactNode, useReducer } from "react";
import axios, { isAxiosError } from "axios";
import AppReducer, { ActionTypes } from "./AppReducer";
import { AppContext, AppState, TransactionType } from "../types/context.types";

const initialState: AppState = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext<AppContext>({
  ...initialState,
  getTransactions: () => Promise.resolve(),
  deleteTransaction: () => {},
  addTransaction: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const { data } = await axios.get("/api/v1/transactions", {baseURL: import.meta.env.VITE_API_URL});

      dispatch({
        type: ActionTypes.GET_TRANSACTIONS,
        payload: data.data,
      });
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.response?.data?.error || "Error fetching transactions"
        : "An unknown error occurred.";

      dispatch({
        type: ActionTypes.TRANSACTIONS_ERROR,
        payload: errorMessage,
      });
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`, {baseURL: import.meta.env.VITE_API_URL});
      dispatch({
        type: ActionTypes.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.response?.data?.error || "Error deleting transaction"
        : "An unknown error occurred.";

      dispatch({
        type: ActionTypes.TRANSACTIONS_ERROR,
        payload: errorMessage,
      });
    }
  };

  const addTransaction = async (transaction: TransactionType) => {
    const config = {
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try{
      const {data} = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: ActionTypes.ADD_TRANSACTION,
        payload: data.data,
      });
    }
    catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.response?.data?.error || "Error adding transaction"
        : "An unknown error occurred.";

      dispatch({
        type: ActionTypes.TRANSACTIONS_ERROR,
        payload: errorMessage,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
