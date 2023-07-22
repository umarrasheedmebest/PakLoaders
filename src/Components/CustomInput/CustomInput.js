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
  keyboardType,
  maxLength,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(password);
  const showPassword = require('../../assets/show.png');
  const hidePassword = require('../../assets/hide.png');
  const calender = require('../../assets/calender_icon.png');

  return (
    <ScrollView style={{width:"100%"}}>
      <View
        style={{
          zIndex: 1,
         
          
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.labelStyle}>{label}</Text>
      
      <View
        style={[
          styles.textInput,
          {
            borderColor: error ? 'red' : isFocused ? colors.text : colors.text,
            borderWidth: isFocused ? 1 : 1,
            marginVertical: 8,
            flexDirection: 'row',
          },
        ]}>
        <TextInput
          style={{color: colors.text, flex: 1,marginLeft:3}}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor={colors.dot}
          secureTextEntry={show}
          autoCorrect={false}
          maxLength={maxLength}
          keyboardType={keyboardType}
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
    // minWidth: 287,
    borderColor: colors.text,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    position:"relative"
  },
  labelStyle: {
    color: colors.text,
    fontWeight: '400',
    backgroundColor: '#ffffff',
    paddingHorizontal:2,
    alignSelf:'flex-start',
    marginLeft: 10,
    marginBottom:-16,
    zIndex:20,
    
  },
});
