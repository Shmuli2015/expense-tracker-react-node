import { useContext } from "react";
import { StyledBalanceTitle, StyledBalanceValue } from "./Balance.styled"
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
      <StyledBalanceTitle>Your Balance</StyledBalanceTitle>
      <StyledBalanceValue>${total}</StyledBalanceValue>
    </>
  )
}

export default Balance