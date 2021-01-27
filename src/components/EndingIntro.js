import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

export default class EndingIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ending: '',
    };

    this.directToEnding = this.directToEnding.bind(this);
  }

  handleEnding() {
    const like = this.props.history.location.state.cat.like;
    const health = this.props.history.location.state.cat.health;
    const fun = this.props.history.location.state.cat.fun;
    const addict = this.props.history.location.state.cat.addict;

    if (like >= 5 && health >= 3 && fun >= 3) {
      this.directToEnding('happy');
    } else if (health < 0) {
      this.directToEnding('died');
    } else if (like >= 3 && fun <= 3) {
      this.directToEnding('cheat');
    } else if (like < 3) {
      this.directToEnding('kidnapped');
    } else if (addict >= 3) {
      this.directToEnding('druggy');
    } else {
      this.directToEnding('transform');
    }
  }

  directToEnding(ending) {
    this.setState({ending}, () => {
      this.props.history.push('/ending', this.state.ending);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>It's time...</Text>
        <Text style={styles.titleText}>
          Are you and your cat Nyanmates? Or....something else?
        </Text>
        <Button
          style={styles.btnStyle}
          rounded
          warning
          onPress={() => this.handleEnding()}>
          <Text>I'm Ready to accept my destiny</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  },
});
