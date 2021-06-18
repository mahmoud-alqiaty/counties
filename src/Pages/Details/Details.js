import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { Link, useHistory, useParams } from 'react-router-dom'
//icons
import { IoIosArrowRoundBack } from 'react-icons/io'

//Components
import Loading from '../../components/Loading'
import Error from '../../components/Error'

// contexts
import {CountriesContext} from '../../components/contexts/CountriesComtext/CountriesContext'
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
    const [countryBorders, setCountryBorders] = useState([])

    

    const fetchDetailsByName = (name)=>{
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

    const fetchDetailsByCode = (code)=>{
        dispatch({type: FETCH_REQUEST})
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then(res=>{
            console.log(res);
            dispatch({type: FETCH_DETAILS, payload: res.data[0]})
        })
        .catch(err=>{
            console.log(err.message);
            dispatch({type: FETCH_ERROR_Details, payload: err.message})
        })
    }

    const setBorders = ()=>{
        let borderarray = []
        countryDetails.borders && countryDetails.borders.map((item)=>{
            axios.get(`https://restcountries.eu/rest/v2/alpha/${item}`)
            .then(res=>{
                let name = res.data.name
                borderarray.push(name)
            })
        })
        setCountryBorders(borderarray)
    }    
    console.log(countryBorders);

    
    useEffect(() => {
        fetchDetailsByName(nativeName)
        return null
    }, [nativeName])
    
    const history = useHistory()
    const handleBackClick = ()=>{
        history.goBack()
    }
    return (
        <DetailsContainer isLight={isLight}>
            <BackBtn isLight={isLight} onClick={handleBackClick}>
                <IoIosArrowRoundBack />
                back
            </BackBtn>
            {
                loading? <Loading /> :
                errorDetails? <Error message={errorDetails} /> :
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
                                <Link key={index} className="border_Btn">
                                    {item}
                                </Link>
                             )
                            }
                        
                            </div>
                        </BorderCountries>
                    </DetailsData>
                </DetailsInnerContent>
            }
        </DetailsContainer>
    )
}

export default Details
