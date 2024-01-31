import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Titulo', 'Este es el mensaje de la alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ], {
      cancelable: true,
      onDismiss: () => console.log('No paso nada')
    });

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <HeaderTitle title='Alert' />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={createTwoButtonAlert} style={{backgroundColor: 'blue', borderRadius: 4, padding: 8}}>
          <Text style={{color: 'white'}}>Mostrar Alerta</Text>
        </TouchableOpacity>
          
      </View>
    </View>
  )
}