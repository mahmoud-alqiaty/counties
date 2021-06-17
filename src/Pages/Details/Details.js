import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//icons
import { IoIosArrowRoundBack } from 'react-icons/io'

// contexts
import { 
    CountriesContext 
} from '../../components/contexts/CountriesComtext/CountriesContext'
import { modeContext } from '../../components/contexts/ModeContext'

import { 
    FETCH_REQUEST, 
    FETCH_SUCCESS, 
    FETCH_FILTERED,  
    FETCH_ERROR_All, 
    FETCH_ERROR_Details, 
    FETCH_SEARCH, 
    FETCH_DETAILS 
} from '../../components/contexts/CountriesComtext/Types'

//styled-Components
import {
    DetailsContainer, 
    BackBtn, 
    DetailsInnerContent, 
    DetailsImg, DetailsData, 
    DetailsInfo, 
    BorderCountries
} from './Detailsstyles'


const Details = () => {
    const {nativeName} = useParams()
    const {isLight} = useContext(modeContext)
    const { loading, countryDetails, errorDetails, dispatch} 
    = useContext(CountriesContext)
    console.log( countryDetails);

    const fetchDetails = (name)=>{
        dispatch({type: FETCH_REQUEST})
        axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res=>{
            dispatch({type: FETCH_DETAILS, payload: res.data[0]})
        })
        .catch(err=>{
            console.log(err.message);
            dispatch({type: FETCH_ERROR_Details, payload: err.message})
        })
    }

    
    useEffect(() => {
        fetchDetails(nativeName)
        return null
    }, [nativeName])
    
    return (
        <DetailsContainer isLight={isLight}>
            <BackBtn isLight={isLight}>
                <IoIosArrowRoundBack />
                back
            </BackBtn>
            {
                loading? "loading" :
                errorDetails? errorDetails :
                <DetailsInnerContent>
                    <DetailsImg src={countryDetails.flag} alt={countryDetails.name} />
                    <DetailsData>
                        <h1>{countryDetails.name}</h1>
                        <DetailsInfo>
                            <div className="leftSide">
                            <p>Native Name: <span>{countryDetails.nativeName}</span></p>
                            <p>Population: <span>{countryDetails.population}</span></p>
                            <p>Region: <span>{countryDetails.region}</span></p>
                            <p>sub Region: <span>{countryDetails.subregion}</span></p>
                            <p>Capital: <span>{countryDetails.capital}</span></p>
                            </div>

                            <div className="rightside">
                                <p>Top Level Domain: 
                                    {
                                        countryDetails.topLevelDomain && countryDetails.topLevelDomain.map((item, index)=> 
                                        <span key={index}>{index > 0 && ","}{item}</span>
                                        )
                                    }
                                </p>
                                <p>Currencies: 
                                    {
                                        countryDetails.currencies && countryDetails.currencies.map((item, index)=>
                                        <span key={index}>{index > 0 && ","}{item.name}</span>
                                        )
                                    }
                                </p>
                                <p>Languages: 
                                    {
                                        countryDetails.languages && countryDetails.languages.map((item, index)=>
                                        <span key={index}>{index > 0 && ","}{item.name}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </DetailsInfo>
                        <BorderCountries isLight={isLight}>
                            <p>Border countries: </p>
                            <div className="borders">
                            {
                               countryDetails.borders && countryDetails.borders.map((item, index)=> 
                                <span key={index} className="border_Btn">{item}</span>
                            )}
                            </div>
                        </BorderCountries>
                    </DetailsData>
                </DetailsInnerContent>
            }
        </DetailsContainer>
    )
}

export default Details
