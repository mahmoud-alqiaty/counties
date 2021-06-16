
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FILTERED,  FETCH_ERROR, FETCH_SEARCH, FETCH_DETAILS } from './Types'

export const initstate = {
    loading: true,
    fetchedCountries: [],
    countryDetails: {},
    error: ""
}

export const Reducer = (state, {type, payload})=>{
    switch (type) {
        case FETCH_REQUEST: 
          return{
            loading: true,
            fetchedCountries: [],
            countryDetails: {},
            error: ""
          }

        case FETCH_SUCCESS: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            error: ""
          }

        case FETCH_FILTERED: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            error: ""
          }

        case FETCH_SEARCH: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            error: ""
          }

        case FETCH_DETAILS: 
          return{
            loading: false,
            fetchedCountries: {},
            countryDetails: payload,
            error: ""
          }
    
        case FETCH_ERROR: 
          return{
            loading: false,
            fetchedCountries: {},
            error: payload
          }
    
        default:
            return state
    }
}