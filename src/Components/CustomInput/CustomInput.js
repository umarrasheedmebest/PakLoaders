import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../globalStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CustomInput = ({
  value,
  setValue,
  placeholder,
  label,
  eye,
  scure,
  setScure,
  width,
  index,
  text,
  image,
  calenderr,
  error,
  password,
  showModeOne,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(password);
  const showPassword = require('../../assets/show.png');
  const hidePassword = require('../../assets/hide.png');
  const calender = require('../../assets/calender_icon.png');

  return (
    <ScrollView style={{marginVertical: 5,width:"100%"}}>
      <View
        style={{
          zIndex: 1,
          width: width,
          
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.labelStyle}>{label}</Text>
      
      <View
        style={[
          styles.textInput,
          {
            borderColor: error ? 'red' : isFocused ? '#666666' : 'gray',
            borderWidth: isFocused ? 1 : 1,
            marginVertical: 7,
            flexDirection: 'row',
          },
        ]}>
        <TextInput
          style={{color: colors.text, flex: 1}}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={show}
          autoCorrect={false}
          maxLength={13}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        <View
          style={{
            display: eye,
            zIndex: index,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => showModeOne()}>
            <Image
              source={calenderr ? calender : show ? showPassword : hidePassword}
              width="100%"
              height="100%"
            />
          </TouchableOpacity>
          <Text> {text} </Text>
        </View>
        </View>
      </View>
      {error && (
        <Text style={{color: 'red', fontSize: 12, marginTop: 7}}>{error}</Text>
      )}
    </ScrollView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    color: '#5A5A5A',
    fontSize: 12,
    fontWeight: '400',
    borderRadius: 5,
    
    width: "100%",
    height: 68,
    minWidth: 287,
    borderColor: '#666666',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    position:"relative"
  },
  labelStyle: {
    color: '#5A5A5A',
    fontSize: 14,
    fontWeight: '400',
    backgroundColor: '#ffffff',
    paddingHorizontal: 2,
    marginLeft: 10,
    position:"absolute",
    top:0,
    zIndex:20,
    
  },
});
