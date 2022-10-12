import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground
} from 'react-native';
import Accounts from '../../Components/Accounts'

const JazzCashAccountComponent = ({ }) => {
    return (
        <SafeAreaView >
            <ImageBackground style={{width:"100%",height:"100%",}} resizeMode="stretch" source={require('../../assets/accoutback.png')}>
        <Accounts
        image={require('../../assets/jazzcash_icon_mywallet.png')}
        paraOne='Pay with your Jazzcash account. Enter the 
        Jazzcash registered mobile number'
        paraTwo='Note: Ensure your Jazzcash account is active
        and has sufficient balance.'
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

export default JazzCashAccountComponent;
