import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    transactions:[]
}
//Creating context

export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState)

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
             type:'DELETE_TRANSACTION',
             payload:id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
             type:'ADD_TRANSACTION',
             payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}