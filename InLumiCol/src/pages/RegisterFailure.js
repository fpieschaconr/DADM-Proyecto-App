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
import SuperMain from './SuperMain';

const RegisterFailure = ({user})=>{
    const [view, setView]=useState(0);
    const toast=useToast();
    const [active,setActive]=useState(null);
    const [state,setState]=useState(null);
    const [operation,setOperation]=useState(null);
    const insertCase=()=>{
        firestore()
            .collection('Casos')
            .doc(user.uid)
            .set({
                active:active,
                address:"carrera 28 # 134-24",
                date: new Date(),
                state:state,
                operation:operation,

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

    if(view===0)
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
            <Stack mt={3} space={4} w="75%" maxW="300px">
                <Select selectedValue={state} minWidth="200" accessibilityLabel="Activo" placeholder="Tipo Solicitud" _selectedItem={{
                    bg: "teal.600",
                    
                }} mt={1} onValueChange={itemValue => setState(itemValue)}>
                    <Select.Item label={types.state.open} value="open" />
                    <Select.Item label={types.state.close} value="close" />
                    <Select.Item label={types.state.reopen}value="reopen" />
                </Select>
            </Stack>
            <Stack mt={3} space={4} w="75%" maxW="300px">
                <Select selectedValue={operation} minWidth="200" accessibilityLabel="Activo" placeholder="Tipo Actividad" _selectedItem={{
                    bg: "teal.600",
                    
                }} mt={1} onValueChange={itemValue => setOperation(itemValue)}>
                    <Select.Item label={types.operation.installation} value="installation" />
                    <Select.Item label={types.operation.maintenance} value="maintenance" />
                    <Select.Item label={types.operation.repair}value="repair" />
                    <Select.Item label={types.operation.uninstallation} value="uninstallation" />
                </Select>
            </Stack>
            <Button mt="2" colorScheme="indigo" onPress={insertCase}>
                Insertar Dato
            </Button>
            <Button my="25" size="sm" variant="subtle" onPress={()=> setView(1)}>
            Regresar
            </Button>
        </Center>
    );

    if(view===1)
        return <SuperMain user={user} />
    
}

export default RegisterFailure;