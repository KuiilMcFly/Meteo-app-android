import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import City from './screens/City';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Profile from './screens/Profile';
import {Ionicons} from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: 'orange'
          }}}
          initialRouteName='Home'>
        <Stack.Screen options={{header: () => null}} name="Home" component={TabNavigation} />
        <Stack.Screen options={({route}) => ({title: route.params.data.city.name})} name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if(route.name === 'Home') {
            iconName = 'md-home'
          } else if (route.name === 'Profile') {
            iconName = 'apps-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        }
        })}
        tabBarOptions ={{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
  )
}

export default App;