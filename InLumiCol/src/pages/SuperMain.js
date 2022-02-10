import React, {useState,useEffect} from 'react';
import {
  Box,
  Select,
  FormControl,
  Input,
  Button,
  Stack,
  Center,
  Pressable,
  HStack,
  Badge,
  Text,
  Spacer,
  Flex,
  useToast
} from 'native-base';
import TechMain from './TechMain';
import RegisterFailure from './RegisterFailure';
import RegisterAsset from './RegisterAsset';

const messageOptions={
    message:{
        technical:"Esta sección corresponde al detalle de todos los técnicos que estan activos en el municipio",
        active:"Esta sección corresponde al detalle de todos los activos que estan registrados en el municipio",
        cases:"Esta sección corresponde al detalle de todos los Casos que existen en el municipio",
    },
    rol:{
        techincal:"Técnicos",
        cases:"Casos",
        active:"Activos",
    }
}

const SuperMain = ({user})=>{
    const [state,setState]=useState(0);
    if (state===0)
     return (
        
        <Box  mb="3.5"  mt="3.5" alignItems="center">
            <Button w="100%" my="1" size="xs" variant="outline" colorScheme="primary" onPress={()=> setState(3)}>
              Registrar Activo
            </Button>
            <Button w="100%" my="1" size="xs" variant="outline" colorScheme="secondary" onPress={()=> setState(1)}>
              Registrar Técnico
            </Button>
            <Button  w="100%" my="1" size="xs" variant="outline" colorScheme="primary" onPress={()=> setState(2)}>
              Registrar Caso
            </Button>
            <Pressable  mb="1" mt="1" onPress={() => console.log("Click")}>
                <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                    <HStack alignItems="center">
                        <Spacer />
                     </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Técnicos
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                        El servicio de alumbrado público comprende las actividades de suministro de energía eléctrica al sistema de alumbrado público, la administración, operación, mantenimiento, modernización, reposición.
                        </Text>
                    <Flex>
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Ver Detalle
                    </Text>
                </Flex>
                </Box>
            </Pressable>
            <Pressable mb="1" mt="1" onPress={() => console.log("I'm Pressed")}>
                <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                    <HStack alignItems="center">
                        <Spacer />
                       </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Casos
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                        Eventos relacionados con los activos administrados por los técnicos.
                        </Text>
                    <Flex>
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Ver Detalle
                    </Text>
                </Flex>
                </Box>
            </Pressable>

            <Pressable mb="1" mt="1" onPress={() => console.log("I'm Pressed")}>
                <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                    <HStack alignItems="center">
                        <Spacer />
                    </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Activos
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                        Activos del municipio, cubiertos por la normativa municipal, y gestionados por los técnicos registrados en la aplicación.
                        </Text>
                    <Flex>
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                     Ver Detalle
                    </Text>
                </Flex>
                </Box>
            </Pressable>
        </Box>
    );
    
    

    if(state===1)
    return <TechMain user={user}/>

    if(state===2)
    return <RegisterFailure user={user}/>

    if(state===3)
    return <RegisterAsset user={user}/>
}

export default SuperMain;