import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

//icons
import { Home, SearchFilled, Search, Reel, HomeFilled, Shop, ReelFilled, ShopFilled } from './icons';



//screens
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ProfileScreen from './screens/Profile';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';


function Screens() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInActiveTintColor: '#262626'
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}

                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Home size={25} fill={color} />

                        return <HomeFilled size={25} fill={color} />
                    },

                }} />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <SearchFilled size={25} fill={color} />

                        return <Search size={25} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Reel"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ReelFilled size={25} fill={color} />

                        return <Reel size={25} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ShopFilled size={25} fill={color} />

                        return <Shop size={25} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={{ uri: 'https://pbs.twimg.com/profile_images/1756083935853858816/rjyBrrqk_400x400.jpg' }}
                            style={[
                                styles.avatar, {
                                    borderColor: focused ? '#000': 'transparent'
                                }
                             ]} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default Screens

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderWidth:1,
        borderColor:'transparent',
        borderRadius: 21,
    }
})