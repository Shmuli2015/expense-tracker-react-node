import { useContext } from "react"
import { StyledTransactionList, StyledTransactionListTitle } from "./TransactionList.styled"
import { GlobalContext } from "../../context/GlobalState"
import Transaction from "../transaction/Transaction"

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <StyledTransactionListTitle>History</StyledTransactionListTitle>
      <StyledTransactionList className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </StyledTransactionList>
    </>
  )
}

export default TransactionList
