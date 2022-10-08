import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Advertising } from '../screens/Advertising';
import { Home } from '../screens/Home';
import { OpenGift } from '../screens/OpenGift';
import { GameProvider } from '../context/storage';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <GameProvider>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="OpenGift" component={OpenGift} />
                    <Stack.Screen name="Advertising" component={Advertising} />
                </Stack.Navigator>
            </GameProvider>
        </NavigationContainer>
    );
}