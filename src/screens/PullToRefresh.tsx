import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components'
import { styles } from '../theme/appTheme'
import { useState } from 'react'

export const PullToRefresh = () => {

  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()

  const onRefresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      console.log('done')
      setRefreshing(false)
      setData('Hello World 👑')
    }, 2000);

  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='PullToRefresh' />
        {
          data && <Text style={{textAlign: 'center', fontSize: 18}}>{data}</Text>
        }
      </View>
    </ScrollView>
  )
}