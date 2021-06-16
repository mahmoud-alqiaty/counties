import React, { useContext } from 'react'
import { modeContext } from '../contexts/ModeContext'
import {CardContainer, CardImg, CardInfo} from './CardStyle'

const Card = ({flag, name, population, region, capital, nativeName}) => {
    const {isLight} = useContext(modeContext)
    return (
        <CardContainer to={`/countries/${nativeName}`}>
            <CardImg src={flag} alt={name} />
            <CardInfo isLight={isLight}>
                <h2>{name}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </CardInfo>
        </CardContainer>
    )
}

export default Card
