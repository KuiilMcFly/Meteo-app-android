import React from 'react'
import {Modal, View, Text, StyleSheet, Button, TextInput} from 'react-native';


class AddCityModal extends React.Component {
  state = {
    text: "",
  }
  handleChangedText = (value) => {
    this.setState({
      text: value
    })
  }
  render(){
    return (
      <Modal visible={this.props.visible} animationType='slide'>
          <View style={styles.modalContainer}>
              <Text style={styles.title}>Città</Text>
            <View style={styles.inputBox}>
              <TextInput style={styles.input} onChangeText={this.handleChangedText} value={this.state.text}/>
              <Button title={'Add'} onPress={this.props.addCity.bind(this, this.state.text)}/>
            </View>
              <Button title={'Chiudi Modale'} onPress={this.props.closeModal}/>
          </View>
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
