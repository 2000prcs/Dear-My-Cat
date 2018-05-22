import React, { Component } from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  TextInput, 
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView 
} from 'react-native';
import { Button, Text } from 'native-base';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <SafeAreaView >
        <ScrollView>
          <StatusBar barStyle='light-content' />
            <KeyboardAvoidingView behavior='padding' styles={styles.container}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
                <View>
                  <Text style={styles.titleText}>Dear My Cat</Text> 
                  <View style={styles.infoContainer}>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Enter your name'
                      placeholderTextColor='black'
                      // keyboardType='email-address'
                      // returnKeyType='next'
                      returnKeyType='go'
                      autoCorrect={false}
                      // onSubmitEditing={() => this.refs.txtPassword.focus()}
                      onChangeText={(username) => this.setState({ username })}
                    />
                    {/* <TextInput 
                      style={styles.input} 
                      placeholder='Enter password'
                      placeholderTextColor='black'
                      returnKeyType='go'
                      secureTextEntry
                      autoCorrect={false}
                      ref={'txtPassword'}
                    /> */}
                   <Button style={{ alignSelf: 'center' }} rounded warning onPress={() => this.props.history.push('/question', this.state.username)}>
                      <Text style={styles.buttonText}>I'm Ready!</Text>
                    </Button>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'salmon',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  infoContainer: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});

