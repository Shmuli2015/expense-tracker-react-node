import { useContext } from "react";
import { TransactionType } from "../../types/index.ts";
import {
  StyledTransactionListItem,
  StyledTransactionListDeleteBtn,
} from "./Transaction.styled.ts";
import { GlobalContext } from "../../context/GlobalState.tsx";

interface TransactionProps {
  transaction: TransactionType;
}

const Transaction = ({ transaction }: TransactionProps) => {
  const { id, text, amount } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDeleteTransaction = () => deleteTransaction(id);

  const isIncome = amount > 0;
  const sign = isIncome ? "+" : "-";

  return (
    <StyledTransactionListItem isIncome={isIncome}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <StyledTransactionListDeleteBtn onClick={handleDeleteTransaction}>x</StyledTransactionListDeleteBtn>
    </StyledTransactionListItem>
  );
};

export default Transaction;
