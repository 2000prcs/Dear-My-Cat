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
import Home from './src/components/Home';
import Login from './src/components/Login';
import Question from './src/components/Question';
import Type from './src/components/Type';
import Cat from './src/components/Cat';


export default class App extends Component {

  render() {
    return (
        <NativeRouter>
          <ImageBackground
            style={{
              // position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('./src/images/intro.jpg')}
          >
          <View
            style={{ flex: 1, justifyContent: 'center' }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/question' component={Question} />
                <Route exact path='/type' component={Type} />
                <Route exact path='/cat' component={Cat} />
              </Switch>
          </View>
          </ImageBackground>

        </NativeRouter>
    );
  }
}

AppRegistry.registerComponent('CatDatingGame', () => App);
