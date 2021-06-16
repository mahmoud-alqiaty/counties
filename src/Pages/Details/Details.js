import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { CountriesContext } from '../../components/contexts/CountriesComtext/CountriesContext'
import { FETCH_DETAILS, FETCH_ERROR, FETCH_REQUEST } from '../../components/contexts/CountriesComtext/Types'
import {DetailsContainer, BackBtn, DetailsInnerContent, DetailsImg, DetailsData, DetailsInfo} from './Detailsstyles'

const Details = () => {
    const {nativeName} = useParams()
    // const {countries, dispatch} = useContext(CountriesContext)
    const {countries, dispatch} = useContext(CountriesContext)

    const fetchDetails = (name)=>{
        dispatch({type: FETCH_REQUEST})
        axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res=>{
            // console.log("details: ", res.data[0]);
            dispatch({type: FETCH_DETAILS, payload: res.data[0]})
        })
        .catch(err=>{
            console.log(err.message);
            dispatch({type: FETCH_ERROR, payload: err.message})
        })
    }

    
    useEffect(() => {
        fetchDetails(nativeName)
        return null
    }, [nativeName])
    
    let countryDetails = countries.countryDetails
    let currencies = countries.countryDetails.currencies
    let languages = countryDetails.languages
    let loading = countries.loading
    let error = countries.error

    console.log(currencies);
    console.log(loading);
    return (
        <DetailsContainer>
            <BackBtn>
                <IoIosArrowRoundBack />
                back
            </BackBtn>
            {
                loading? "loading" :
                error? error :
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
                                <p>Top Level Domain: <span>{countryDetails.topLevelDomain}</span></p>
                                <p>Currencies: 
                                    {/* {
                                        currencies.map((item, index)=>
                                        <span key={index}>{item.code},</span>
                                        )
                                    } */}
                                </p>
                                <p>Languages: 
                                    {/* {
                                        languages.map((item, index)=>
                                        <span key={index}>{item.name},</span>
                                        )
                                    } */}
                                </p>
                            </div>
                        </DetailsInfo>
                    </DetailsData>
                </DetailsInnerContent>
            
            }
        </DetailsContainer>
    )
}

export default Details
