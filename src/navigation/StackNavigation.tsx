import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import {
    HomeScreen,
    AnimationScreen01,
    AnimationScreen02,
    SwitchScreen,
    AlertScreen
} from '../screens'


export const StackNavigation = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AnimationScreen01" component={AnimationScreen01} />
            <Stack.Screen name="AnimationScreen02" component={AnimationScreen02} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
        </Stack.Navigator>
    )
}