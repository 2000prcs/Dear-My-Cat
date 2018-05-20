import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Text } from 'native-base';

const Home = ({ history }) => (
  <View>
      <ImageBackground
        style={{
          // position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../images/intro.jpg')}
      >
      <Text style={styles.titleText}>Dear My Cat</Text> 
      <Button style={styles.btnStyle} rounded warning onPress={() => history.push('/login')}>
      {/* <Link to='/login'> */}
        <Text>Game Start</Text>
      {/* </Link> */}
      </ Button>
      </ImageBackground>

  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'salmon',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: 20,
  }
});

export default Home;
