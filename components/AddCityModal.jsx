import React from 'react'
import {Modal, View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import RoundButton from './RoundButton';

class AddCityModal extends React.Component {
  state = {
    text: "",
  }

  handleChangedText = (value) => {
    this.setState({
      text: value
    })
  }

  addCityHandler = () => {
    if(this.state.text.trim() === "") {
      alert('Inserisci qualcosa!')
      return
    }
    this.props.addCity(this.state.text)
    this.setState({
      text: ""
    })
  }
  render(){
    return (
      <Modal visible={this.props.visible} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View style={styles.modalContainer}>
              <Text style={styles.title}>Città</Text>
            <View style={styles.inputBox}>
              <TextInput 
              placeholder='Aggiungi città' 
              style={styles.input} 
              onChangeText={this.handleChangedText} 
              value={this.state.text}
              autoCorrect={false}
              />
              <Button title={'Add'} onPress={this.addCityHandler}/>
            </View>

              <RoundButton onPress={this.props.closeModal}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}



const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },

  input:{
    borderBottomWidth: 1,
    width: '50%'
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
