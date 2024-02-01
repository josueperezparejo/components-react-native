import { Text, View } from 'react-native'
import { HeaderTitle } from '../components'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = (item:number) => {
        return <Text style={styles.textItem}>{item}</Text>
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
            ListHeaderComponent={<HeaderTitle title='Inifite Scroll' />}
            onEndReached={() => {
                console.log("Cargando mas contenido")
                loadMore()
            }}
            onEndReachedThreshold={0.5}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem: {
        height: 200,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
});