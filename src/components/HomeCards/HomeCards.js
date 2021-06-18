import React, { useContext } from 'react'
import Card from '../Card/Card'
import { CountriesContext } from '../contexts/CountriesComtext/CountriesContext'
import { modeContext } from '../contexts/ModeContext'
import Error from '../Error'
import Loading from '../Loading'
import {HomeCardsContainer, HomeCardsInnerContainer} from './HomeCardsStyle'

const HomeCards = () => {
    const {isLight} = useContext(modeContext)
    const {loading, fetchedCountries, errorAll} = useContext(CountriesContext)
    return (
        <>
        {
            loading? <Loading />:
            errorAll? <Error message={errorAll} /> :
            <HomeCardsContainer islight={isLight}>
                <div className="total-result">
                    Total Results: {fetchedCountries.length} <span>Countries</span>
                </div>
                <HomeCardsInnerContainer>
                    {
                        fetchedCountries && [...fetchedCountries].map((item, index)=>
                            <Card
                                nativeName={item.nativeName}
                                key={index} 
                                flag={item.flag}
                                name={item.name}
                                population={item.population}
                                region={item.region}
                                capital={item.capital}
                            />
                        )
                    }
                </HomeCardsInnerContainer>
        
        </HomeCardsContainer>
    
        }
        </>
       )
}

export default HomeCards
