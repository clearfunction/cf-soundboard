import React from 'react';
import { Button, Text } from 'native-base';
import { Audio } from 'expo-av';

interface Props {
  sound: string;
  text: string;
}

function soundPaths(sound: string) {
  switch (sound) {
    case 'sickburn':
      return require('../assets/sounds/sickburn.mp3');
    case 'oohburn':
      return require('../assets/sounds/oohburn.mp3');
    case 'bell':
      return require('../assets/sounds/bell.mp3');
    case 'chewie':
      return require('../assets/sounds/chewie.mp3');
    case 'itdepends':
      return require('../assets/sounds/itdepends.mp3');
    case 'rekt':
      return require('../assets/sounds/rekt.mp3');
    case 'sadtrombone':
      return require('../assets/sounds/sadtrombone.mp3');
    case 'shoryuken':
      return require('../assets/sounds/shoryuken.mp3');
    case 'fighton':
      return require('../assets/sounds/fighton.mp3');
    case 'damndaniel':
      return require('../assets/sounds/damndaniel.mp3');
    case 'rickroll':
      return require('../assets/sounds/rickroll.mp3');
    case 'guiles':
      return require('../assets/sounds/guiles.mp3');
  }

  throw Error(`Invalid sound! ${sound}`);
}

export default function SoundButton(props: Props) {
  async function onSoundButtonPress() {
    await Audio.Sound.createAsync(soundPaths(props.sound), { shouldPlay: true });
  }

  return (
    <Button onPress={onSoundButtonPress} style={{ margin: 5 }} block>
      <Text>{props.text}</Text>
    </Button>
  );
}
