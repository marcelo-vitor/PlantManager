import React, { useState } from 'react';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../colors';
import { Button } from '../components/Button';

export function Welcome(){

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil!
            </Text>
            
            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. {'\n'}
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title={'>'}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        width: 300,
        height: 300
    }
});