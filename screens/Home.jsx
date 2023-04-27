import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, Button, FlatList  } from 'react-native';
import React from 'react';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import axios from 'axios';

const APIKEY = '395eefba453ff13b9722f7fd5f986e70';

export default class extends React.Component {

  state = {
    cities: [],
    visible: false,
  }

 
  addCity = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&lang=it`).then(data => {
      this.setState(prevState => {
        return {
          cities: prevState.cities.concat(data.data)
        }
      }, this.closeModal());
    }).catch(error => {
      console.log(error)
    })  
  }

  openModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
    })
  }
  navigateToCity = (city) => {
    this.props.navigation.navigate('City', {cityName: city})
  }

  render() {
    let cities = <Text>Sto caricando</Text>
    if(this.state.cities){
      console.log(this.state.cities)
      cities = this.state.cities.map((city, index) => (
        <WeatherCard 
        navigation={this.props.navigation} 
        key={index} 
        title={city.name} 
        onPress={() => this.navigateToCity(city)}
        data={city}
        />
      ))
    }
    return (
      <View style={styles.container}>
        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.closeModal}/>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}
        </ScrollView>
        <View style={styles.roundButtonBox}>
          <RoundButton plusButton={true} onPress={this.openModal}/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
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
