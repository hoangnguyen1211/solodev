import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, ORANGE_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';

export default function OutlineButton(props) {
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
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: WHITE_COLOR,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: ORANGE_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: '600',
        fontSize: FONT_TEXT,
        color: ORANGE_COLOR,
        textAlign: 'center',
        fontSize: 13
    }
})
