import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Container, Content, Header, Left, Button, Text, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {   
  endings
} from '../Helper';

export default class Ending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endingTitle: '',
      endingImg: '',
      endingComment: ''
    };
  }

  componentWillMount() {
    const endingCondition = this.props.history.location.state;
    if (endings[endingCondition]) {
      this.setState({
        endingTitle: endings[endingCondition].title,
        endingImg: endings[endingCondition].url,
        endingComment: endings[endingCondition].comment
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
        <Icon name='home' />
          <Link to='/'>
              <Text>Restart</Text>
          </Link>
        </Button>
      </Left>
      <Body>
        <Title>Ending</Title>
      </Body>
      <Right>
      <Button transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
    <Content>
      <Grid>    
        <ImageBackground 
          resizeMode='cover' style={{ flex: 1 }} 
          ref='img'
          source={this.state.endingImg}
        >
          <Row style={{ backgroundColor: 'transparent', height: 450 }} />
        </ImageBackground>
          <Row style={{ backgroundColor: 'transparent', height: 200 }}>
            <Card>
              <CardItem>
                <Body>
                  <Text style={{ fontWeight: 'bold' }}>
                    {this.state.endingTitle}
                  </Text>
                  <Text>
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
