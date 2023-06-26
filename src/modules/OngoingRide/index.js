import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';
import { colors } from '../../globalStyle';

const OngoingRideComponent = ({ }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Counter Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
});

export default OngoingRideComponent;
