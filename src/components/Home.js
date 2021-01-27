import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

const Home = ({history}) => (
  <View>
    <Text style={styles.titleText}>Dear My Cat</Text>
    <Button
      style={styles.btnStyle}
      rounded
      warning
      onPress={() => history.push('/login')}>
      <Text>Game Start</Text>
    </Button>
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
  },
});

export default Home;
