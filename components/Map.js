import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Mapbox, {Camera} from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');

Mapbox.setAccessToken(
  'pk.eyJ1IjoiYmpwMTIxNDciLCJhIjoiY2xoZzdjb2lqMDFwZTNjcXBubWx3b3NsdyJ9.FatdAHo1F4m0jwswPY9XLg',
);

const MapboxComponent = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Hello</Text>
      </View>
      <View style={{flex: 0.9, padding: 20}}>
        <Mapbox.MapView
          style={{flex: 1}}
          styleUrl={'mapbox://styles/mapbox/streets-v12'}>
          <Camera centerCoordinate={[-74.00597, 40.71427]} zoomLevel={14} />
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default MapboxComponent;
