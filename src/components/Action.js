import React, { Component } from 'react';
import { ImageBackground, Alert } from 'react-native';
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
  talks,
  talkingImage,
  feedTime,
  feedingImage,
  snackImage,
  playTime,
  playingImage,
  dating,
  places
} from '../Data';
import handleDating from '../Actionhandlers';


export default class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      dateSpot: '',
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
    this.handleDating = this.handleDating.bind(this);
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
    Alert.alert(
      'Choose Food Type!',
      'You can choose either normal catfood or yummy catnip snack!',
      [
        { text: 'Catfood', onPress: () => this.handleCatFood() },
        { text: 'Catnip', onPress: () => this.handleSnack() },
      ],
      { cancelable: false }
    );
  }

  handleCatFood() {
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

  handleSnack() {
    const index = Math.floor(Math.random() * feedTime.length);
    this.setState({ text: feedTime[index] });
    this.state.catData.cat.like++;
    this.state.catData.cat.addict++;
    this.state.catData.feedCount++;
    this.setState({ img: snackImage });
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
      this.state.catData.cat.health++;
      this.state.catData.playCount++;
    }
    const imageIndex = Math.floor(Math.random() * Object.keys(playingImage).length);
    this.setState({ img: playingImage[`play${imageIndex}`] });

    if (this.handleCountSun() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  chooseDatingSpot() {
    Alert.alert(
      'Choose a dating location',
      'Where do you wanna go with your cat?',
      [
        { text: 'Lake',
onPress: () => this.setState({ dateSpot: 'lake' }, () => {
          this.handleDating();
        }) },
        { text: 'Animal Park',
onPress: () => this.setState({ dateSpot: 'animalPark' }, () => {
          this.handleDating();
        }) },
        { text: 'Cat Cafe',
onPress: () => this.setState({ dateSpot: 'catCafe' }, () => {
          this.handleDating();
        }) },
        { text: 'Forest',
onPress: () => this.setState({ dateSpot: 'forest' }, () => {
          this.handleDating();
        }) },
        { text: 'Karaoke',
onPress: () => this.setState({ dateSpot: 'karaoke' }, () => {
          this.handleDating();
        }) },
      ],
      { cancelable: false }
    );
  }
  
  
  handleDating() {    
    console.log(this.state.dateSpot);    
    if (places[this.state.dateSpot]) {
      this.setState({ img: places[this.state.dateSpot].url });
    }
    
    const index = Math.floor(Math.random() * places[this.state.dateSpot].talks.length);

    switch (this.state.dateSpot) {
      case 'lake':
        this.setState({ text: places[this.state.dateSpot].talks[index] });
        this.state.catData.cat.like++;
        this.state.catData.dateCount++;
        break;
      case 'animalPark':
        this.setState({ text: places[this.state.dateSpot].talks[index] });
        this.state.catData.cat.fun++;
        this.state.catData.dateCount++;
        break;
      case 'catCafe':
        this.setState({ text: places[this.state.dateSpot].talks[index] });
        this.state.catData.cat.addict++;
        this.state.catData.dateCount++;
        break;
      case 'forest':
        this.setState({ text: places[this.state.dateSpot].talks[index] });
        this.state.catData.cat.health++;
        this.state.catData.dateCount++;
        break;
      case 'karaoke':
        this.setState({ text: places[this.state.dateSpot].talks[index] });
        this.state.catData.cat.like++;
        this.state.catData.cat.fun++;
        this.state.catData.dateCount++;
        break;
      default:
    }

    if (this.handleCountSun() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  render() {
    console.log(this.props.history.location.state);
    const status = {
      like: this.state.catData.cat.like,
      hate: this.state.catData.cat.hate,
      fun: this.state.catData.cat.fun,
      health: this.state.catData.cat.health,
      addict: this.state.catData.cat.addict,
      leftTurn: 10 - this.handleCountSun() 
    };

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
              warning
              onPress={() =>
                Toast.show({
                  text: 'Do you think your cat is happy?',
                  buttonText: 'I think so',
                  type: 'warning'
                })}
            >
              <Text style={{ alignSelf: 'center' }}>Like: {status.like}  Hate: {status.hate}  Fun: {status.fun}  Health: {status.health}  Addict: {status.addict} </Text> 
            </Button>
            <Button 
              style={{ alignSelf: 'stretch' }}
              danger
              onPress={() =>
                Toast.show({
                  text: 'You are so close to see your ending! Keep going!',
                  buttonText: 'Yay',
                  type: 'danger'
                })}
            >
              <Text style={{ alignSelf: 'center' }}>{status.leftTurn} Turns Left Until Ending</Text>        
            </Button>
            <ImageBackground 
              resizeMode='cover' style={{ flex: 1 }} 
              ref='img'
              source={this.state.img}
            >
            <Row style={{ backgroundColor: 'transparent', height: 400 }} />
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
            <Button vertical onPress={() => this.chooseDatingSpot()}>
              <Icon name="ios-cafe" />
              <Text>Date</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
