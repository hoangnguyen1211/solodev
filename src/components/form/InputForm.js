import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR } from '../../constants/ColorConstants';

export default InputForm = (props) => {

    const { funcHandler, type, name, placeholder, style } = props;

    return (
        <View style={ styles.container }>
            <TextInput 
                style={[ styles.inputStyle, style ]}
                secureTextEntry={ type === 'password' ? true : false }
                onChangeText={ (text) => funcHandler(name, text) }
                placeholder={ placeholder }
                >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15
    },
    inputStyle: {
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: WHITE_COLOR,
        borderColor: '#f2f2f2',
        shadowColor: BLACK_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 }
    }
})