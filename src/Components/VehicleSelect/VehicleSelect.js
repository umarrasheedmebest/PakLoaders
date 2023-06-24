import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import {colors} from '../../globalStyle';
import Raksha from '../../assets/SVG_Icons/Icon_2.svg';
import Pickup from '../../assets/SVG_Icons/Icon_1.svg';
import Truk from '../../assets/SVG_Icons/Icon_3.svg';
import TrukSmall from '../../assets/SVG_Icons/Icon_4.svg';
import LargeTruk from '../../assets/SVG_Icons/Icon_5.svg';
import MediumTruk from '../../assets/SVG_Icons/Icon_6.svg';
import TrukOne from '../../assets/SVG_Icons/Icon_7.svg';
import HavyTruk from '../../assets/SVG_Icons/Icon_8.svg';
import Tractor from '../../assets/SVG_Icons/Icon_9.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
const VehicleSelect = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const SlectedData = [
    {
      id: 1,
      name: 'Tractor',
      example: 'e.g 400 kg Capacity',
      Tractor,
      Icon,
    },
    {
      id: 2,
      name: 'Raksha',
      example: 'e.g Small-Capacity',
      Tractor: Raksha,
      Icon,
    },
    {
      id: 3,
      name: 'Pickup',
      example: 'e.g small pickup ',
      Tractor: Pickup,
      Icon,
    },
    {
      id: 4,
      name: 'Medium-Capacity',
      example: 'e.g Shahzor Truck',
      Tractor: TrukSmall,
      Icon,
    },
    {
      id: 5,
      name: 'High-Capacity',
      example: 'e.g Shahzor Truck',
      Tractor: Truk,
      Icon,
    },
    {
      id: 6,
      name: 'Super-Capacity',
      example: 'e.g Reefer Truck',
      Tractor: HavyTruk,
      Icon,
    },
    {
      id: 7,
      name: 'XL20',
      example: 'e.g 20 feet Truck',
      Tractor: TrukOne,
      Icon,
    },
    {
      id: 8,
      name: 'XL40',
      example: 'e.g 40 feet Truck',
      Tractor: LargeTruk,
      Icon,
    },
  ];
  const Item = item => {
    const {id, name, example, Tractor, Icon} = item;
    const [enable, setEnable] = useState(false);
    return (
      <View style={{margin: 10}}>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => {
              setEnable(!enable);
              setModalVisible(!modalVisible);
              setSelectedItem(<Tractor width={100} height={100} />);
            }}>
            <View style={styles.MenuContainer}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-end',
                  paddingRight: 5,
                  paddingTop: 2,
                }}>
                <Icon
                  name="check-circle"
                  size={25}
                  color={enable ? '#47EA1A' : '#D0D3CF'}
                />
              </View>
              <Tractor width={100} height={100} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                  color: '#5A5A5A',
                  lineHeight: 32,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#5A5A5A',
                  lineHeight: 32,
                }}>
                {example}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={styles.modalView}>
          {/* MainContainer */}
          <FlatList
            key={'#'}
            style={styles.flatlistStyle}
            data={SlectedData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </Modal>
      {selectedItem}
      <CustomButton
        onPress={() => setModalVisible(true)}
        text="Slect Vehicle"
        type="secondary"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 70,
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
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

  mainContainer: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 12,
    width: '100%',

    padding: 20,
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
    paddingTop: 5,
    backgroundColor: '#fff',
    shadowColor: '#007BFE',
    alignItems: 'center',
    width: 158,
    height: 200,
    elevation: 4,
  },
  dataContainer: {
    width: 329,
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
  flatlistStyle: {
    width: '100%',
    height: '100%',
  },
});

export default VehicleSelect;
