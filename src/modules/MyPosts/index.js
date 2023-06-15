import React, {useState, useCallback} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import {colors} from '../../globalStyle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomCNIC from '../../Components/CustomCNIC';
import CustomForground from '../../Components/CustomForground';
import CustomMenu from '../../Components/CustomMenu';
import Home from '../../Components/Api/Home';
import {useNavigation} from '@react-navigation/native';
import Raksha from '../../assets/SVG_Icons/Icon_2.svg';
import Pickup from '../../assets/SVG_Icons/Icon_1.svg';
import Truk from '../../assets/SVG_Icons/Icon_3.svg';
import TrukSmall from '../../assets/SVG_Icons/Icon_4.svg';
import LargeTruk from '../../assets/SVG_Icons/Icon_5.svg';
import MediumTruk from '../../assets/SVG_Icons/Icon_6.svg';
import TrukOne from '../../assets/SVG_Icons/Icon_7.svg';
import HavyTruk from '../../assets/SVG_Icons/Icon_8.svg';
import Tractor from '../../assets/SVG_Icons/Icon_9.svg';
import DateTime from '../../Components/DateTimePicker/DateTime';
import DateTimePicker from '@react-native-community/datetimepicker';
import SearchBox from "@seanhouli/react-mapbox-search";
import { WebView } from 'react-native-webview';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Platform,
  Keyboard,
  
  
} from 'react-native';
import {useSelector} from 'react-redux';
import {eng, Urdu} from '../../Components/Api/Language';
import {IMAGE_URL} from '../../Redux/constent/constent';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import VehicleSelect from '../../Components/VehicleSelect/VehicleSelect';
const PostComponent = ({
  navigateCompleteProfileOne,
  navigateVerification,

  sideBar,
}) => {
  
const calender = require('../../assets/calender_icon.png');
  const userData = useSelector(state => state.user.getUserResponse);
  const [textOne, setTextOne] = useState('');
  // Text Validation
  const [inputs, setInputs] = useState({
    pickup_address: '',
    dropoff_address: '',
    pickup_date: '',
    pickup_time: '',
    details: '',
    loaders: '',
  });
  const [errors, setErrors] = useState({});
  const valiDate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.pickup_address) {
      handleError('Please input Pickup_address', 'pickup_adress');
      valid = false;
    }
    if (!inputs.pickup_date) {
      handleError('Please input pickup_date', 'pickup_date');
    }
    if (!inputs.pickup_time) {
      handleError('Please input pickup_time', 'pickup_time');
    }
    if (!inputs.dropoff_address) {
      handleError('Please input dropoff_address', 'dropoff_address');
    }
    if (!inputs.details) {
      handleError('Please input Luggage Details', 'details');
    }
    if (!inputs.loaders) {
      handleError('Please input Loaders Value', 'loaders');
    }
    if (valid) {
      navigation.navigate('Vehicle', inputs);
    }
  };
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };
  // Text Validation
  const mark = useSelector(state => state.language);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
      let fTime='Hours: ' +tempDate.getHours()+ '|Minutes: '+ tempDate.getMinutes();
    handleOnChange(fDate, 'pickup_date');
    setTextOne(fDate,fTime);
    console.log(fDate,fTime);
  };
  const showModeOne = currentDate => {
    console.log(currentDate)
    setShow(true);
    setMode(currentDate);
  };
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

  const [showMode, setshowMode] = useState('date');
  const defaultImage = require('../../assets/icon_image.png');
  return (
    <SafeAreaView style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* Background Image */}
      <CustomBackground />
      {/* Background Image */}
      <View
        style={[
          styles.headerContainer,
          styles.defaultStyle,
          {justifyContent: 'space-between'},
        ]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/Button.png')} />
        </TouchableOpacity>

        <Text
          style={{fontSize: 18, color: '#fff', fontFamily: 'Poppins-Regular'}}>
          {mark ? eng.addPost : Urdu.addPost}
        </Text>
        <View style={styles.defaultStyle}>
          <TouchableOpacity style={{marginRight: 10}}>
            <Image source={require('../../assets/Bell.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={sideBar}>
            {userData.map(
              useCallback(res => {
                return (
                  <Image
                    key={res.id}
                    style={{width: 36, height: 36, borderRadius: 100}}
                    source={{uri: `${IMAGE_URL}${res.user_image}`}}
                  />
                );
              }),
              [],
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={{width: '100%', marginVertical: 5, paddingHorizontal: 20}}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 24,
              fontWeight: '500',
              fontFamily: 'Poppins-Medium',
            }}>
            {mark ? eng.createPost : Urdu.createPost}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
              color: '#5A5A5A',
              lineHeight: 18,
            }}>
            Welcome Rana Farooq!{'\n'}
            Please fill the following form to add a new post.
          </Text>
        </View>
        {/* Profile */}
        <View
          style={{
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            paddingHorizontal: 10,
          }}>
          {/* Input field user Pickup Location */}
          
          <CustomInput
            label={mark ? eng.pickupLocation : eng.pickupLocation}
            eye="none"
            placeholder="Clarck pharmacy, 442 Rawalpindi"
            error={errors.pickup_address}
            setValue={text => handleOnChange(text, 'pickup_address')}
            onFocus={() => {
              handleError(null, 'pickup_address');
            }}
          />
          {/* Input field user Drop Location */}
          <CustomInput
            label="Drop off Location"
            eye="none"
            placeholder="Clarck pharmacy, 442 Islamabad"
            error={errors.dropoff_address}
            setValue={text => handleOnChange(text, 'dropoff_address')}
            onFocus={() => {
              handleError(null, 'dropoff_address');
            }}
          />
          {/* Input field user Luggage weight */}
          <CustomInput
            label="Luggage weight"
            eye="none"
            placeholder="580 kg"
            error={errors.details}
            setValue={text => handleOnChange(text, 'details')}
            onFocus={() => {
              handleError(null, 'details');
            }}
          />
          {/* Input field user date pickup */}
          <TouchableOpacity style={{width:"100%"}} onPress={()=>showModeOne('date')}>
            <Text style={{backgroundColor:"#fff",marginBottom:-9,marginLeft:10,zIndex:2,width:100}}>Pickup Date</Text>
<View style={{borderWidth:1,width:"100%",height:68,borderColor:colors.text,borderRadius:5,flexDirection:"row",alignItems:"center"}}>
<TextInput style={{width:"90%"}}
         
          editable={false}
          placeholder="12-02-2024"
          
          />
          <Image source={calender}/>
          </View>
          </TouchableOpacity>
         
          {/* Input field user Time Pickup */}
          <TouchableOpacity style={{width:"100%"}} onPress={()=>showModeOne('time')}>
            <Text style={{backgroundColor:"#fff",marginBottom:-9,marginLeft:10,zIndex:2,width:100}}>Pickup time</Text>
<View style={{borderWidth:1,width:"100%",height:68,borderColor:colors.text,borderRadius:5,flexDirection:"row",alignItems:"center"}}>
<TextInput style={{width:"90%"}}
         
          editable={false}
          placeholder="12:00PM"
          
          />
          <Image source={calender}/>
          </View>
          </TouchableOpacity>
          {/* Input field user Vehicle Required */}
          <CustomInput
            label="Number of Person"
            eye="none"
            placeholder="Number of Person"
            error={errors.loaders}
            setValue={text => handleOnChange(text, 'loaders')}
            onFocus={() => {
              handleError(null, 'loaders');
            }}
          />
          {/* Vehicle Button */}
           <VehicleSelect/>
          {/* Button Next */}
          <CustomButton
            onPress={() => {
              valiDate();
            }}
            text="Next"
            type="secondary"
          />

          {/* Button Next */}
          {/* Button Cancel */}
          <CustomButton
            onPress={() => navigation.navigate('CreatePost')}
            text="Cancel"
            type="tertiary"
          />

          {/* Button Cancel */}
        </View>
      </ScrollView>
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
    height: '100%',

    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    paddingHorizontal: 20,
  },
  MenuBar: {
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    borderColor: '#fff',
    shadowColor: '#4448FF',

    width: '101%',
    height: '10%',
    elevation: 4,
    justifyContent: 'center',
  },

  MenuContainer: {
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#007BFE',
    alignItems: 'center',
    width: 150,
    height: 140,
    elevation: 10,
    justifyContent: 'center',
  },
  dataContainer: {
    width: '100%',
    height: 136,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  listStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  defaultStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  iconImage: {
    width: 125,
    height: 125,
    marginBottom: 15,
    marginTop: 15,
  },
  textInput: {
    color: '#5A5A5A',
    fontSize: 12,
    fontWeight: '400',
    borderRadius: 5,
    width: 287,
    height: 68,
    borderColor: '#666666',
    borderWidth: 1,
  },
  main: {
    fontSize: 24,
    alignSelf: 'flex-start',
    color: '#4448FF',
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold.ttf',
    marginVertical: 10,
  },
  paragraph: {
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  MainCnic: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxCnic: {
    width: 93,
    height: 92,
    borderWidth: 1,

    margin: 10,
    borderColor: colors.dot,
    borderStyle: 'dashed',
  },
});

export default PostComponent;
