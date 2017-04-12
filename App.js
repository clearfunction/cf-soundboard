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

  async componentWillMount() {
	  if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }
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
          <SoundButton text="Burn" sound="sickburn" />
          <SoundButton text="Burn (Nukem)" sound="oohburn" />
          <SoundButton text="rekt" sound="rekt" />
          <SoundButton text="Ding" sound="bell" />
          <SoundButton text="Chewie 🐻" sound="chewie" />
          <SoundButton text="It Depends 🎙️" sound="itdepends" />
          <SoundButton text="Sad" sound="sadtrombone" />
          <SoundButton text="Shoryuken 🔥" sound="shoryuken" />
          <SoundButton text="Fight On 💪" sound="fighton" />
          <SoundButton text="Daniel 👟" sound="damndaniel" />
          <SoundButton text="Jesse" sound="rickroll" />
          <SoundButton text="Guiles" sound="guiles" />
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
      case 'sickburn':
        soundSource = require("./assets/sounds/sickburn.mp3")
        break;
      case 'oohburn':
        soundSource = require("./assets/sounds/oohburn.mp3")
        break;
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
      case 'shoryuken':
        soundSource = require("./assets/sounds/shoryuken.mp3")
        break;
     case 'fighton':
        soundSource = require("./assets/sounds/fighton.mp3")
        break;
      case 'damndaniel':
        soundSource = require("./assets/sounds/damndaniel.mp3")
        break;
      case 'rickroll':
        soundSource = require("./assets/sounds/rickroll.mp3")
        break;
      case 'guiles':
        soundSource = require("./assets/sounds/guiles.mp3")
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
