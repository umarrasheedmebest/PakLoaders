import React, {useState,useCallback,useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  RefreshControl
} from 'react-native';
import PostAPI from '../../Components/Api/PostAPI';
import CustomHeader from '../../Components/CustomHeader';
import {colors} from '../../globalStyle';
import {useNavigation} from '@react-navigation/native';
import Sure from '../../Components/sure';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import {
  cancelMessageAccess,
  cancelPostRequest,
  getAllPostRequest,
  singlePostRequest,
} from '../../Redux/slices/PostSlice';
import { PostData } from '../../Components/Api/PostData';
import PostDeleteModal from '../../Components/CustomerPostDelete/PostDeleteModal';
import { IMAGE_URL } from '../../Redux/constent/constent';
import moment from 'moment/moment';

const CreatePostComponent = ({postData,PostRequest}) => {
  const limit = 3; // Set the maximum number of items to be displayed

  // Get the limited subset of the data
  const limitedData = postData.slice(-4).reverse();
  const navigation = useNavigation();
  const [deletebtn, setDeletebtn] = useState(false);
  const [postId, setPostId] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  console.log('Post Data');
  console.log(postData);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.getUserResponse);
  const deletePost= useSelector(state=>state.post.cancelPostRequest);
  const deletePostRes= useSelector(state=>state.post.cancelPostResponse);
  const deleteMessage= useSelector(state=>state.post.cancelMessageAccess);
console.log('Pistts dfdsgsfdgsd'+postId)
const [refresh, setRefresh] = useState(false)
const pullMe=()=>{
  setRefresh(true)
  setTimeout(() => {
    setRefresh(false)
  }, 4000);
}
  console.log('post Delete'+deletePostRes.message)
  useEffect(() => {
    navigation.addListener('focus',async()=>{
       dispatch(getAllPostRequest())
    })
   
  })
  
  const dataCards = useCallback(({item}) => {
    if (postData == null || PostRequest) {
      <Loader visible={true} />;
    }
    console.log(item);
    return (
      <SafeAreaView style={{width:"100%",alignItems:'center'}}>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 13, fontWeight: '700', color: colors.text}}>
            {item.day}
          </Text>
        </View>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#9D9D9D'}}>
            {item.time}
          </Text>
        </View>
        <View style={styles.dataContainer}>
          {/* First Row user Name */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'space-around',
             
            }}>
            <View style={{width:'45%',}}>
              {/* <Image source={item.image} /> */}
              
              {userData.map(
                  res => {
                    return (
                      <View key={res.id} style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
                      <Image
                        
                        style={{width: 36, height: 36, borderRadius: 100}}
                        source={{uri: `${IMAGE_URL}${res.user_image}`}}
                      />
                      <Text>{res.full_name}</Text></View>
                    );
                  })
                  
                }
            </View>
            <View style={{marginLeft: 10, marginRight: 45}}>
              {/* <Text
                style={{fontSize: 14, color: colors.text, fontWeight: '400'}}>
                {item.name}Rana Farooq
              </Text> */}
              {/* {userData.map(
                  res => {
                    console.log(res)
                    return (
                      <Text>{res.full_name}</Text>
                    );
                  })
                  
                } */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  
                }}>
                  
                {/* <Image source={require('../../assets/Stars.png')} /> */}
                {/* <Text style={{marginLeft: 10}}>(25 reviews)</Text> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width:'18 %',
                
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <Image source={require('../../assets/edit_btn.png')} />
              </TouchableOpacity>
              <TouchableOpacity
              
              onPress={() => {
                // dispatch(cancelPostRequest(item.id))
                setPostId(item.id)
                setModalVisible(true)
                }}>
              <Image source={require('../../assets/delete.png')}/>
            </TouchableOpacity>
            </View>
          </View>
          {/* First Row user Name */}
          {/* 2nd Row user Name */}
          <View style={[{marginVertical: 12}]}>
            <View
              style={[styles.defaultStyle, {marginRight: 40, marginBottom: 4}]}>
              <Image
                style={{width: 13.43, height: 13.52}}
                source={require('../../assets/bulid.png')}
              />
              <Text style={{marginLeft: 4}}>
                Pick up: {item.pickup_address}
              </Text>
            </View>
            <View
              style={[styles.defaultStyle, {marginRight: 40, marginBottom: 4}]}>
              <Image
                style={{width: 8.86, height: 11.37}}
                source={require('../../assets/location.jpg')}
              />
              <Text style={{marginLeft: 4}}>
                Drop off: {item.dropoff_address}
              </Text>
            </View>
            <View
              style={[styles.defaultStyle, {marginRight: 40, marginBottom: 4}]}>
              <Image
                style={{width: 9.73, height: 11.3}}
                source={require('../../assets/calender_icon.png')}
              />
              <Text style={{marginLeft: 4}}>
                Date of pick up: {moment(item.pickup_date).format('LL')}

              </Text>
            </View>
          </View>
          {/* 2nd Row user Name */}
          {/* 3rd Row user */}
          <View style={[styles.defaultStyle, {justifyContent: 'center'}]}>
            <TouchableOpacity
              style={styles.container_primary}
              onPress={() => {
                dispatch(singlePostRequest(item.id));
                navigation.navigate('Detail');
              }}>
              <Text style={styles.text_primary}>View Details</Text>
            </TouchableOpacity>
          </View>
          {/* 3rd Row user */}
        </View>
      </SafeAreaView>
    );
  },[]);
  return (
    <>
      
          <PostDeleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} 
           postId={postId}
          />
         
      
     
       
      
      {deleteMessage&&Alert.alert('Message',deletePostRes.message,[
        {text: 'OK', onPress: () => dispatch(cancelMessageAccess())},
      ])}
   
          {deletePost ==true&& <Loader visible={true}/>}
          <CustomHeader
            text={'My Posts'}
            postFlat={true}
            ContentView={
              <>
              
                <View style={{alignItems: 'center',width:'100%'}}>
                
                  <FlatList
                    refreshControl={
                      <RefreshControl
                      refreshing={refresh}
                      onRefresh={()=>pullMe()}
                      />
                    }
                    style={{zIndex: 1,width:"100%"}}
                    maxToRenderPerBatch={4}
                    initialNumToRender={4}
                    windowSize={10}
                    data={limitedData}
                    keyExtractor={item => item.id}
                    renderItem={item => dataCards(item)}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </>
            }
          />
        </>
     
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
    height: '80%',

    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    paddingHorizontal: 20,
  },

  MenuContainer: {
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    borderColor: '#fff',
    shadowColor: '#4448FF',

    width: '100%',
    height: '10%',
    elevation: 4,
    justifyContent: 'center',
  },
  dataContainer: {
    width: "98%",
    height: 202,
    padding: 10,
    
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    marginTop: 4,
    
    shadowColor: '#007BFE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
});

export default CreatePostComponent;
