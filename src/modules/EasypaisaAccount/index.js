import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground
} from 'react-native';
import Accounts from '../../Components/Accounts'

const EasypaisaAccountComponent = ({ }) => {
    return (
        <SafeAreaView >
            <ImageBackground style={{width:"100%",height:"100%",}} resizeMode="stretch" source={require('../../assets/accoutback.png')}>
        <Accounts
        image={require('../../assets/easypaisaAccount.png')}
        paraOne='Pay with your Easypaisa Direct account. Enter
        the Easypaisa registered mobile number'
        paraTwo='Note: Ensure your Easypaisa Direct account is
        active and has sufficient balance.'
        labelOne={'Easypaisa Mobile Number'}
        labelTwo={'4 digit Pin'}
        />
        </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default EasypaisaAccountComponent;
