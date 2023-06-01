import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapboxGL from '@rnmapbox/maps';
const RenderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[74, 27]}
      >
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: "red",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };


export default RenderAnnotations

