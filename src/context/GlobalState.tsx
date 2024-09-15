import { createContext, ReactNode, useReducer } from "react";
import AppReducer from "./AppReducer";
import { AppContext, AppState, TransactionType } from "../types";

const initialState: AppState = {
  transactions: [
    // { id: "1", text: 'Flower', amount: -20 },
    // { id: "2", text: 'Salary', amount: 300 },
    // { id: "3", text: 'Book', amount: -10 },
    // { id: "4", text: 'Camera', amount: 150 }
  ],
};

export const GlobalContext = createContext<AppContext>({
  ...initialState,
  deleteTransaction: () => {},
  addTransaction: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction: TransactionType) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}{" "}
    </GlobalContext.Provider>
  );
};
