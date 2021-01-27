import React, {Component} from 'react';
import {ImageBackground, Alert, StyleSheet} from 'react-native';
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
  Toast,
} from 'native-base';
import {Link} from 'react-router-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Cats,
  talks,
  talkingImage,
  feedTime,
  feedingImage,
  snackImage,
  playTime,
  playingImage,
  places,
} from '../Data';

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      dateSpot: '',
      img: require('../images/sleeping_beauty.gif'),
      text:
        "Nyan! Stop staring at me and do something! I'm hungry and bored :(",
      catData: {
        username: this.props.history.location.state.username,
        catImg: this.props.history.location.state.image,
        catType: this.props.history.location.state.catType,
        cat: new Cats(),
        talkCount: 0,
        feedCount: 0,
        playCount: 0,
        dateCount: 0,
      },
    };

    this.handleCountSum = this.handleCountSum.bind(this);
    this.handleDating = this.handleDating.bind(this);
  }

  // Calculate total turns -> user can see the ending after 10 turns
  handleCountSum() {
    const totalCount =
      this.state.catData.talkCount +
      this.state.catData.feedCount +
      this.state.catData.playCount +
      this.state.catData.dateCount;
    return totalCount;
  }

  handleAction(action) {
    let text;
    let images;

    switch (action) {
      case 'talks':
        text = talks;
        images = talkingImage;
        this.state.catData.cat.like--;
        this.state.catData.talkCount++;
        break;
      case 'food':
        text = feedTime;
        images = feedingImage;
        if (this.state.catData.feedCount === 3) {
          this.state.catData.cat.health--;
        } else {
          this.state.catData.cat.health++;
          this.state.catData.cat.like++;
        }
        this.state.catData.feedCount++;
        break;
      case 'snack':
        text = feedTime;
        images = snackImage;
        this.state.catData.cat.like++;
        this.state.catData.cat.addict++;
        this.state.catData.feedCount++;
        break;
      case 'play':
        text = playTime;
        images = playingImage;
        if (this.state.catData.playCount === 3) {
          this.state.catData.cat.like--;
        } else {
          this.state.catData.cat.fun++;
          this.state.catData.cat.like++;
          this.state.catData.cat.health++;
        }
        this.state.catData.playCount++;
        break;
      default:
        break;
    }

    const index = Math.floor(Math.random() * text.length);
    this.setState({text: text[index]});
    const imageIndex = Math.floor(Math.random() * Object.keys(images).length);
    this.setState({img: images[imageIndex]});

    if (this.handleCountSum() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  handleFeeding() {
    Alert.alert(
      'Choose Food Type!',
      'You can give either normal catfood or yummy catnip snack!',
      [
        {text: 'Catfood', onPress: () => this.handleAction('food')},
        {text: 'Catnip', onPress: () => this.handleAction('snack')},
      ],
      {cancelable: false},
    );
  }

  chooseDatingSpot() {
    Alert.alert(
      'Choose Dating Location!',
      'Where do you want to go with your cat?',
      [
        {
          text: 'Lake',
          onPress: () =>
            this.setState({dateSpot: 'lake'}, () => {
              this.handleDating();
            }),
        },
        {
          text: 'Animal Park',
          onPress: () =>
            this.setState({dateSpot: 'animalPark'}, () => {
              this.handleDating();
            }),
        },
        {
          text: 'Cat Cafe',
          onPress: () =>
            this.setState({dateSpot: 'catCafe'}, () => {
              this.handleDating();
            }),
        },
        {
          text: 'Forest',
          onPress: () =>
            this.setState({dateSpot: 'forest'}, () => {
              this.handleDating();
            }),
        },
        {
          text: 'Karaoke',
          onPress: () =>
            this.setState({dateSpot: 'karaoke'}, () => {
              this.handleDating();
            }),
        },
      ],
      {cancelable: false},
    );
  }

  handleDating() {
    if (places[this.state.dateSpot]) {
      this.setState({img: places[this.state.dateSpot].url});
    }

    const index = Math.floor(
      Math.random() * places[this.state.dateSpot].talks.length,
    );
    this.setState({text: places[this.state.dateSpot].talks[index]});

    switch (this.state.dateSpot) {
      case 'lake':
        this.state.catData.cat.like++;
        break;
      case 'animalPark':
        this.state.catData.cat.fun++;
        break;
      case 'catCafe':
        this.state.catData.cat.addict++;
        break;
      case 'forest':
        this.state.catData.cat.health++;
        break;
      case 'karaoke':
        this.state.catData.cat.like++;
        this.state.catData.cat.fun++;
        break;
      default:
    }
    this.state.catData.dateCount++;

    if (this.handleCountSum() >= 10) {
      this.props.history.push('/endingintro', this.state.catData);
    }
  }

  render() {
    const status = {
      like: this.state.catData.cat.like,
      hate: this.state.catData.cat.hate,
      fun: this.state.catData.cat.fun,
      health: this.state.catData.cat.health,
      addict: this.state.catData.cat.addict,
      leftTurn: 10 - this.handleCountSum(),
    };

    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header>
          <Left>
            <Button hasText transparent>
              <Icon name="home" />
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Dear My Cat</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Button
              style={{alignSelf: 'stretch'}}
              warning
              onPress={() =>
                Toast.show({
                  text: 'Do you think your cat is happy?',
                  buttonText: 'I think so',
                  type: 'warning',
                })
              }>
              <Text style={{alignSelf: 'center'}}>
                Like: {status.like} Hate: {status.hate} Fun: {status.fun}{' '}
                Health: {status.health} Addict: {status.addict}{' '}
              </Text>
            </Button>
            <Button
              style={{alignSelf: 'stretch'}}
              danger
              onPress={() =>
                Toast.show({
                  text: 'You are so close to see your ending! Keep going!',
                  buttonText: 'Yay',
                  type: 'danger',
                })
              }>
              <Text style={{alignSelf: 'center'}}>
                {status.leftTurn} Turns Left Until Ending
              </Text>
            </Button>
            <ImageBackground
              resizeMode="cover"
              style={{flex: 1}}
              source={this.state.img}>
              <Row style={{backgroundColor: 'transparent', height: 400}} />
            </ImageBackground>
            <Row style={{backgroundColor: 'transparent', height: 200}}>
              <Col style={{width: 120}}>
                <Thumbnail
                  style={{width: 150, height: 200}}
                  source={this.props.history.location.state.image}
                />
              </Col>
              <Col>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={styles.fontStyle}>{this.state.text}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical onPress={() => this.handleAction('talks')}>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="ios-chatbubbles" />
              <Text>Talk</Text>
            </Button>
            <Button vertical onPress={() => this.handleFeeding()}>
              <Icon name="restaurant" />
              <Text>Feed</Text>
            </Button>
            <Button
              active
              badge
              vertical
              onPress={() => this.handleAction('play')}>
              <Badge>
                <Text>51</Text>
              </Badge>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fontStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
});
