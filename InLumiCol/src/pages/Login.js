import React, {useState} from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from 'native-base';
import auth from '@react-native-firebase/auth';

const Login = props => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const login = () => {
    if (inputEmail && inputPassword) {
auth()
  .signInWithEmailAndPassword(inputEmail, inputPassword)
  .catch(error => {
    console.error(error);
  });
    } else {
      console.error("Ingresar correo y contraseña");
    }
    
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

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Image
          source={require('../../assets/logo.png')}
          alt={'Alternate Text'}
          size="2xl"
        />
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo</FormControl.Label>
            <Input
              onChangeText={email => setInputEmail(email)}
              placeholder="Ingresa tu correo"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input
              type="password"
              onChangeText={password => setInputPassword(password)}
              placeholder="Ingresa tu contraseña"
            />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Olvide mi contraseña.
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={login}>
            Ingresar
          </Button>

          <Button mt="2" colorScheme="indigo" onPress={loginAnon}>
            Ingresar Invitado
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
