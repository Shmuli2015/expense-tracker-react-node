import { useContext } from "react";
import { StyledBalanceTitle, StyledBalanceValue } from "./Balance.styled"
import { GlobalContext } from "../../context/GlobalState";
import { formatNumberWithCommas } from "../../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const formattedTotal = formatNumberWithCommas(total);

  return (
    <>
      <StyledBalanceTitle>Your Balance</StyledBalanceTitle>
      <StyledBalanceValue>${formattedTotal}</StyledBalanceValue>
    </>
  )
}

export default Balance