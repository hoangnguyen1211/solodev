import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR } from '../../constants/ColorConstants';

export default LanguageButton = (props) => {
    const { language, children, funcHandler } = props;
    return (
        <TouchableOpacity onPress={ () => funcHandler(language) }>
            <View style={ styles.buttonStyle }>
                <Text style={ styles.labelStyle }>{ children }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: WHITE_COLOR,
        shadowColor: BLACK_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 }
    },
    labelStyle: {
        color: BLACK_COLOR,
        textAlign: 'center',
        fontWeight: '600'
    }
})
