import React, {useState} from 'react';
import BidsAPI from '../../Components/Api/BidsAPI';
import Home from '../../Components/Api/Home';
import Sure from '../../Components/sure/Sure';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  ImageBackground,
  ImageBackgroundBase,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const images = [
  require('../../assets/image_detailscrn.png'),
  require('../../assets/image_detailscrn.png'),
  require('../../assets/image_detailscrn.png')
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import CustomBackground from '../../Components/CustomBackground';
import {color} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { colors } from '../../globalStyle';
import { singlePost } from '../../Components/Api/singlePost';
import Loader from '../../Components/Loader/Loader';
const BlackDtailComponent = ({navigation, navigatebids, ...props}) => {
  const [imgActive, setImgActive] = useState(0);
  const data =useSelector(state => state.post.singlePostResponse);
  const singleData=useSelector(state=>state.post.singlePostRequest);
  console.log(data)
  console.log(singleData)
  const dataCards = item => {
    console.log('check data ');
    console.log(item.item);
    return (
      <View
        style={[
          styles.dataContainer,
          {height: 251, padding: 10, shadowColor: '#007BFE', margin: 4},
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/Waseem.png')} />
          <View style={{marginHorizontal: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Rana Farooq
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.starsImage}
                source={require('../../assets/Star.png')}
              />
              <Image
                style={styles.starsImage}
                source={require('../../assets/Star.png')}
              />
              <Image
                style={styles.starsImage}
                source={require('../../assets/Star.png')}
              />
              <Image
                style={styles.starsImage}
                source={require('../../assets/Star.png')}
              />
              <Image
                style={styles.starsImage}
                source={require('../../assets/Star.png')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 70}}>
            <TouchableOpacity>
              <Image
                style={styles.chat_icon}
                source={require('../../assets/chat_icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.call_icon}
                source={require('../../assets/call_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* 2nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/bulid.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Pick up:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {' '}
              {item.item.pickup_address}
            </Text>
          </View>
        </View>
        {/* 2nd row */}
        {/* 2nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/Dropoff_27.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Drop off:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {' '}
              {item.item.dropoff_address}
            </Text>
          </View>
        </View>
        {/* 2nd row */}
        {/* 3nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/calender_icon.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Date of pick up:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {item.item.pickup_date}, Monday
            </Text>
          </View>
        </View>
        {/* 3nd row */}
        {/* 4nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/time_27.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Timing:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {' '}
              {item.item.pickup_time}
            </Text>
          </View>
        </View>
        {/* 4nd row */}
        {/* 5nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/weight_27.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Charges:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {' '}
              Rs.76346
            </Text>
          </View>
        </View>
        {/* 5nd row */}
        {/* 6nd row */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <View style={{width: '10%'}}>
            <Image source={require('../../assets/weight-scale.png')} />
          </View>
          <View style={{width: '90%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#5A5A5A',
              }}>
              Weight:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-light',
                color: '#5A5A5A',
              }}>
              {' '}
              {item.item.details}
            </Text>
          </View>
        </View>
        {/* 6nd row */}
      </View>
    );
  };
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Sure profile={false}/> */}
      {/* Background Image */}
      {/* <CustomBackground /> */}
      {/* Background Image */}
      {singleData && <Loader visible={true}/>}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor:colors.primary
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/arrow-back.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          {' '}
          View details
        </Text>
        <View style={{width: 20}}></View>
      </View>
      {/* Carousel Slideer  */}
      <View style={[styles.mainContainer, styles.commonStyle]}>
      <SliderBox
  // ImageComponent={1}
  images={images}
  sliderBoxHeight={200}
  // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor={colors.primary}
  inactiveDotColor={colors.white}
  paginationBoxVerticalPadding={20}
  autoplay
  autoplayInterval={6000}
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderTopRightRadius: 15, width: '100%',borderTopLeftRadius:15 }}
  imageLoadingColor="#2196F3"
/>
{/* <SliderBox
images={images}
dotColor='red'

/> */}
        <View style={{height: '58%', alignItems: 'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.listStyle} showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Montserrat-Medium',
                  color: '#4448FF',
                  marginVertical:10,
                }}>
                Post Details
              </Text>
              {/* Post Details */}
              <FlatList
                style={{zIndex: 1}}
                data={data}
                keyExtractor={item => item.id}
                renderItem={item => dataCards(item)}
                showsVerticalScrollIndicator={false}
              />
              {/* Post Details */}
            </View>

            <View
              style={{
                flexDirection: 'row-reverse',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <View
                  style={{
                    width: 109,
                    height: 38,
                    backgroundColor: '#4448FF',
                    borderRadius: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'Poppins-Medium',
                      color: '#fff',
                    }}>
                    Edit Post
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreatePost')}>
                <View
                  style={{
                    width: 109,
                    height: 38,
                    borderWidth: 1,
                    borderRadius: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#4448FF',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'Poppins-Medium',
                      color: '#4448FF',
                    }}>
                    Close
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
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
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
  },
  contactContainer: {
    width: '100%',
    paddingVertical: 50,
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#4448FF',
  },
  paragraphStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#5A5A5A',
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  carContainer: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.35,
  },
  wrapImage: {
    width: 100,
    height: 300,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#4448FF',
  },
  dot: {
    margin: 3,
    color: '#fff',
  },
  listStyle: {
    marginVertical:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container_primary: {
    backgroundColor: '#4448FF',
    width: 105,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
  },
  text_primary: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '400',
  },
  container_secondary: {
    backgroundColor: '#E1E1FF',
    width: 105,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  text_secondary: {
    fontSize: 14,
    color: '#5A5A5A',
    fontWeight: '400',
  },
  defaultStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataContainer: {
    width: 341,
    height: 136,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 6,
    shadowColor: '#6C35EE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  starsImage: {
    width: 9.38,
    height: 8.86,
  },
  chat_icon: {
    width: 25.16,
    height: 20.39,
    marginRight: 2,
  },
  call_icon: {
    width: 25.29,
    height: 23.29,
  },
});

export default BlackDtailComponent;
