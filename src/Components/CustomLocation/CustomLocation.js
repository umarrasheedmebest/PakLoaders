import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Modal,
  SafeAreaView
} from 'react-native';
import React,{useState,useEffect,useRef} from 'react';
import {colors} from '../../globalStyle';
import {locationPk} from '../Api/LocationApi';
import filter from 'lodash.filter';


const CustomLocation = ({placeholder,label}) => {
    
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(locationPk)
      }, []);
      const inputRef=useRef(null);
        const onSubmit=(item)=>{
            const {name}=item;
            // console.log(name)
            setSearchQuery(name);
           setModalVisible(false) 
        }

    const handleSearch=(query)=>{
        setSearchQuery(query);
        const filteredData= filter(locationPk, (user)=>{
            
            
            if (user.name.includes(query)) {
                
               
                return true
            }else{
                return false
            }
        });
        setdata(filteredData)
        
        
    }

    
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{width: '100%',marginVertical:10}}>
      <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)}>
        <View>
          <Text style={styles.textLocation}>{label}</Text>

          <TextInput placeholder={placeholder}
          clearButtonMode='always'
          autoCapitalize='none'
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query)=>handleSearch(query)}
          ref={inputRef} 
          editable={false} 
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <SafeAreaView style={styles.modalView}>
              <TextInput 
              style={styles.ModeSearch}
              placeholder='Search'
               clearButtonMode='always'
          autoCapitalize='none'
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query)=>handleSearch(query)}
          ref={inputRef} 
              />
        {data.map(item => (
        <TouchableOpacity key={item.lat} style={styles.listContainer} onPress={()=>onSubmit(item)}>
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}</SafeAreaView>
      </Modal>
      
    </View>
  );
};

export default CustomLocation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    borderWidth: 1,
    borderColor: colors.dot,
    borderRadius: 5,
  },
  modalView: {
    marginTop:70,
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
  textLocation: {
    marginTop: -12,
    marginLeft: 10,
    backgroundColor: '#fff',
    width: "26%",
  },
  listContainer: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.dot,
    marginTop: 10,
  },
  ModeSearch:{
    width:"100%",
    height:50,
    borderWidth:1,
    borderRadius:10,
    borderColor:colors.dot
  }
});
