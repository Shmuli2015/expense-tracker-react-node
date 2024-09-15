import { useContext } from "react";
import { StyledIncomeExpensesContainer, StyledIncomeExpensesTitle, StyledIncomeExpensesValue } from "./IncomeExpenses.styled"
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <StyledIncomeExpensesContainer>
      <div>
        <StyledIncomeExpensesTitle>Income</StyledIncomeExpensesTitle>
        <StyledIncomeExpensesValue color="#2ecc71">${income}</StyledIncomeExpensesValue>
      </div>
      <div>
        <StyledIncomeExpensesTitle>Expense</StyledIncomeExpensesTitle>
        <StyledIncomeExpensesValue color='#c0392b'>${expense}</StyledIncomeExpensesValue>
      </div>
    </StyledIncomeExpensesContainer>
  )
}

export default IncomeExpenses