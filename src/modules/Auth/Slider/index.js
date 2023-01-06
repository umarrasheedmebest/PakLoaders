import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from 'react-native-snap-carousel';
import MapSliderImage from '../../../assets/svg/MapSliderImage';
import PersonsSliderImage from '../../../assets/svg/PersonsSliderImage';
import VehicleSliderImage from '../../../assets/svg/VehicleSliderImage';
import { colors } from '../../../globalStyle';
import CustomText from '../../Common/CustomText';
const { width, height } = Dimensions.get('window');

const HowItWorksComponent = ({
    navigateToHome,
    carouselItems,
    activeIndex,
    carousel,
    setActiveIndex
}) => {

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{
                marginHorizontal: 25,
                alignItems: 'center'
            }}>
                <View style={{ height: 300 }}>
                    {activeIndex == 0 ?
                        <Image source={require("../../../assets/slide1.png")} style={{ width: 220, height: 220 }} /> :
                        activeIndex == 1 ?
                            <Image source={require("../../../assets/slide2.png")} style={{ width: 220, height: 220 }} /> :
                            <Image source={require("../../../assets/slide3.png")} style={{ width: 220, height: 220 }} />}
                </View>
                <CustomText
                    title={item.title}
                    fontSize={24}
                    color={colors.primary}
                    fontWeight={'500'}
                    textAlign={'center'}
                    marginTop={20}
                />
                <CustomText
                    title={item.description}
                    fontSize={16}
                    color={colors.text}
                    marginTop={20}
                />
            </View>

        )
    }

    const CustomPaging = ({ data, activeSlide }) => {
        const settings = {
            dotsLength: data.length,
            activeDotIndex: activeSlide,
            containerStyle: styles.dotContainer,
            dotStyle: styles.dotStyle,
            inactiveDotStyle: styles.inactiveDotStyle,
            inactiveDotOpacity: 1.5,
            inactiveDotScale: 0.8,
        };
        return <Pagination {...settings} />;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <ScrollView>
                <View style={{ marginTop: height / 7 }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => carousel = ref}
                        data={carouselItems}
                        sliderWidth={width}
                        itemWidth={width}
                        renderItem={_renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                    <CustomPaging data={carouselItems} activeSlide={activeIndex} />
                </View>
                <TouchableOpacity style={{
                    width: 190,
                    height: 50,
                    backgroundColor: colors.primary,
                    borderRadius: 5,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 15
                }}
                    onPress={() => navigateToHome()}>
                    <CustomText
                        title={'Next'}
                        fontSize={24}
                        color={colors.white}
                    />
                </TouchableOpacity>

                {activeIndex !== 2 && <CustomText
                    onPress={() => navigateToHome()}
                    title={'Skip'}
                    fontSize={20}
                    color={colors.primary}
                    marginTop={15}
                    textAlign={'center'}
                />}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    // dotContainer: {
    //     marginTop: 20,
    // },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
    },
    inactiveDotStyle: {
        backgroundColor: colors.dot,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
    // container: {
    //     paddingTop: 30,
    // },
    title: {
        fontSize: 20,
    },
    item: {
        width: '100%',
        height: width - 20, //height will be 20 units less than screen width.
    },
    imageContainer: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'lightblue',
        marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
    },
});

export default HowItWorksComponent;
