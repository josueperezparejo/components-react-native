import { useState } from 'react'
import { Switch } from 'react-native'
import { View } from 'react-native'

interface Props {
    isActive: boolean,
    onChange: (value: boolean) => void
}

export const CustomSwitch = ({ isActive, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isActive)

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        onChange(!isEnabled)
    }

    return (
        <View>
            <Switch
                trackColor={{ false: '#3e3e3e', true: 'blue' }}
                thumbColor={isEnabled ? '#f5dd4b' : 'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}
