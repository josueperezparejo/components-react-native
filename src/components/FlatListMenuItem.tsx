import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/interfaces'
import { Icon } from 'react-native-elements'
import { useNavigation, useTheme } from '@react-navigation/native'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const theme = useSelector((state:RootState) => state.theme)

    const { icon, name } = menuItem
    const navigation = useNavigation<any>()
    const { colors } = useTheme()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)} activeOpacity={0.5}>
            <View style={styles.container}>
                <Icon name={icon} size={25} color={theme.colors.primary} />
                <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>
                <View style={{ flex: 1 }} />
                <Icon style={{}} name='chevron-right' size={25} color={theme.colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 5,
        fontSize: 18
    }
})