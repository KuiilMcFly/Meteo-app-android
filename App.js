import React from 'react';
import { View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import City from './screens/City';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: 'orange'
          }}}
          initialRouteName='Home'>
        <Stack.Screen options={{header: () => null}} name="Home" component={Home} />
        <Stack.Screen options={({route}) => ({title: route.params.cityName})} name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;