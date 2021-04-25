import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableHighlightProps } from 'react-native';
import colors from '../colors';

interface ButtonProps extends TouchableHighlightProps {
    title: string;
}

export function Button({ title, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.8}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 24,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});