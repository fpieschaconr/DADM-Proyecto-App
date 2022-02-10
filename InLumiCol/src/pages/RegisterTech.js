import React, {useState,useEffect} from 'react';
import {
  Box,
  Select,
  FormControl,
  Input,
  Button,
  Stack,
  Center,

  useToast
} from 'native-base';
import { types } from '../helpers/types';
import firestore from '@react-native-firebase/firestore';

const RegisterTech = ({user})=>{
    const toast=useToast();
    const [active,setActive]=useState(null);
    const insertCase=()=>{
        firestore()
            .collection('Casos')
            .doc(user.uid)
            .set({
                active:types.activeType.transformer,
                address:"carrera 28 # 134-24",
                date: new Date(),
                state:types.state.close,
                operation:types.operation.installation,

            })
            .then(() => {
                toast.show({
                    render: () => {
                      return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                              Has asignado el caso correctamente!'
                            </Box>;
                    }
                  });
            })
            .catch(err=> console.log(err));
    }


    return(
        <Center>         
            <Stack mt={3} space={4} w="75%" maxW="300px">
                <Input size="md" placeholder="Dirección:" /> 
                <Select selectedValue={active} minWidth="200" accessibilityLabel="Activo" placeholder="Tipo Activo" _selectedItem={{
                    bg: "teal.600",
                    
                }} mt={1} onValueChange={itemValue => setActive(itemValue)}>
                    <Select.Item label={types.activeType.luminary} value="luminary" />
                    <Select.Item label={types.activeType.post} value="post" />
                    <Select.Item label={types.activeType.transformer}value="transformer" />
                </Select>
            </Stack>
            <Button mt="2" colorScheme="indigo" onPress={insertCase}>
                Insertar Dato
            </Button>
        </Center>
    );
    
}

export default RegisterTech;