import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';

export default function ButtonForm(props) {
    const { children, buttonStyle, labelStyle, funcHandler } = props;
    return (
        <TouchableOpacity onPress={() => funcHandler()}>
            <View
                style={[styles.buttonStyle, buttonStyle]}>
                <Text style={[styles.textStyle, labelStyle]}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        width: '100%',
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: WHITE_COLOR,
        borderRadius: 25,
        shadowColor: BLACK_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: FONT_TEXT,
        color: BLACK_COLOR,
        textAlign: 'center',
        fontSize: 13
    }
})
