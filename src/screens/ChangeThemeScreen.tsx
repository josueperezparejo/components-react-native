import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components'
import { styles } from '../theme/appTheme'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkTheme, setLightTheme } from '../store/slices/ThemeSlice'
import { RootState } from '../store/store'

export const ChangeThemeScreen = () => {

    const dispatch = useDispatch()
    const theme = useSelector((state:RootState) => state.theme)

    const swicthTheme = () => {
        if (theme.currentTheme == 'light') {
            dispatch(setDarkTheme())
        } else {
            dispatch(setLightTheme())
        }
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Themes' />

            <TouchableOpacity
                onPress={() => swicthTheme()}
                style={{
                    width: 150,
                    height: 50,
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    borderRadius: 20,
                }}
                activeOpacity={0.7}>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}