import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Pokemon } from '../screens/Pokemon';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#fff'
                },
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Pokemon"
                component={Pokemon}
            />
        </Navigator>
    )
}