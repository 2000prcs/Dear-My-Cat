import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { 
  Container, 
  Header,
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title, 
  Text, 
  Content, 
  Footer,
  FooterTab,
  Badge,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';
import { Link } from 'react-router-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {   
  Cats,
  Images,
  talks,
  talkingImage,
  feedTime,
  feedingImage,
  snackImage,
  playTime,
  playingImage,
  dating,
  places
} from '../Helper';


export default class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require('../images/sleeping_beauty.gif'),
      text: 'Nyan! Stop staring at me and do something! I\'m hungry and bored :(',
      cat: new Cats()
    };
  }

  handleTalking() {
    const index = Math.floor(Math.random() * talks.length);
    this.setState({ text: talks[index] });
    const imageIndex = Math.floor(Math.random() * Object.keys(talkingImage).length);
    this.setState({ img: talkingImage[`talk${imageIndex}`] });
  }

  handleFeeding() {
    console.log(this.state.cat);
    const index = Math.floor(Math.random() * feedTime.length);
    this.setState({ text: feedTime[index] });
    const imageIndex = Math.floor(Math.random() * Object.keys(feedingImage).length);
    this.setState({ img: feedingImage[`food${imageIndex}`] });
  }

  handlePlaying() {
    const index = Math.floor(Math.random() * playTime.length);
    this.setState({ text: playTime[index] });
    // const imageIndex = Math.floor(Math.random() * Object.keys(talkingImage).length);
    this.setState({ img: playingImage });  
  }

  handleDating() {    
    const index = Math.floor(Math.random() * dating.length);
    this.setState({ text: dating[index] });
    // const imageIndex = Math.floor(Math.random() * Object.keys(talkingImage).length);
    // this.setState({ img: talkingImage[`talk${imageIndex}`] });  
  }


  render() {
    console.log(this.props.history.location.state);

    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header>
          <Left>
            <Button hasText transparent>
            <Icon name='home' />
              <Link to='/'>
                  <Text>Home</Text>
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Dear My Cat</Title>
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
              source={this.state.img}
            >
            <Row style={{ backgroundColor: 'transparent', height: 450 }} />
            </ImageBackground>
            <Row style={{ backgroundColor: 'transparent', height: 200 }}>
              <Col style={{ width: 120 }}>
                <Thumbnail style={{ width: 150, height: 200 }} source={this.props.history.location.state.image} />
              </Col>
              <Col >
              <Card>
              <CardItem>
                <Body>
                  <Text ref='text'>
                    {this.state.text}
                  </Text>
                </Body>
              </CardItem>
              </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical onPress={() => this.handleTalking()}>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-chatbubbles" />
              <Text>Talk</Text>
            </Button>
            <Button vertical onPress={() => this.handleFeeding()}>
              <Icon name="restaurant" />
              <Text>Feed</Text>
            </Button>
            <Button active badge vertical onPress={() => this.handlePlaying()}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="ios-paw" />
              <Text>Play</Text>
            </Button>
            <Button vertical onPress={() => this.handleDating()}>
              <Icon name="ios-cafe" />
              <Text>Date</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
