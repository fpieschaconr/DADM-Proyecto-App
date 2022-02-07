import React from 'react';
import {
  View,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {styles, buttons} from './styles';

const Main = props => {
    const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
}

  return (
    <View style={styles.container}>
      <Button style={buttons.primary} onPress={logout} title="SALIR" />
    </View>
  );
};

export default Main;
