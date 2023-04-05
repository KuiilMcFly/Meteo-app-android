import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const WeatherCard = (props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        width: '80%',
        backgroundColor: 'gray',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        elevation: 5, 
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
})

export default WeatherCard;
