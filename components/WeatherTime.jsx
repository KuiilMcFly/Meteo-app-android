import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import WeatherIcon from './WeatherIcon'

const WeatherTime = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.time}>Data</Text>
        <WeatherIcon code={'01n'}/>
        <Text style={styles.temperature}>36</Text>

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
