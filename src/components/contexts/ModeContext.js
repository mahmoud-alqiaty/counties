import React, { createContext, useState } from 'react'

export const modeContext = createContext()

const ModeContextProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true)
    const toggleMode = ()=>{
        setIsLight(!isLight)
    }
    return (
        <modeContext.Provider value={{isLight, toggleMode}}>
            {children}
        </modeContext.Provider >
    )
}

export default ModeContextProvider
