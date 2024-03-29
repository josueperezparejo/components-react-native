
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks';
import { HeaderTitle } from '../components';

export const AnimationScreen01 = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation()

  return (
    <View style={{marginHorizontal: 20, flex: 1}}>
      <HeaderTitle title='Animation 01' />

      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.purpleBox,
            opacity,
            transform: [{
              translateY: position
            }],
            marginBottom: 20
          }} />

        <Button title='fadeIn' onPress={() => {
          startMovingPosition(-100)
          fadeIn()
        }} />
        <Button title='fadeOut' onPress={fadeOut} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    borderRadius: 100
  }
});