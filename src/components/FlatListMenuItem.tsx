import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/interfaces';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { icon, name } = menuItem

    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)} activeOpacity={0.5}>
            <View style={styles.container}>
                <Icon name={icon} size={25} />
                <Text style={styles.itemText}>{name}</Text>
                <View style={{ flex: 1 }} />
                <Icon style={{}} name='chevron-right' size={25} color={'blue'} />
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
});