import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

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
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    plusImage: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
})


export default RoundButton;



