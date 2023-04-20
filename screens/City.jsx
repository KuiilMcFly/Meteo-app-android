import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native'
import WeatherTime from '../components/WeatherTime'
import WeatherDay from '../components/WeatherDay'

const City = ({route}) => {
  const {data} = route.params
  console.log('from city.js', data);
  const weatherTimeData = data.list.slice(0,9);
  console.log('slice Data', weatherTimeData);
  
  return (
    <View style={styles.container}>

        <View style={styles.frontContainer}>
          <Text style={styles.cityTitle}>{data.city.name}</Text>
          <Text style={styles.weatherType}>Soleggiato</Text>
          <Text style={styles.celsius}>21°</Text>
        </View>

        <ScrollView horizontal={true} style={styles.scrollContainer}>
            <WeatherTime/>
            <WeatherTime/>
            <WeatherTime/>
            <WeatherTime/>
            <WeatherTime/>
            <WeatherTime/>
            <WeatherTime/>
        </ScrollView>

        <View style={styles.daysContainer}>
            <WeatherDay/>
            <WeatherDay/>
            <WeatherDay/>
        </View>
        
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontContainer:{
    flex: 3,
    
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer:{
    flex: 1,
    
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    
    },
  daysContainer:{
    flex: 2,
    
    width: '100%',
  },
  cityTitle: {
    fontSize: 30,
  },
  weatherType: {

  },
  celsius: {
    fontSize:50,
  },
})

export default City;