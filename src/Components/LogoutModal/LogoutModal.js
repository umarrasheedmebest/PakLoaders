import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View, Modal, Button,TouchableOpacity,StatusBar, } from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../AuthProvider';


export default function LogoutModal() {
  const [modalVisible, setModalVisible] = useState(true);
  const {logout} = useContext(AuthContext);
  return (
    <View >
<StatusBar hidden={false}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
       <View style={styles.centeredView}>
    
        <View style={styles.modalView}>
          <View
            style={{width: '100%', alignItems: 'center',justifyContent:'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#F44336',
              }}>
              Logout
            </Text>
          </View>
          <View style={{width: '100%', alignItems: 'center', marginBottom: 25}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                color: '#5A5A5A',
              }}>
              Are you sure you want to Logout!!
            </Text>
          </View>
          <View
            style={[
              styles.defaultStyle,
              {
                justifyContent: 'space-evenly',
                width: '100%',
                zIndex: 11,
               
                flexDirection:'row'
              },
            ]}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View
                style={{
                  width: 109,
                  height: 38,
                  borderColor: '#4448FF',
                  borderRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1.5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Poppins-Medium',
                    color: '#4448FF',
                  }}>
                  No
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logout()}>
              <View
                style={{
                  width: 109,
                  height: 38,
                  backgroundColor: '#4448FF',
                  borderRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Poppins-Medium',
                    color: '#fff',
                  }}>
                  Yes
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
