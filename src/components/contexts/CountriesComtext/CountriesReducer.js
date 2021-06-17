
import {
  FETCH_REQUEST, 
  FETCH_SUCCESS, 
  FETCH_FILTERED,  
  FETCH_ERROR_All, 
  FETCH_ERROR_Details, 
  FETCH_SEARCH, 
  FETCH_DETAILS 
} from './Types'

export const initstate = {
    loading: false,
    fetchedCountries: [],
    countryDetails: {},
    errorAll: "",
    errorDetails: ""
}
export const Reducer = (state, {type, payload})=>{
    switch (type) {
        case FETCH_REQUEST: 
          return{
            ...state,
            loading: true,
          }

        case FETCH_SUCCESS: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            errorAll: "",
            errorDetails: ""
          }

        case FETCH_FILTERED: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            errorAll: "",
            errorDetails: ""
          }

        case FETCH_SEARCH: 
          return{
            loading: false,
            fetchedCountries: payload,
            countryDetails: {},
            errorAll: "",
            errorDetails: ""
          }

        case FETCH_DETAILS: 
          return{
            ...state,
            loading: false,
            countryDetails: payload,
            errorAll: "",
            errorDetails: ""          
          }
    
        case FETCH_ERROR_All: 
          return{
            loading: false,
            fetchedCountries: [],
            countryDetails: {},
            errorAll: payload,
            errorDetails: ""
          }
        case FETCH_ERROR_Details: 
          return{
            ...state,
            loading: false,
            countryDetails: {},
            errorAll: "",
            errorDetails:payload
          }
    
        default:
            return state
    }
}