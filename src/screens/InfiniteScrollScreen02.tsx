import { View } from 'react-native'
import { HeaderTitle } from '../components'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { styles } from '../theme/appTheme'

export const InfiniteScrollScreen02 = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = (item:number) => {
        return (
            <Image source={{uri: `https://picsum.photos/id/${item}/500/400`}} style={{width: '100%', height: 400}} />
        )
    }

    const loadMore = () => {
        const newArray:number[] = []
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }

        setNumbers([...numbers, ...newArray])
    }

  return (
    <View style={{flex: 1}}>
        <FlatList
            data={numbers}
            keyExtractor={(item) => item.toString()}
            renderItem={({item}) => renderItem(item)}
            ListHeaderComponent={() => {
                return (
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Inifite Scroll' />
                    </View>
                )
            }}
            onEndReached={() => {
                console.log("Cargando mas contenido")
                loadMore()
            }}
            onEndReachedThreshold={0.5}
        />
    </View>
  )
}