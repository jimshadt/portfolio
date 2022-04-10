import React, { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

// import { themeData } from '../data/themeData'
import { 
    purpleThemeLight, purpleThemeDark
} from '../theme/theme'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(purpleThemeLight)
    const { checked } = useSelector(({ theme }) => ({
        checked:theme,
    }));

    useEffect(() => {
        setTheme(checked===true?purpleThemeDark:purpleThemeLight)
    }, [checked]);
    
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider