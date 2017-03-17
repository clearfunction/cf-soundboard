import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Body, Title, Right } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    }
    Expo.Audio.setIsEnabled(true);
  }

  componentWillMount() {
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.Components.AppLoading />;
    }

    return (
      <Container>
        <Header>
            <Left />
            <Body>
                <Title style={{ marginTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0 }}>Soundboard</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <SoundButton text="rekt" sound="rekt" />        
          <SoundButton text="Ding" sound="bell" />        
          <SoundButton text="Chewie" sound="chewie" />        
          <SoundButton text="It Depends" sound="itdepends" />        
          <SoundButton text="Sad" sound="sadtrombone" />        
        </Content>
      </Container>
    );
  }
}

class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    let soundSource = '';
    switch (props.sound){
      case 'bell':
        soundSource = require("./assets/sounds/bell.mp3")
        break;
      case 'chewie':
        soundSource = require("./assets/sounds/chewie.mp3")
        break;
      case 'itdepends':
        soundSource = require("./assets/sounds/itdepends.mp3")
        break;
      case 'rekt':
        soundSource = require("./assets/sounds/rekt.mp3")
        break;
      case 'sadtrombone':
        soundSource = require("./assets/sounds/sadtrombone.mp3")
        break;
    }
    const soundResource = new Expo.Audio.Sound({
        source: soundSource
    });

    soundResource.loadAsync();
    this.state = {
      sound: soundResource
    }    
  }

  _onSoundButtonPress = () => {
    this.state.sound.setPosition(0);
    this.state.sound.play();
  }

  render() {
    return (      
      <Button onPress={this._onSoundButtonPress} style={{margin:5}} block>
        <Text>{this.props.text}</Text>
      </Button>       
    );
  }
}
