import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import WeatherIcon from './WeatherIcon'

const WeatherTime = (props) => {
  console.log(props.data);
  const temperature = Math.floor(props.data.main.temp - 273);
  const time = new Date (props.data.dt_txt).getHours();
  const code = props.data.weather[0].icon;
  return (
    <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <WeatherIcon code={code}/>
        <Text style={styles.temperature}>{temperature}°</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 22,
    },
    time: {
      fontSize: 12,
    },
    temperature: {
      fontSize: 18,
    },
})




export default WeatherTime;
