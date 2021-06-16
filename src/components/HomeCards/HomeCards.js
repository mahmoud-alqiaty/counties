import React, { useContext } from 'react'
import Card from '../Card/Card'
import { CountriesContext } from '../contexts/CountriesComtext/CountriesContext'
import { modeContext } from '../contexts/ModeContext'
import {HomeCardsContainer, HomeCardsInnerContainer} from './HomeCardsStyle'
const HomeCards = () => {
    const {isLight} = useContext(modeContext)
    const {countries} = useContext(CountriesContext)
    let fetchedCountries = countries.fetchedCountries
    let error = countries.error
    let loading = countries.loading
    return (
        <>
        {
            loading? "loading..." :
            error? error :
            <HomeCardsContainer islight={isLight}>
                <div className="total-result">
                    Total Results: {fetchedCountries.length} <span>Countries</span>
                </div>
                <HomeCardsInnerContainer>
                    {
                        fetchedCountries.map((item, index)=>
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
