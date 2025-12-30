import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ loggedInUser }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff0f5' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'About') iconName = 'information-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} loggedInUser={loggedInUser} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} loggedInUser={loggedInUser} />}
      </Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
