import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeChat from './component/HomeChat';
import SetName from './component/SetName'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SetName"
          component={SetName}
          options={{ title: 'Set User' }}
        />
        <Stack.Screen
          name="HomeChat"
          component={HomeChat}
          options={{ title: 'Thực tập FPT' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

