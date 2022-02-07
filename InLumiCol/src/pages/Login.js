import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {styles, buttons} from '../styles';

const Login = props => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const login = () => {
    auth()
      .signInWithEmailAndPassword(inputEmail, inputPassword)
      .catch(error => {
        console.error(error);
      });
  };

  const loginAnon = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  // Handle user state changes
  const onAuthStateChanged = user => {
    props.setUser(user);
    if (initializing) props.setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#003f5c"
          onChangeText={email => setInputEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setInputPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={buttons.forgotPassBtn}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button style={buttons.primary} onPress={login} title="INGRESAR" />

      <TouchableOpacity style={buttons.loginAnonBtn} onPress={loginAnon}>
        <Text style={styles.loginText}>INGRESO INVITADO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
