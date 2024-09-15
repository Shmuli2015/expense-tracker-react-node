import { useContext } from "react";
import { StyledIncomeExpensesContainer, StyledIncomeExpensesTitle, StyledIncomeExpensesValue } from "./IncomeExpenses.styled"
import { GlobalContext } from "../../context/GlobalState";
import { formatNumberWithCommas } from "../../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const formattedIncome = formatNumberWithCommas(income);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const formattedExpense = formatNumberWithCommas(expense);

  return (
    <StyledIncomeExpensesContainer>
      <div>
        <StyledIncomeExpensesTitle>Income</StyledIncomeExpensesTitle>
        <StyledIncomeExpensesValue color="#2ecc71">${formattedIncome}</StyledIncomeExpensesValue>
      </div>
      <div>
        <StyledIncomeExpensesTitle>Expense</StyledIncomeExpensesTitle>
        <StyledIncomeExpensesValue color='#c0392b'>${formattedExpense}</StyledIncomeExpensesValue>
      </div>
    </StyledIncomeExpensesContainer>
  )
}

export default IncomeExpenses