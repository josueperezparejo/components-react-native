import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native'
import { CustomSwitch, HeaderTitle } from '../components'

interface InitialState {
  isActive: boolean,
  isHungry: boolean,
  isHappy: boolean
}

export const SwitchScreen = () => {

  const [state, setState] = useState<InitialState>({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const { isActive, isHappy, isHungry } = state

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value
    })
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ marginHorizontal: 20, flex: 1 }}>
      <HeaderTitle title='Switch' />

      <View style={styles.container}>
        <HeaderTitle title='Normal Switch' />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <HeaderTitle title='Custom Switch' />

        <View style={styles.switchRow}>
          <Text style={styles.text}>isActive</Text>
          <CustomSwitch isActive={isActive} onChange={(value) => onChange(value, 'isActive')} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.text}>isHungry</Text>
          <CustomSwitch isActive={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.text}>isHappy</Text>
          <CustomSwitch isActive={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
        </View>

        <Text style={styles.text}>
          {JSON.stringify(state, null, 5)}
        </Text>
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
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25
  }
});