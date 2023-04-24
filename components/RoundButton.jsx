import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const RoundButton = (props) => {

    const plusImage = require('../assets/add.png');

    const isPlus = props.plusButton;
    const backgroundColor = isPlus ? 'green' : 'red';
    const transform = isPlus ? [{rotate: '0deg'}] : [{rotate: '45deg'}];
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor}]}>
        <Image source={plusImage} style={[styles.plusImage, {transform}]}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').height > 600 ? 50 : 30,
        height: Dimensions.get('window').height > 600 ? 50 : 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    plusImage: {
        width: Dimensions.get('window').height > 600 ? 30 : 20,
        height: Dimensions.get('window').height > 600 ? 30 : 20,
        tintColor: 'white',
    },
})


export default RoundButton;



