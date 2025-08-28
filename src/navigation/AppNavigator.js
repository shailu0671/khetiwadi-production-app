import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import MandiListScreen from '../screens/Mandi/MandiListScreen';
import MandiDetailScreen from '../screens/Mandi/MandiDetailScreen';
import CropListScreen from '../screens/Crops/CropListScreen';
import CropDetailScreen from '../screens/Crops/CropDetailScreen';
import TipsScreen from '../screens/Tips/TipsListScreen';
import TipsDetailScreen from '../screens/Tips/TipsDetailScreen';
import BlogScreen from '../screens/Blog/BlogListScreen';
import BlogDetailScreen from '../screens/Blog/BlogDetailScreen';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { About, Disclaimer, Help, Privacy, Terms } from '../screens/Help';
import CustomHeader from '../components/CustomHeader';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const navOptionHandler = () => ({
    headerShown: false,
});


// Stack for Mandi
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
            <Stack.Screen name="Help" component={Help} options={navOptionHandler} />
            <Stack.Screen name="About" component={About} options={navOptionHandler} />
            <Stack.Screen name="Terms" component={Terms} options={navOptionHandler} />
            <Stack.Screen name="Disclaimer" component={Disclaimer} options={navOptionHandler} />
            <Stack.Screen name="Privacy" component={Privacy} options={navOptionHandler} />
            <Stack.Screen name="Mandi Detail" component={MandiDetailScreen} 
            options={{ title: "Detail" }}
//             options={{
//     header: () => <CustomHeader title="Mandi Detail" />,
//   }}
             />
        </Stack.Navigator>
    );
}

function MandiStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mandis" component={MandiListScreen} options={{ title: "Mandis" }} />
            <Stack.Screen name="Mandi Detail" component={MandiDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}

function CropStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Crops" component={CropListScreen} options={{ title: "Crops" }} />
            <Stack.Screen name="CropDetail" component={CropDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}

function TipsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tips" component={TipsScreen} options={{ title: "Tips" }} />
            <Stack.Screen name="TipsDetail" component={TipsDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}
function BlogStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Blog" component={BlogScreen} options={{ title: "Blog" }} />
            <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
    );
}

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    // console.log(routeName);

    if (routeName == 'Mandi Detail') {
        return 'none';
    }

    if (routeName == 'CropDetail') {
        return 'none';
    }

    if (routeName == 'TipsDetail') {
        return 'none';
    }

    if (routeName == 'BlogDetail') {
        return 'none';
    }
    if (routeName == 'Mandi_by_state') {
        return 'none';
    }
    if (routeName == 'Blog Detail') {
        return 'none';
    }
    if (routeName == 'Tips Detail') {
        return 'none';
    }
    if (routeName == 'Help') {
        return 'none';
    }
    if (routeName == 'About') {
        return 'none';
    }
    if (routeName == 'Privacy') {
        return 'none';
    }
    if (routeName == 'Terms') {
        return 'none';
    }
    if (routeName == 'Disclaimer') {
        return 'none';
    }

    return 'flex';
};

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                                display: getTabBarVisibility(route),
                            },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';
                    let IconComponent = Ionicons;

                    if (route.name === 'Home') {
                        IconComponent = MaterialIcons;
                        iconName = 'home';
                    } else if (route.name === 'Mandis') {
                        IconComponent = MaterialIcons;
                        iconName = 'storefront';
                    } else if (route.name === 'Crops') {
                        IconComponent = FontAwesome5;
                        iconName = 'seedling';
                    } else if (route.name === 'Tips') {
                        IconComponent = MaterialIcons;
                        iconName = 'article';
                    } else if (route.name === 'Blog') {
                        IconComponent = FontAwesome5;
                        iconName = 'newspaper';
                    }

                    return <IconComponent name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2e7d32',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Mandis" component={MandiStack} />
            <Tab.Screen name="Crops" component={CropStack} />
            <Tab.Screen name="Tips" component={TipsStack} />
            <Tab.Screen name="Blog" component={BlogStack} />
        </Tab.Navigator>
    );
}
