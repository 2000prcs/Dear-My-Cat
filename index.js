import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  AppRegistry
} from 'react-native';
import { 
  NativeRouter, 
  Switch, 
  Route, 
  Link 
} from 'react-router-native';
import { Button, Text } from 'native-base';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Type from './src/components/Type';


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <NativeRouter>
          <View
            style={{ flex: 1, justifyContent: 'center' }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/type' component={Type} />
              </Switch>
          </View>
        </NativeRouter>
    );
  }
}

// render it to the device
AppRegistry.registerComponent('CatDatingGame', () => App);
