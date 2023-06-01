import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';

const CounterComponent = ({ }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Counter Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CounterComponent;
