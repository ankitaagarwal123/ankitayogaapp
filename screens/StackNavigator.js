import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import Meditation from './Meditation'
import Music from "./Music.js"
import BedTime from "./BedTime"

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Music" component={Music} />
                <Stack.Screen name="Meditation" component={Meditation} />
                                <Stack.Screen name="BedTime" component={BedTime} />

      </Stack.Navigator>
  );
}
export default App;