import { Theme } from '@react-navigation/native'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

const initialState: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.7',
    dark: false,
    colors: {
        primary: 'red',
        background: 'white',
        card: 'yellow',
        text: 'black',
        border: 'black',
        notification: 'blue',
    }
}

const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(0,0,0,0.7',
    dark: true,
    colors: {
        primary: 'purple',
        background: 'black',
        card: 'yellow',
        text: 'white',
        border: 'gray',
        notification: 'blue',
    }
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLightTheme: (state, action?: PayloadAction) => {
            return {...initialState}
        },
        setDarkTheme: (state, action?: PayloadAction) => {
            return {...darkTheme}
        }
    }
})

// Action creators are generated for each case reducer function
export const { setLightTheme, setDarkTheme } = themeSlice.actions

export default themeSlice.reducer