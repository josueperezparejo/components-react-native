import { View, SectionList, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
]

export const SectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex: 1}}>
            

            <SectionList
              sections={casas}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <Text>{item}</Text>}
              renderSectionHeader={({section}) => <HeaderTitle title={section.casa} />}
              stickySectionHeadersEnabled={false}
              ListHeaderComponent={() => <HeaderTitle title='SectionList' />}
            />  
        </View>
    )
}