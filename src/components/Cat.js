import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Title, 
  Text, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right,
  Card,
  CardItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Cats, Images } from '../Helper';


export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    let catImage;

    const catType = this.props.history.location.state.catType;
    const username = this.props.history.location.state.username;
    
    Images.forEach(group => {
      group.forEach(image => {
        if (image.type === catType) {
          catImage = image.url;
        }
      });
    });
    return (
      <Container style={styles.container} >
          <ImageBackground 
          resizeMode='cover' style={{ flex: 1 }} 
          source={catImage}
          >
          <Header>
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
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
            <Row style={{ backgroundColor: 'transparent', height: 450 }} />
            <Row style={{ backgroundColor: 'transparent', height: 200 }}>
              <Card>
              <CardItem header button onPress={() => 
                alert(`${catType} Cat is very sensitive and addictive. You might need to be extra careful about giving snacks otherwise terrible thing will happen!`)}>
                <Text style={styles.fontStyle}>You Chose {catType} Cat!</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Hi {username}, Nyan!
                    Nice to meet you, Nyan! 
                    From now, I'm your cat, Nyan.
                    Please take care of me well, Nyan :)
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer button onPress={() => this.props.history.push('/action', this.props.history.location.state)}>
              {console.log(this.props.history.location)}
                <Text style={styles.fontStyle}>Let's Date!</Text>
              </CardItem>
            </Card>
            </Row>
            </Grid>
          </Content>
        </ImageBackground>
      </Container>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  fontStyle: {
    color: 'salmon', 
    fontWeight: 'bold'
  },
});