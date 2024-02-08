import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from '../navigation/StackNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const ThemeProvider = () => {

    const theme = useSelector((state:RootState) => state.theme)

    return (
        <NavigationContainer theme={theme}>
            <StackNavigation />
        </NavigationContainer>
    )
}