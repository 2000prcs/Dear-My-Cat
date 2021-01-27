import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Link} from 'react-router-native';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Text,
  Icon,
  Body,
  Title,
  Right,
  Card,
  CardItem,
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {endings} from '../Data';

export default class Ending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endingTitle: '',
      endingImg: '',
      endingComment: '',
    };
  }

  componentWillMount() {
    const endingCondition = this.props.history.location.state;
    if (endings[endingCondition]) {
      this.setState({
        endingTitle: endings[endingCondition].title,
        endingImg: endings[endingCondition].url,
        endingComment: endings[endingCondition].comment,
      });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        {console.log(this.props.history.location.state)}
        <Header>
          <Left>
            <Button hasText transparent>
              <Icon name="home" />
              <Link to="/">
                <Text>Restart</Text>
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Ending</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <ImageBackground
              resizeMode="cover"
              style={{flex: 1}}
              ref="img"
              source={this.state.endingImg}>
              <Row style={{backgroundColor: 'transparent', height: 500}} />
            </ImageBackground>
            <Row style={{backgroundColor: 'transparent', height: 200}}>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.titleText}>
                      {this.state.endingTitle}
                    </Text>
                    <Text style={styles.textStyle}>
                      {this.state.endingComment}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  titleText: {
    color: 'salmon',
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    fontSize: 20,
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Avenir Next',
    fontSize: 20,
  },
});
