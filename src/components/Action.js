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
  Thumbnail,
  Toast
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
      showToast: false,
      img: require('../images/sleeping_beauty.gif'),
      text: 'Nyan! Stop staring at me and do something! I\'m hungry and bored :(',
      catData: {
        username: this.props.history.location.state.username,
        catImg: this.props.history.location.state.image,
        catType: this.props.history.location.state.catType,
        cat: new Cats(),
        talkCount: 0,
        feedCount: 0,
        playCount: 0,
        dateCount: 0,
      }
    };

    this.handleCountSun = this.handleCountSun.bind(this);
  }

  // Calculate total turns -> user can see the ending after 10 turns
  handleCountSun() {
    const totalCount = this.state.catData.talkCount + this.state.catData.feedCount + this.state.catData.playCount + this.state.catData.dateCount;
    return totalCount;
  }

  handleTalking() {
    const index = Math.floor(Math.random() * talks.length);
    this.setState({ text: talks[index] });
    if (this.state.catData.talkCount === 5) {
      this.state.catData.cat.like--;
      this.state.catData.cat.hate++;
      this.state.catData.talkCount++;
    } else {
      this.state.catData.cat.like++;
      this.state.catData.talkCount++;
    }
    const imageIndex = Math.floor(Math.random() * Object.keys(talkingImage).length);
    this.setState({ img: talkingImage[`talk${imageIndex}`] });

    if (this.handleCountSun() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  handleFeeding() {
    const index = Math.floor(Math.random() * feedTime.length);
    this.setState({ text: feedTime[index] });
    if (this.state.catData.feedCount === 3) {
      this.state.catData.cat.like++;
      this.state.catData.cat.health--;
      this.state.catData.feedCount++;
    } else if (this.state.catData.feedCount === 5) {
      this.state.catData.cat.health--;
      this.state.catData.feedCount++;
    } else {
      this.state.catData.cat.health++;
      this.state.catData.cat.like++;
      this.state.catData.feedCount++;
    }
    const imageIndex = Math.floor(Math.random() * Object.keys(feedingImage).length);
    this.setState({ img: feedingImage[`food${imageIndex}`] });

    if (this.handleCountSun() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  handlePlaying() {
    const index = Math.floor(Math.random() * playTime.length);
    this.setState({ text: playTime[index] });
    if (this.state.catData.playCount === 5) {
      this.state.catData.cat.like--;
      this.state.catData.cat.hate++;
      this.state.catData.playCount++;
    } else {
      this.state.catData.cat.fun++;
      this.state.catData.cat.like++;
      this.state.catData.cat.hate--;
      this.state.catData.cat.health--;
      this.state.catData.playCount++;
    }
    const imageIndex = Math.floor(Math.random() * Object.keys(playingImage).length);
    this.setState({ img: playingImage[`play${imageIndex}`] });

    if (this.handleCountSun() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  handleDating() {
    console.log(this.state.catData.cat);    
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
            <Button 
              style={{ alignSelf: 'stretch' }}
              danger
              onPress={() =>
                Toast.show({
                  text: "Wrong password!",
                  buttonText: "Okay",
                  type: "danger"
                })}
            >
              <Text>Danger Toast</Text>
            </Button>
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
