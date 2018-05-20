import React from 'react';
import { View, Text, Button } from 'react-native';
import { 
  NativeRouter, 
  Switch, 
  Router, 
  Route, 
  Link 
} from 'react-router-native';

const Login = ({ history }) => (
  <View>
    <Text>Product 1</Text>
    <Text>Product 2</Text>
    <Link to="/type">
    <Text>text</Text>
    {/* <Button title="change page" onPress={() => history.push("/")} /> */}
    </Link>
  </View>
);

export default Login;
