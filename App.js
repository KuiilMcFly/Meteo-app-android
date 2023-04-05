import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, Button  } from 'react-native';
import React from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import AddCityModal from './components/AddCityModal';

export default class extends React.Component {
  state = {
    cities: ['Roma', 'Milano', 'Napoli', 'Catania', 'Parigi'],
    visible: false,
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

  render() {
    const cities = this.state.cities.map((city, index) => (
      <WeatherCard key={index} title={city}/>
    ))
    return (
      <View style={styles.container}>
        <AddCityModal visible={this.state.visible} closeModal={this.closeModal}/>
        <Header title={'Meteo App'}/>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}
        </ScrollView>
        <Button title={'+'} onPress={this.openModal}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardContainer: {
    alignItems: 'center',
    flex:1,
    marginTop:20,
  },
});
