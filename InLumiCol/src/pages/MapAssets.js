// import MapView,{Marker} from 'react-native-maps';
// import React, { useState } from 'react';
// import firestore from '@react-native-firebase/firestore';

// const MapAssets = () => {
//   const [State, setState] = useState(getInitialState());
//   const markers = [];
//   for (var i = 0; i < 100; i++) {
//     markers.push({
//       latlng: [37.78825 + Math.random() / 50, -122.4324 + Math.random() / 50],
//       title: 'Ejemplo',
//       description: 'Ejemplo desc',
//     });
//   }

//     function getInitialState() {
        
        
//   return {
//     region: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421
//       }
//   };
// }
    
//   function onRegionChange(region) {
//   this.setState({ region });
// }

//   return (
//       <MapView region={State.region} onRegionChange={onRegionChange}>
//           {/* {markers.map((marker, index) => (
//     <Marker
//       key={index}
//       coordinate={marker.latlng}
//       title={marker.title}
//       description={marker.description}
//     />
//   ))} */}
//     </MapView>
//   );
// }

import React, {useState} from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet,View} from 'react-native';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

  

export default () => {
const [State, setState] = useState(getInitialState());
  const markers = [];
  for (var i = 0; i < 250; i++) {
    markers.push({
      latlng: { latitude:37.78825 + Math.random() / 35, longitude:- 122.4324 + Math.random() / 35
    },
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      title: 'Ejemplo',
      description: 'Ejemplo desc',
    });
  }

  function getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  function onRegionChange(region) {
    setState({region});
  }

return (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {markers.map((marker, index) => (
     <Marker
       key={index}
       coordinate={marker.latlng}
       title={marker.title}
       description={marker.description}
     />
   ))}
    </MapView>
  </View>
);
  }