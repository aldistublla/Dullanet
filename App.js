import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <NavigationContainer>
      {loggedInUser ? (
        <DrawerNavigator loggedInUser={loggedInUser} />
      ) : (
        <LoginScreen setLoggedInUser={setLoggedInUser} />
      )}
    </NavigationContainer>
  );
}
