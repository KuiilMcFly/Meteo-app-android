import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const WeatherTime = (props) => {
  return (
    <View style={styles.container}>
        <Text>Data</Text>
        <Text>Icona</Text>
        <Text>Weather</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        
    }
})




export default WeatherTime;
