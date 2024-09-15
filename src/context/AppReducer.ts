import {TransactionType} from "../types"

export default (state: any, action: any) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction: TransactionType) => transaction.id !== action.payload)
                
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}