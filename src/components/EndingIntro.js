import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Text } from 'native-base';

const EndingIntro = ({ history }) => (
  <View style={styles.container}>      
      <Text style={styles.titleText}>It's time...</Text>
      <Text style={styles.titleText}>Your Cat and </Text>
      <Button style={styles.btnStyle} rounded warning onPress={() => history.push('/type', history.location.state)}>
        <Text>I think I Know My Type</Text>
      </ Button> 
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'salmon',
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: 20,
  }
});

export default EndingIntro;