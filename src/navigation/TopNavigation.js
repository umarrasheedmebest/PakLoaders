import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingRide from '../modules/UpcomingRide/UpcomingRide';
import OngoingRide from '../modules/OngoingRide/OngoingRide';
import React, {useCallback} from 'react';
import CompleteRide from '../modules/CompleteRide/CompleteRide';
import CancelRide from '../modules/CancelRide/CancelRide';
import {
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../globalStyle';
import helpers from '@seanhouli/react-mapbox-search/dist/utils/helpers';
import CustomHeader from '../Components/CustomHeader/CustomHeader';
import CustomBackground from '../Components/CustomBackground/CustomBackground';
import {useDispatch, useSelector} from 'react-redux';
import {eng, Urdu} from '../Components/Api/Language';
import {requestGetBids} from '../Redux/slices/RequestAPI/BidsApi';
import {getAllBidsRequest} from '../Redux/slices/BidsSlice';
import {IMAGE_URL} from '../Redux/constent/constent';
import {acceptBidRequest} from '../Redux/slices/RidesSlice';
const Tab = createMaterialTopTabNavigator();
function MyTabBar({state, descriptors, navigation, position}) {
  const alData = useSelector(state => state.bids.getAllBidsResponse);
  const userData = useSelector(state => state.user.getUserResponse);
  console.log('Bids Response');

  console.log(alData.length == '0');
  const dispatch = useDispatch();

  const mark = useSelector(state => state.language);
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <CustomBackground />
      <View
        style={[
          styles.headerContainer,
          styles.defaultStyle,
          {justifyContent: 'space-between'},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back.png')} />
        </TouchableOpacity>

        <Text
          style={{fontSize: 18, color: '#fff', fontFamily: 'Poppins-Regular'}}>
          Rides
        </Text>
        <View style={styles.defaultStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={{marginRight: 10}}>
            <Image source={require('../assets/Bell.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
              // dispatch(getAllBidsRequest())
            }}>
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
      {/* Header */}
      {/* Top Tab Bar */}
      <SafeAreaView
        style={{
          width: '100%',
          backgroundColor: colors.white,
          borderTopStartRadius: 10,
          borderTopRightRadius:10,
          paddingVertical:20
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: colors.primary,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
            height: 37,
            paddingHorizontal: 5,
            backgroundColor: 'white',
            shadowColor: '#007BFE',
            elevation: 6, // Add elevation to create shadow
            // shadowColor: colors.primary, // Shadow color
            // shadowOffset: { width: 0, height: 2 }, // Shadow offset
            // shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 7, // Shadow radius
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const inputRange = state.routes.map((_, i) => i);

            const opacity = position.interpolate({
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 1}}>
                <View
                  style={{
                    borderBottomWidth: isFocused ? 1 : null,
                    borderColor: colors.primary,
                    justifyContent: 'center',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <Animated.Text
                    style={{
                      color: isFocused ? colors.primary : colors.text,
                      fontWeight: 'bold',
                    }}>
                    {label}
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
      {/* Top Tab Bar */}
    </SafeAreaView>
  );
}
export function MyTabss() {
  return (
    <Tab.Navigator
      initialRouteName="Ongoing"
      initialLayout={{width: Dimensions.get('window').width}}
      tabBar={props => <MyTabBar {...props} />}
      tabBarPosition="top"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: {fontSize: 10},
        tabBarStyle: {backgroundColor: colors.white},
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarBounces: 'true',
      }}>
      <Tab.Screen
        name="Ongoing"
        component={OngoingRide}
        options={{tabBarLabel: 'Ongoing'}}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingRide}
        options={{tabBarLabel: 'Upcoming'}}
      />
      <Tab.Screen
        name="Completed"
        component={CompleteRide}
        options={{tabBarLabel: 'Completed'}}
      />
      <Tab.Screen
        name="Cancelled"
        component={CancelRide}
        options={{tabBarLabel: 'Cancelled'}}
      />
    </Tab.Navigator>
  );
}

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
    height: 60,
    paddingHorizontal: 20,
  },

  MenuContainer: {
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    borderColor: '#fff',
    shadowColor: '#4448FF',

    width: '101%',
    height: '10%',
    elevation: 4,
    justifyContent: 'center',
  },
  dataContainer: {
    width: 329,
    height: 136,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 5,
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
});
