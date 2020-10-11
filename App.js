import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from './app/screens/HomeScreen';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// ! =========================== REACT NATIVE SCREEN OPTIONS ====================================
// * FOR SCREEN ANIMATION CHANGES
/*
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 500 } },
          close: { animation: 'timing', config: { duration: 500 } },
        },
        cardStyleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        }, 
        
*/
