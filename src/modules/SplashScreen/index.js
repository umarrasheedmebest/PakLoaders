import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';

const SplashScreenComponent = ({ navigation}) => {
    setTimeout(()=>{
        navigation.replace('HowItWorks')
    }, 3000)
    return (
        <View style = {{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#444BFF'}}>
            <Image source = {require('../../assets/slide3.png')} style = {{height: 200, width: 200}}/>
            <Text style = {{marginTop: 20, fontSize: 24, color: 'white', fontWeight: "bold"}}>P A K    L O A D E R S</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SplashScreenComponent;
