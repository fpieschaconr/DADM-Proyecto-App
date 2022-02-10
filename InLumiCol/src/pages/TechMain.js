import React, {useState,useEffect} from 'react';
import {
  Box,
  Select,
  FormControl,
  Input,
  Button,
  Stack,
  Center,
  Heading,
  useToast,
  FlatList
} from 'native-base';
import { types } from '../helpers/types';
import firestore from '@react-native-firebase/firestore';
import SuperMain from './SuperMain';

const TechMain = ({user})=>{
    const toast=useToast();
    const [state,setState]=useState(0);
    const [cases,setCases]=useState([]);
    useEffect(() => {
        const subscriber = firestore()
          .collection('Casos')
          .doc(user.uid)
          .onSnapshot(documentSnapshot => {
            setCases(documentSnapshot.data());
            console.log('User data: ', documentSnapshot.data());
          });
          console.log(cases);
        // Stop listening for updates when no longer required
        return () => subscriber();
      }, [user.uid]);

      
    
    if(state===0)
    return(
    <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Casos
        </Heading>
        <FlatList data={cases} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "gray.600"
      }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
                    {item.active}
                  </Text>
                  <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
                  {item.address}
                </Text>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
            <Button size="sm" variant="subtle" colorScheme="secondary" onPress={()=>setState(1)}>
            Volver
          </Button>
      </Box>
    );

    if(state===1)
          return <SuperMain user={user} />;
    
}

export default TechMain;