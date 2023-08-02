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
import SearchBox from '@seanhouli/react-mapbox-search';
import {WebView} from 'react-native-webview';
import SearchLocationInput from '../../Components/MapboxSearchBar/SearchLocationInput';
import { createPostRequest } from '../../Redux/slices/PostSlice';
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
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {eng, Urdu} from '../../Components/Api/Language';
import {IMAGE_URL} from '../../Redux/constent/constent';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import VehicleSelect from '../../Components/VehicleSelect/VehicleSelect';
import Icon from 'react-native-vector-icons/AntDesign';
import AsIcon from 'react-native-vector-icons/FontAwesome'
import CustomLocation from '../../Components/CustomLocation/CustomLocation';
import PostMessage from '../../Components/PostCreateMessage/PostMessage';
import Loaders from '../../Components/Loader/Loader'

const PostComponent = ({
  navigateCompleteProfileOne,
  navigateVerification,
  openCamara,
  sideBar,
  imageData,
  images,
}) => {
  const calender = require('../../assets/calender_icon.png');
  const userData = useSelector(state => state.user.getUserResponse);
  const postActive = useSelector(state => state.user.getUserRequest);
console.log(postActive)
  const [textDate, setTextDate] = useState('');
  const [textTime, setTextTime] = useState('');
  console.log('Image Data');
  console.log(images);
  const [param, setParam] = useState({})
  const [dropparam, setDropParam] = useState({})
 const dispatch=useDispatch();
  console.log(param);
  console.log(dropparam)
  // Text Validation
  const [inputs, setInputs] = useState({
    pickup_address: '',
    dropoff_address: '',
    pickup_date: '',
    pickup_time: '',
    details: '',
    loaders: '',
  });
  const [singleFile, setSingleFile] = useState(null);
  const [wait, setWait] = useState(false)
  // Form Data
  const PostCreate=()=>{
     var formData = new FormData();
  formData.append('pickup_address', inputs.pickup_address);
  formData.append('dropoff_address', inputs.dropoff_address);
  formData.append('pickup_date', inputs.pickup_date);
  formData.append('pickup_time', inputs.pickup_time);
  formData.append('details', inputs.details);
  formData.append('loaders', inputs.loaders);
  formData.append('images', images);
  formData.append('images', images);
  formData.append('pickup_lat', param.center[0]);
  formData.append('pickup_long', param.center[1]);
  formData.append('dropoff_lat', dropparam.center[0]);
  formData.append('dropoff_long', dropparam.center[1]);
console.log(formData);
const mainData=formData;
// setWait(true)

dispatch(createPostRequest(mainData));


  }
 

  // formData.append('images',{
  //   uri:imageData[0].uri,
  //   type:imageData[0].type,
  //   name:imageData[0].name,
  //   fileName:'image'

  // });
  // formData.append('images',{
  //   uri:imageData[0].uri,
  //   type:imageData[0].type,
  //   name:imageData[0].name,
  //   fileName:'image'

  // });
 

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
  
  const d = new Date();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getDate();

    let fTime =
      'Hours: ' + tempDate.getHours() + '|Minutes: ' + tempDate.getMinutes();
    handleOnChange(fDate, 'pickup_date');
    handleOnChange(textTime, 'pickup_time');
    setTextDate(fDate);
    setTextTime(formatAMPM(tempDate));
    console.log(fDate, fTime);
  };
  const showModeOne = currentDate => {
    console.log(currentDate);
    setShow(true);
    setMode(currentDate);
  };
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

  const [showMode, setshowMode] = useState('date');
  const defaultImage = require('../../assets/icon_image.png');
  const [modalVisible, setModalVisible] = useState(false);

  const getyear = d.getFullYear();
  const getmonth = d.getMonth() + 1;
  const getDate = d.getDate();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  return (
    <SafeAreaView style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
          minimumDate={new Date(getyear, getmonth, getDate)}
          // maximumDate={new Date(getyear, getmonth, getDate)}
        />
      )}
      {/* Loeader */}
      {postActive&&<Loaders visible={true}/>}
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
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('Notification')}>
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
      {/* <SearchLocationInput/> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
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
            {userData.map(
              useCallback(res => {
                return <View key={res.id}><Text style={styles.welcomeStyle}  key={res.id}>Welcome {res.full_name}!</Text></View>;
              }),
              [], 
            )}
            <Text
            style={styles.welcomeStyle}>
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
          
          <CustomLocation
            placeholder={'Clarck pharmacy,442 Rawalpindi'}
            label={'Pickup Location'}
            searchLocation={'Pickup Location'}
            adress={item => handleOnChange(item, 'pickup_address')}
            setParam={setParam}
          />

          {/* Input field user Drop Location */}
          <CustomLocation
            placeholder={'Clarck pharmacy,442 Islamabad'}
            label={'Drop Off Location'}
            adress={item => handleOnChange(item, 'dropoff_address')}
            searchLocation={'Drop off Location'}
            setParam={setDropParam}
          />
          {/* Input field user Luggage weight */}
          <CustomInput
            label="Luggage weight"
            eye="none"
            placeholder="580 kg"
            keyboardType={'numeric'}
            error={errors.details}
            setValue={text => handleOnChange(text, 'details')}
            onFocus={() => {
              handleError(null, 'details');
            }}
          />
          {/* Input field user date pickup */}
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => showModeOne('date')}>
            <Text
              style={styles.dateTimeLabel}>
              Pickup Date
            </Text>
            <View
              style={styles.dateTimeButton}>
              <TextInput
                style={{width: '90%', color: colors.text,marginLeft:6}}
                value={textDate}
                editable={false}
                placeholder="12-02-2024"
                setValue={item => handleOnChange(item, 'pickup_date')}
              />
              <Image source={calender} />
            </View>
          </TouchableOpacity>

          {/* Input field user Time Pickup */}
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => showModeOne('time')}>
            <Text
              style={styles.dateTimeLabel}>
              Pickup time
            </Text>
            <View
              style={styles.dateTimeButton}>
              <TextInput
                style={{width:'90%', color: colors.text,marginLeft:6}}
                value={textTime}
                editable={false}
                placeholder="12:00PM"
                setValue={item => handleOnChange(textTime, 'pickup_time')}
              />
              <Image source={calender} />
            </View>
          </TouchableOpacity>
          {/* Input field user Vehicle Required */}
          <CustomInput
            label="Number of Person"
            eye="none"
            placeholder="Number of Person"
            error={errors.loaders}
            keyboardType={'numeric'}
            maxLength={2}
            setValue={text => handleOnChange(text, 'loaders')}
            onFocus={() => {
              handleError(null, 'loaders');
            }}
          />
          {/* Image Picker */}
          <SafeAreaView style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.imageSlectButton}
              onPress={openCamara}>
              <Icon name="plussquare" size={80} color={colors.primary} />
            </TouchableOpacity>
            {imageData.map(item => (
              <Image
                key={item.id}
                source={item.srcImage}
                style={styles.selectImage}
              />
            ))}
          </SafeAreaView>
          {/* Vehicle Button */}
          <VehicleSelect />
          {/* Button Next */}
          <CustomButton
            onPress={() => PostCreate()}
            text="Post"
            type="secondary"
          />
          {/* Post Message Modal */}
          <PostMessage
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
          {/* Post Message Modal */}
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
  welcomeStyle:{
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#5A5A5A',
    lineHeight: 18,
  },
  dateTimeButton:{
    borderWidth: 1,
    width: '100%',
    height: 68,
    borderColor: colors.text,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:8
   
    
  },
  dateTimeLabel:{
    backgroundColor: '#fff',
    marginBottom: -16,
    marginLeft: 10,
    paddingHorizontal:2,
    zIndex: 2,
    alignSelf:'flex-start',
    color:colors.text
  },
  imageContainer: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    flex: 1,

    marginVertical: 10,
    alignItems: 'center',
  },
  selectImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
  },
  imageSlectButton: {
    width: 90,
    height: '100%',
  },
  imageButton: {
    color: '#fff',
  },
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
