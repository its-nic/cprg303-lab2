import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FruitScreen = ( ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fruitText}>Apple</Text>
            <Text style={styles.fruitText}>Orange</Text>
            <Text style={styles.fruitText}>Mango</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fruitText: {
        fontSize: 24,
        margin: 2,
    },
});

export default FruitScreen;