import React from 'react'
import { View, Text, Button } from 'react-native'

const City = (props) => {
  const navigation = props.navigation;
  return (
    <View>
        <Text>Hello from city</Text>
        <Button title={'torna indietro'} onPress={() => navigation.popToTop()}/>
        <Button title={'vai a city'} onPress={() => navigation.push('City')}/>
    </View>
  )
}

export default City;