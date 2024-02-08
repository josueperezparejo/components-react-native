import { FlatList, View } from "react-native"
import { FlatListMenuItem, HeaderTitle } from "../components"
import { menuItems } from "../data/menuItems"
import { styles } from "../theme/appTheme"

export const HomeScreen = () => {

  const itemSeparator = () => {
    return <View style={{borderBottomWidth: 1, opacity: 1.4, marginVertical: 5}} />
  }

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu de Opciones" />}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  )
}