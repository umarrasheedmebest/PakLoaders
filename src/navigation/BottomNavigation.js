import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/CustomHome/CustomHome';
import Chat from '../modules/Chat/Chat';
import Payment from '../modules/Payment/Payment';
import Post from '../modules/MyPosts/CustomPost';
import React from 'react';
import {colors} from '../globalStyle';
const Tab = createBottomTabNavigator();
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Glyph from '../assets/SVG_Icons/Glyph.svg';
import Glyphs from '../assets/SVG_Icons/Glyphs.svg';

import PlusIcon from '../assets/SVG_Icons/plus_icon_blue.svg';
import PlusIcons from '../assets/SVG_Icons/plus_icon_bluee.svg';

import HomeIcon from '../assets/SVG_Icons/home_icon_drawer.svg';
import { MaterialIcon } from '../Components/Icon/Icon';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',

        height: 76,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        elevation: 2,
        borderColor: colors.primary,
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

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {isFocused && label == 'Home' ? (
              // <HomeIcon width={30} height={30} />
              <MaterialIcon name="home" color={colors.primary} size={'large'} />
            ) : isFocused && label == 'My Request' ? (
              <MaterialIcon name="email-variant" color={colors.primary} size={'large'} />
              
            ) : isFocused && label == 'Create' ? (
              <MaterialIcon name="plus-box" color={colors.primary} size={'large'} />
             
            ) : !isFocused && label == 'Home' ? (
              <MaterialIcon name="home" color={colors.text} size={'large'} />
              
            ) : !isFocused && label == 'My Request'?
            <MaterialIcon name="email-variant" color={colors.text} size={'large'} />
            : (
              <MaterialIcon name="plus-box" color={colors.text} size={'large'} />
              
            )}

            <Text
              style={{
                color: isFocused ? colors.primary : colors.text,
                fontSize: 12,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // tabBarLabel:false
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Post} />

      <Tab.Screen name="My Request" component={Payment} />
    </Tab.Navigator>
  );
}
