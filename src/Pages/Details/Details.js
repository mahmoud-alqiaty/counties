import React, { useEffect, useContext } from 'react'
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

import { FETCH_REQUEST, FETCH_ERROR_Details, FETCH_DETAILS, FETCH_BORDERS
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
    const { loading, countryDetails, errorDetails, borders, dispatch} 
    = useContext(CountriesContext)

    const fetchDetailsByName = (name)=>{
        dispatch({type: FETCH_REQUEST})
        axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res=>{
            dispatch({type: FETCH_DETAILS, payload: res.data[0]})
            return res= res.data[0]
        })
        .then(res=>{
            if(res.borders){ 
                for(let i=0; i<res.borders.length; i++){
                     axios.get(`https://restcountries.eu/rest/v2/alpha/${res.borders[i]}`)
                     .then(res=>{
                         dispatch({type: FETCH_BORDERS, payload: res.data.name})
                     })
                 }
            }
        })
        .catch(err=>{
            console.log(err.message);
            dispatch({type: FETCH_ERROR_Details, payload: err.message})
        })
    }

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

                        { borders? 
                            <BorderCountries isLight={isLight}>
                                <p>Border countries: </p>
                                <div className="borders">
                                {   
                                borders && borders.map((item, index)=>
                                    <Link key={index} to={`/countries/${item}`} className="border_Btn">
                                        {item}
                                    </Link>
                                )
                                }
                            
                                </div>
                            </BorderCountries> : null
                        }
                    </DetailsData>
                </DetailsInnerContent>
            }
        </DetailsContainer>
    )
}

export default Details
