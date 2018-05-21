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


export default class Action extends Component {
  render() {

    console.log(this.props.history.location.state);

    return (
      <Container style={{ backgroundColor: 'white'}}>
        <Header>
          <Left>
            {console.log(this.props.history)}
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
              source={require('../images/sleeping_beauty.gif')}
              // source={this.props.history.location.state.image}
            >
            <Row style={{ backgroundColor: 'transparent', height: 450 }}>
            </Row>
            </ImageBackground>
            <Row style={{ backgroundColor: 'transparent', height: 200 }}>
              <Col style={{ width: 120 }}>
                <Thumbnail style={{ width: 150, height: 200 }} source={this.props.history.location.state.image} />
              </Col>
              <Col >
              <Card>
              <CardItem>
                <Body>
                  <Text>
                    Nyan! Stop staring at me and do something! 
                    I'm hungry and bored :(
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
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-chatbubbles" />
              <Text>Talk</Text>
            </Button>
            <Button vertical>
              <Icon name="restaurant" />
              <Text>Feed</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="ios-paw" />
              <Text>Play</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-cafe" />
              <Text>Date</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};