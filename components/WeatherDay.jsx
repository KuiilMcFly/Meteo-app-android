import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import WeatherIcon from './WeatherIcon'

const WeatherDay = (props) => {
  const dayOfWeek = ['Domenica','Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const indexDay = new Date(props.data.dt_txt).getDay();
  const day = dayOfWeek[indexDay];
  const time = new Date (props.data.dt_txt).getHours();
  const temperature = Math.floor(props.data.main.temp - 273);
  const code = props.data.weather[0].icon;

  return (
    <View style={styles.container}>
        <Text>{day}</Text>
        <WeatherIcon code={code}/>
        <View style={{flexDirection: 'row', marginTop: 3,}}>
            <Text>{temperature}°</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
})

export default WeatherDay;

