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

const EasypaisaAccountComponent = ({ }) => {
    const data=useSelector.language;
    return (
        <SafeAreaView >
            <ImageBackground style={{width:"100%",height:"100%",}} resizeMode="stretch" source={require('../../assets/accoutback.png')}>
        <Accounts
        image={require('../../assets/easypaisaAccount.png')}
        paraOne={data?eng.easypaisaDetail:Urdu.easypaisaDetail}
        paraTwo={data?eng.easypaisaNote:Urdu.easypaisaDetail}
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
