import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const WeatherIcon = (props) => {
    const url = `https://openweathermap.org/img/wn/${props.code}@2x.png`
  return <Image source={{uri: url}} style={{width: 50, height: 50,}} />
}


export default WeatherIcon
