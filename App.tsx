// In App.js in a new project

import * as React from 'react';
import {TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {HomeScreen} from './src/Screens/HomeScreen';
import {DetailsScreen} from './src/Screens/DetailsScreen';
import {DashboardScreen} from './src/Screens/DashboardScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  VerifyScreen: {mobileNo: string};
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="LoginScreen"
          component={HomeScreen}
          options={{header: () => <></>}}
        />
        <Stack.Screen
          name="VerifyScreen"
          component={DetailsScreen}
          options={{
            header: () => <></>,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{header: () => <></>}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
