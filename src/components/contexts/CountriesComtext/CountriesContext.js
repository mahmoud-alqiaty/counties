import React, { createContext, useReducer } from 'react'
import { initstate, Reducer } from './CountriesReducer'

export const CountriesContext  = createContext()

const CountriesProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initstate)
    return (
        <CountriesContext.Provider value={{
            loading: state.loading,
            fetchedCountries: state.fetchedCountries,
            countryDetails: state.countryDetails,
            borders: state.borders,
            errorAll: state.errorAll,
            errorDetails: state.errorDetails,
            dispatch
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesProvider
