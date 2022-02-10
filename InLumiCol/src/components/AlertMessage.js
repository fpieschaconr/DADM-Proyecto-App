import React, {useState,useEffect} from 'react';
import {
  Box,
  Center,
  HStack,
  Text,

} from 'native-base';


function AlertMessage({message,rol}) {
    return <Center>
        <Alert w="90%" maxW="400" status="info" colorScheme="info">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  Sección de: {rol} 
                </Text>
              </HStack>
              <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} />
            </HStack>
            <Box pl="6" _text={{
            color: "coolGray.600"
          }}>
              {message} hola
            </Box>
          </VStack>
        </Alert>
      </Center>;
  }
  export default AlertMessage;