import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, Button, FlatList  } from 'react-native';
import React from 'react';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import axios from 'axios';
import {useState, useCallback} from 'react'

const APIKEY = '395eefba453ff13b9722f7fd5f986e70';

const App = (props) => {

  const [cities, setCities] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  
 
  const addCity = useCallback(async (city) => {
    if (isFetching) return;
    setIsFetching(true);
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&lang=it`
      );
      const data = response.data;
      await setCities((prevCities) => [...prevCities, data]);
      await closeModal();
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  }, []);

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  navigateToCity = (city) => {
    props.navigation.navigate('City', {cityName: city})
  }

  
    let newCities = <Text>Sto caricando</Text>
    if(cities){
      newCities = cities.map((city, index) => (
        <WeatherCard 
        navigation={props.navigation} 
        key={index} 
        title={city.name} 
        onPress={() => navigateToCity(city)}
        data={city}
        />
      ))
    }
    return (
      <View style={styles.container}>
        <AddCityModal addCity={addCity} visible={visible} closeModal={closeModal}/>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {newCities}
        </ScrollView>
        <View style={styles.roundButtonBox}>
          <RoundButton plusButton={true} onPress={openModal}/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  roundButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    alignItems: 'center',
    flex:1,
    marginTop:20,
  },
});


export default App;
