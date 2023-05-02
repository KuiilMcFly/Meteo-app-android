import React from 'react'
import {Modal, View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
import RoundButton from './RoundButton';
import { useState } from 'react';

const AddCityModal = (props) => {

  const [text, setText] = useState("");

  const handleChangedText = value => {
    setText(value)
  };

  const addCityHandler = () => {
    if(text.trim() === "") {
      alert('Inserisci qualcosa!')
      return
    }
    props.addCity(text);
    setText("")
    };
  
    return (
      <Modal visible={props.visible} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View style={styles.modalContainer}>
              <Text style={styles.title}>Città</Text>
            <View style={styles.inputBox}>
              <TextInput 
              placeholder='Aggiungi città' 
              style={styles.input} 
              onChangeText={handleChangedText} 
              value={text}
              autoCorrect={false}
              />
              <Button title={'Add'} onPress={addCityHandler}/>
            </View>

              <RoundButton onPress={props.closeModal}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }




const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },

  input:{
    borderBottomWidth: 1,
    width: Dimensions.get('window').width / 2,
  },

  inputBox: {
    flexDirection: 'row',
    marginBottom: 20,
    gap:10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
})




export default AddCityModal;
