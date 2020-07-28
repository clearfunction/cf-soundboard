import React from 'react';
import { Platform } from 'react-native';
import { Container, Content, Header, Left, Body, Title, Right } from 'native-base';
import SoundButton from './components/SoundButton';
import { Constants, AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={{ marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 }}>Soundboard</Title>
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
