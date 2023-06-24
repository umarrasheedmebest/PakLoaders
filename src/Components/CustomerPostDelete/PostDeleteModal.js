import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {cancelPostRequest} from '../../Redux/slices/PostSlice';
import {colors} from '../../globalStyle';
import {useNavigation} from '@react-navigation/native';

const PostDeleteModal = ({postId, modalVisible, setModalVisible}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins-Regular',
                    color: '#4448FF',
                  }}>
                  Delete!
                </Text>
              </View>
              <View
                style={{width: '100%', alignItems: 'center', marginBottom: 25}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                    color: '#5A5A5A',
                  }}>
                  Are you sure you want to delete this item!!
                </Text>
              </View>
              <View
                style={[
                  styles.defaultStyle,
                  {
                    justifyContent: 'space-evenly',
                    width: '100%',
                    zIndex: 11,
                    paddingHorizontal: 10,
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
                <TouchableOpacity
                  onPress={() => {
                    
                    
                    setModalVisible(false);
                    dispatch(cancelPostRequest(postId));
                  }}>
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
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 1,
    paddingVertical: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  loader: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 2,
  },
  defaultStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostDeleteModal;
