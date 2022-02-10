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
import { types } from '../helpers/types';
import firestore from '@react-native-firebase/firestore';
import AlertMessage from '../components/AlertMessage';
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
    return (
        <Box  mb="3.5" mt="3.5" alignItems="center">
            <Button size="sm" variant="outline" colorScheme="secondary">
              Registrar Activo
            </Button>
            <Button size="sm" variant="outline" colorScheme="secondary">
              Registrar Técnico
            </Button>
            <Button size="sm" variant="outline" colorScheme="secondary">
              Registrar Caso
            </Button>
            <Pressable  mb="3.5" mt="3.5" onPress={() => console.log("Click")}>
                <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                    <HStack alignItems="center">
                        <Spacer />
                     </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Técnicos
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                        El servicio de alumbrado público comprende las actividades de suministro de energía eléctrica al sistema de alumbrado público, la administración, operación, mantenimiento, modernización, reposición y expansión de dicho sistema.
                        </Text>
                    <Flex>
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Ver Detalle
                    </Text>
                </Flex>
                </Box>
            </Pressable>
            <Pressable mb="3.5" mt="3.5" onPress={() => console.log("I'm Pressed")}>
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

            <Pressable mb="3.5" mt="3.5" onPress={() => console.log("I'm Pressed")}>
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
}

export default SuperMain;