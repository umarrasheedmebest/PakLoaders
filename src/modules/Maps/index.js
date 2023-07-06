import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import {colors} from '../../globalStyle';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
  Dimensions,
  ImageBackground,
} from 'react-native';
import CustomRides from '../../Components/CustomRides';

const MapsComponent = ({
  ContentView,
  text,
  backgroundColor,
  toggleButton,
  back,
  postFlat,
  Chatprofile,
  show,
  ...props
}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const defaultImage = require('../../assets/arrow-back.png');
  const customImage = require('../../assets/whiteButton.png');
  const goBaack = () => {
    const back = props.navigation.goBack();
    return back;
  };
  const toggle = () => {
    const back = props.navigation.openDraw();
    return back;
  };
  return (
    <SafeAreaView
      style={[styles.container, {width: windowWidth, height: windowHeight}]}>
      {/* Background Image */}
      <CustomBackground CustomBackground={back} />
      {/* Background Image */}

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            toggleButton ? navigation.openDrawer() : navigation.goBack()
          }>
          <Image source={toggleButton ? customImage : defaultImage} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          {' '}
          Rides
        </Text>
        <View>
          {Chatprofile ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image source={require('../../assets/Bell.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image
                  style={{width: 36, height: 36}}
                  source={require('../../assets/ProfileDetail.png')}
                />
              </TouchableOpacity>
            </View>
          ) : toggleButton ? (
            <TouchableOpacity style={{marginRight: 10}}>
              <Image source={require('../../assets/Bell.png')} />
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      {/* MainContainer */}
      <View
        showsVerticalScrollIndicator={false}
        style={[styles.mainContainer, styles.commonStyle]}>
        {/* Custom ContentView */}
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          source={require('../../assets/mapBack1.png')}
          resizeMode={'stretch'}>
          <View style={{marginBottom: 10}}>
            <CustomRides clarck={true} />
          </View>
        </ImageBackground>

        {/* Cutom ContentView */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  mainContainer: {
    width: '100%',
    height: '90%',

    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    backgroundColor: 'white',
  },
});

export default MapsComponent;
