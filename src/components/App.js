import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import { 
  NativeRouter, 
  Switch, 
  Router, 
  Route, 
  Link 
} from 'react-router-native';
import { Button, Text } from 'native-base';
import Type from '../components/Type';
import Login from '../components/Login';

type Props = {};
export default class App extends Component<Props> {
  // onPressLearnMore() {
  //   Alert.alert('Nyan!');
  // }

  render() {
    return (
        <NativeRouter>
            <ImageBackground
              style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              source={require('../images/intro.jpg')}
            >
            <View>
              <Text style={styles.titleText}>Dear My Cat</Text> 
              <Switch>
                {/* <Button style={styles.btnStyle} rounded warning>
                  <Text>Game Start</Text>
                </Button> */}
                <Route path="/type" component={Type} />
                <Route exact path="/" component={Login} />
              </Switch>
            </View>
          </ImageBackground>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'salmon',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: 20,
  }
});
