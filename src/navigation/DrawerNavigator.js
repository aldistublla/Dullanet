import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ loggedInUser }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerActiveTintColor: 'pink' }}
    >
      <Drawer.Screen name="HomeTabs">
        {(props) => <BottomTabNavigator {...props} loggedInUser={loggedInUser} />}
      </Drawer.Screen>

      <Drawer.Screen name="Profile">
        {(props) => <ProfileScreen {...props} loggedInUser={loggedInUser} />}
      </Drawer.Screen>

      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}
