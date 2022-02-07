import React from 'react';
import {View, Button, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import {styles, buttons} from './styles';

const Main = props => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />

      <Button style={buttons.primary} onPress={logout} title="SALIR" />
    </View>
  );
};

export default Main;
