// src/navigation/CropNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CropListScreen from '../screens/Crop/CropListScreen';
import CropDetailScreen from '../screens/Crop/CropDetailScreen';

const Stack = createStackNavigator();

export default function CropNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CropList" component={CropListScreen} options={{ title: 'All Crops' }} />
            <Stack.Screen name="CropDetail" component={CropDetailScreen} options={{ title: 'Crop Details' }} />
        </Stack.Navigator>
    );
}
