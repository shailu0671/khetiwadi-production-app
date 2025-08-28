// src/navigation/MandiNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MandiListScreen from '../screens/Mandi/MandiListScreen';
import MandiDetailScreen from '../screens/Mandi/MandiDetailScreen';

const Stack = createStackNavigator();

export default function MandiNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mandi" component={MandiListScreen} options={{ title: 'All Mandis' }} />
            <Stack.Screen name="Mandi Detail" component={MandiDetailScreen} options={{ title: 'Mandi Details' }} />
        </Stack.Navigator>
    );
}
