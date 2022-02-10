import React, {useState,useEffect} from 'react';
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
  useToast
} from 'native-base';
import { types } from '../helpers/types';
import firestore from '@react-native-firebase/firestore';

const RegisterAsset = props=>{
    const toast=useToast();
    const insertCase=()=>{
        firestore()
            .collection('Cases')
            .add({
                active:types.activeType.transformer,
                address:"carrera 54 # 135-35",
                date: new Date(),
                state:types.state.open,
                active:types.activeType.transformer,

            })
            .then(() => {
                toast.show({
                    render: () => {
                      return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                              Caso Asignado Correctamente!'
                            </Box>;
                    }
                  });
            })
            .catch(err=> console.log(err));
    }


    return(
        <Button mt="2" colorScheme="indigo" onPress={insertCase}>
            Insertar Dato
          </Button>
    );
    
}

export default RegisterAsset;