import {MapView,Marker} from 'react-native-maps';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const MapAssets = () => {
  const [State, setState] = useState(getInitialState());
  const markers = [];
  for (var i = 0; i < 500; i++) {
    markers.push({
      latlng: [37.78825 + Math.random() / 50, -122.4324 + Math.random() / 50],
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
      }
  };
}
    
  function onRegionChange(region) {
  this.setState({ region });
}

  return (
      <MapView region={State.region} onRegionChange={onRegionChange}>
          {/* {markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))} */}
    </MapView>
  );
}

export default MapAssets;