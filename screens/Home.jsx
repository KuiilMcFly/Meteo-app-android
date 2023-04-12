import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, Button  } from 'react-native';
import React from 'react';
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';


export default class extends React.Component {
  state = {
    cities: [],
    visible: false,
  }

  addCity = (city) => {
    this.setState(prevState => {
      return {
        cities: prevState.cities.concat(city)
      }
    }, this.closeModal())
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
        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.closeModal}/>
        <Header title={'Meteo App'}/>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}
        </ScrollView>
        <View style={styles.roundButtonBox}>
            <Button title={'vai a city'} onPress={() => this.props.navigation.navigate('City', 
            {
              cityName: 'Roma',
              value: 'myValue',
              
            })}/>
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
