import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Dimensions
} from 'react-native';
import React from 'react';

const CustomBackground = ({CustomBackground}) => {
  const defaultImage = require('../../assets/top.png');
  const bluebackground = require('../../assets/ChangeBack.png');
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  return (
    <ImageBackground
      style={styles.headerImage}
      source={CustomBackground ? bluebackground : defaultImage}
    />
    
  );
};

export default CustomBackground;

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 417,
    position:'absolute',
    top:0,
    
    // position: 'absolute',
    // top: -205,
    // left: -12,
    
  },
});
