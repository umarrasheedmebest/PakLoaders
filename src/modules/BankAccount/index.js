import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground
} from 'react-native';
import Accounts from '../../Components/Accounts'

const BankAccountComponent = ({ }) => {
    return (
        <SafeAreaView >
            <ImageBackground style={{width:"100%",height:"100%",}} resizeMode="stretch" source={require('../../assets/accoutback.png')}>
        <Accounts
        image={require('../../assets/image-removebg-preview.png')}
        paraOne='Pay with your Bank account. Enter the Account
        details.'
        paraTwo='Note: Ensure your Bank account is active and
        has sufficient balance.'
        labelOne={'Account No'}
        labelTwo={'Mpin'}
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

export default BankAccountComponent;
