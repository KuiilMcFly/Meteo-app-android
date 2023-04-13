import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.profileBox}>
        <Text>Profilo dell'utente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    profileBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });





export default Profile;
