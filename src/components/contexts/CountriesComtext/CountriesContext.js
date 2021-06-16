import React, { createContext, useReducer } from 'react'
import { initstate, Reducer } from './CountriesReducer'

export const CountriesContext  = createContext()

const CountriesProvider = ({children}) => {
    const [countries, dispatch] = useReducer(Reducer, initstate)
    return (
        <CountriesContext.Provider value={{countries, dispatch}}>
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesProvider
