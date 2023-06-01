import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground
} from 'react-native';
import { useSelector } from 'react-redux';
import Accounts from '../../Components/Accounts'
import { eng, Urdu } from '../../Components/Api/Language';

const BankAccountComponent = ({ }) => {
   const data= useSelector.language
    return (
        <SafeAreaView >
            <ImageBackground style={{width:"100%",height:"100%",}} resizeMode="stretch" source={require('../../assets/accoutback.png')}>
        <Accounts
        image={require('../../assets/image-removebg-preview.png')}
        paraOne={data?eng.bankAccountDetail:Urdu.bankAccountDetail}
        paraTwo={data?eng.bankNote:Urdu.bankNote}
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
