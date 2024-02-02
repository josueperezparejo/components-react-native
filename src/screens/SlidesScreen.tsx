import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageSourcePropType, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

    const navigation = useNavigation()

    const [activeIndex, setActiveIndex] = useState(0)

    const renderItem = (item: Slide) => {
        return (
            <View style={styles.containerImage}>
                <Image source={item.img} style={{ width: 350, height: 400, resizeMode: 'center' }} />
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 50 }}>
            <Carousel
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'blue'
                    }} />

                {activeIndex >= 2 &&
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'blue',
                            width: 150,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} activeOpacity={0.7}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Home</Text>
                        <Icon name='chevron-right' size={35} color={'white'} />

                    </TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        width: 'auto',
        borderRadius: 8,
        padding: 40,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subTitle: {
        fontSize: 16,
        backgroundColor: 'red'
    }
})