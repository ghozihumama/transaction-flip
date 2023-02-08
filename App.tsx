import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionListView} from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionListView">
        <Stack.Screen
          name="TransactionListView"
          component={TransactionListView}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            orientation: 'portrait',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
