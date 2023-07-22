import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Modal,
  SafeAreaView,
  Alert
} from 'react-native';
import React,{useState,useEffect,useRef} from 'react';
import {colors} from '../../globalStyle';
import {locationPk} from '../Api/LocationApi';
import filter from 'lodash.filter';
import { ScrollView } from 'react-native-gesture-handler';
import Location from '../../assets/SVG_Icons/location-crosshairs-solid.svg'

const CustomLocation = ({placeholder,label,adress,setParam,searchLocation}) => {
    
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(locationPk)
      }, []);
      const inputRef=useRef(null);
        const onSubmit=(item)=>{
            const {place_name,lat,lng}=item;
            // console.log(name)
            setParam(item)
            adress(place_name)
            setSearchQuery(item.place_name);
           setModalVisible(false) 
        }
        const [locationData, setLocationData] = useState([])
        
        const handleChange = async (item) => {
          setSearchQuery(item)
          try {
            const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?proximity=69.3451,30.3753&country=PK&access_token=pk.eyJ1IjoidW1hcnJhc2hlZWQiLCJhIjoiY2xneGZkeW8yMDFleTNnbXNhbXE2ZXUzaCJ9.bg4UxxXQM4o-H3e2S3elQQ&autocomplete=true`;
      
            const response = await fetch(endpoint);
            const results = await response.json();
            console.log(results.features);
            setLocationData(results?.features)
          //   setSuggestions(results?.features);
          //   console.log(suggestions);
          } catch (error) {
            console.log('Error fetching data: ' + error.message);
          }
        };
    const handleSearch=(query)=>{
    
        setSearchQuery(query);
        const str2 = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
        const filteredData= filter(locationPk, (user)=>{
            
            
            if (user.name.includes(str2||query)) {
                
               
                return true
            }else{
                return false
            }
        });
        setdata(filteredData)
        
        
    }

    
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{width: '100%',marginVertical:8,}}>
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
          placeholderTextColor={colors.dot} 
          style={{color:colors.text,marginLeft:7,}}
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            <SafeAreaView style={styles.modalView}>
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <Location width={20} height={20} color='#fff'/>
              <TextInput 
              style={styles.ModeSearch}
              placeholder={searchLocation}
              autoFocus
               clearButtonMode='always'
          autoCapitalize='none'
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query)=>handleChange(query)}
          ref={inputRef} 
              /></View>
              <ScrollView style={styles.listScrollContainer} showsVerticalScrollIndicator={false}>
        {locationData.map(item => (

        <TouchableOpacity key={item.id} style={styles.listContainer} onPress={()=>onSubmit(item)}>
          <View>
            <Text style={styles.listHeading}>{item.place_name}</Text>
            {/* <Text style={styles.listParagraph}>{item.place_name}</Text> */}
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
      </SafeAreaView>
      </Modal>
      
    </View>
  ); 
};

export default CustomLocation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 5,
  },
  modalView: {
    flex:1,
   marginTop:30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
    paddingHorizontal:2,
    backgroundColor: '#fff',
    alignSelf:'flex-start',
    color:colors.text,
    

  },
  listContainer: {
    width: '100%',
    height: 40,
  
    borderColor: colors.dot,
    marginTop: 10,
  },
  ModeSearch:{
    width:"100%",
    height:50,
    marginLeft:10,
    borderRadius:10,
    borderColor:colors.dot,
    color:colors.text,
    borderBottomWidth:1
  },
  listScrollContainer:{
width:"100%"
  },
  listHeading:{
    fontSize:14,
    fontWeight:'bold',
    color:colors.text
  },
  listParagraph:{
    fontSize:12,
    fontWeight:'400',
    color:colors.dot
  }
});
