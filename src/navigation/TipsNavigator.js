// src/navigation/MandiNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import TipsScreen from '../screens/Tips/TipsListScreen';
import TipsDetailScreen from '../screens/Tips/TipsDetailScreen';

const Stack = createStackNavigator();

export default function MandiNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TipsList" component={TipsScreen} options={{ title: 'All Tips' }} />
            <Stack.Screen name="TipsDetail" component={TipsDetailScreen} options={{ title: 'Tips Details' }} />
        </Stack.Navigator>
    );
}
