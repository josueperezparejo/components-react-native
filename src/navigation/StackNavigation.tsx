import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import {
    HomeScreen,
    AnimationScreen01,
    AnimationScreen02,
    SwitchScreen,
    AlertScreen,
    TextInputsScreen,
    PullToRefresh,
    SectionListScreen,
    ModalScreen,
    InfiniteScrollScreen01,
    InfiniteScrollScreen02
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
            <Stack.Screen name="TextInputsScreen" component={TextInputsScreen} />
            <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
            <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen01" component={InfiniteScrollScreen01} />
            <Stack.Screen name="InfiniteScrollScreen02" component={InfiniteScrollScreen02} />
        </Stack.Navigator>
    )
}