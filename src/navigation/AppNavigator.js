import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import MandiListScreen from '../screens/Mandi/MandiListScreen';
import MandiDetailScreen from '../screens/Mandi/MandiDetailScreen';
import CropListScreen from '../screens/Crops/CropListScreen';
import CropDetailScreen from '../screens/Crops/CropDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack for Mandi
function MandiStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MandiList" component={MandiListScreen} options={{ title: "Mandis" }} />
            <Stack.Screen name="MandiDetail" component={MandiDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}
function CropStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CropList" component={CropListScreen} options={{ title: "Crops" }} />
            <Stack.Screen name="CropDetail" component={CropDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Mandis" component={MandiStack} options={{ headerShown: false }} />
            <Tab.Screen name="Crops" component={CropStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
