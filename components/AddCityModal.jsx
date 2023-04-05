import React from 'react'
import {Modal, View, Text, StyleSheet, Button} from 'react-native';


const AddCityModal = (props) => {
  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.modalContainer}>
            <Text>sono un modal</Text>
            <Button title={'Chiudi Modale'} onPress={props.closeModal}/>
        </View>
    </Modal>
  )
}



const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    
  },
})




export default AddCityModal;
