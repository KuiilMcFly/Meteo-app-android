import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import WeatherIcon from './WeatherIcon'

const WeatherDay = (props) => {
  return (
    <View style={styles.container}>
        <Text>Giorno</Text>
        <WeatherIcon code={'11n'}/>
        <View style={{flexDirection: 'row', marginTop: 3,}}>
            <Text>23</Text>
            <Text style={{marginLeft:5,}}>16</Text>
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

