import React, { Component } from 'react';
import { ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Left, 
  Right, 
  Title, 
  Button, 
  Text, 
  Body, 
  Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Cat, Images } from '../Helper';


export default class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  chooseCat(type) {
    this.props.history.push('/cat', {
      username: this.props.history.location.state,
      catType: type
    });
  }

  render() {  
    const group = [];
    
    Images.forEach((image) => {
      const catGroup = image.map(cat => {
        const imgSource = cat.uri;
        return (
          <TouchableHighlight key={cat.type} style={{ flex: 1 }} onPress={() => this.chooseCat(cat.type)}>
            <ImageBackground resizeMode='cover' style={{ flex: 1 }} source={imgSource} >
              <Col style={{ height: 220, backgroundColor: 'transparent', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'salmon' }} >{cat.type}</Text>
              </Col>
            </ImageBackground>
          </TouchableHighlight>
        );
      });
    
      group.push(catGroup);
    });
    
    const cats = group.map(item => (
        <Row>
          {item}
        </Row>
      ));

    return (
      <Container style={styles.container}>
        <Header>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
            <Title>Welcome {this.props.history.location.state}!</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
            <Content>
              <Grid>
                {cats}
              </Grid>
            </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

