// src/navigation/MandiNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import BlogScreen from '../screens/Blog/BlogListScreen';
import BlogDetailScreen from '../screens/Blog/BlogDetailScreen';

const Stack = createStackNavigator();

export default function MandiNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BlogList" component={BlogScreen} options={{ title: 'All Blog' }} />
            <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: 'Blog Details' }} />
        </Stack.Navigator>
    );
}
