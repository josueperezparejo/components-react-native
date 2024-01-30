import { FlatList, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { FlatListMenuItem } from "../components"
import { menuItems } from "../data/menuItems"
import { styles } from "../theme/appTheme"

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets()

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Menu de Opciones</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return <View style={{borderBottomWidth: 1, opacity: 1.4, marginVertical: 5}} />
  }

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  )
}