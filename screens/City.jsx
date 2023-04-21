import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native'
import WeatherTime from '../components/WeatherTime'
import WeatherDay from '../components/WeatherDay'

const City = ({route}) => {
  const {data} = route.params
  const description = data.list[0].weather[0].description;
  const actualTempereature = Math.floor(data.list[0].main.temp - 273);

  //Weather day data
 const WeatherDayData = data.list;
 console.log(WeatherDayData);
 const filteredDayData = WeatherDayData.filter(day => {
  return day.dt_txt.includes('18:00:00')
 })
 const WeatherDays = filteredDayData.map((item, index) => (
  <WeatherDay data={item} key={index}/>
 ))


  //Weather time data
  const weatherTimeData = data.list.slice(0,9);
  const WeathersTimes = weatherTimeData.map((item, index) => (
    <WeatherTime data={item} key={index}/>
  ))

  return (
    <View style={styles.container}>

        <View style={styles.frontContainer}>
          <Text style={styles.cityTitle}>{data.city.name}</Text>
          <Text style={styles.weatherType}>{description}</Text>
          <Text style={styles.celsius}>{actualTempereature}°</Text>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollContainer}>
            {WeathersTimes}
        </ScrollView>

        <View style={styles.daysContainer}>
          <ScrollView>
            {WeatherDays}
          </ScrollView>
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
    backgroundColor: '#2596be',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    
    },
  daysContainer:{
    flex: 2,
    backgroundColor: '#08b3c4',
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