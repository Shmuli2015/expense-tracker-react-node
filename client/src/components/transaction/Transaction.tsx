import { useContext } from "react";
import { TransactionType } from "../../types/context.types.ts";
import {
  StyledTransactionListItem,
  StyledTransactionListDeleteBtn,
} from "./Transaction.styled.ts";
import { GlobalContext } from "../../context/GlobalState.tsx";
import { formatNumberWithCommas } from "../../utils/format.ts";

interface TransactionProps {
  transaction: TransactionType;
}

const Transaction = ({ transaction }: TransactionProps) => {
  const { _id, text, amount } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDeleteTransaction = () => deleteTransaction(_id);

  const isIncome = amount > 0;
  const sign = isIncome ? "+" : "-";
  const formattedAmount = formatNumberWithCommas(Math.abs(amount));

  return (
    <StyledTransactionListItem $isIncome={isIncome}>
      {text}
      <span>
        {sign}${formattedAmount}
      </span>
      <StyledTransactionListDeleteBtn onClick={handleDeleteTransaction}>x</StyledTransactionListDeleteBtn>
    </StyledTransactionListItem>
  );
};

export default Transaction;
