import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const WeatherCard = (props) => {

  const navigation = props.navigation;
  const cityName = props.title;
  console.log('from weather card', props.data);

 const goToCity = () => {
  navigation.navigate('City', { 
    cityName: cityName,
    data: props.data,
   });
}
  return (
    <TouchableOpacity onPress={goToCity} style={styles.card}>
        <Text style={styles.title}>{props.data.city.name}</Text>
    </TouchableOpacity>
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
