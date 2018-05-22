import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Text } from 'native-base';
import { endings } from '../Data';

export default class EndingIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ending: '',
    };
  }
  

  handleEnding() {
    const like = this.props.history.location.state.cat.like;
    const hate = this.props.history.location.state.cat.hate;
    const health = this.props.history.location.state.cat.health;
    const fun = this.props.history.location.state.cat.fun;
    const addict = this.props.history.location.state.cat.addict;

    if (like >= 5 && hate <= 0 && health >= 3 && fun >= 3) {
      this.setState({ ending: 'happy' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    } else if (health < 0) {
      this.setState({ ending: 'died' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    } else if (like >= 3 && hate > like && fun < 0) {
      this.setState({ ending: 'cheat' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    } else if (like < 3) {
      this.setState({ ending: 'kidnapped' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    } else if (addict >= 3) {
      this.setState({ ending: 'druggy' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    } else {
      this.setState({ ending: 'transform' }, () => {
        this.props.history.push('/ending', this.state.ending);
      });
    }    
  }

  render() {
    return (
    <View style={styles.container}>      
        <Text style={styles.titleText}>It's time...</Text>
        <Text style={styles.titleText}>Are you and your cat Nyanmates? Or....something else?</Text>
        <Button style={styles.btnStyle} rounded warning onPress={() => this.handleEnding()}>
          <Text>I'm Ready to accept my destiny</Text>
        </ Button> 
    </View>
    );
  }
}

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

