import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR, GRADIENT_COLOR } from '../../constants/ColorConstants';
import LinearGradient from 'react-native-linear-gradient';

export default LanguageButton = (props) => {
    const { language, children, funcHandler } = props;
    return (
        <TouchableOpacity onPress={() => funcHandler(language)}>
            <LinearGradient 
                colors={GRADIENT_COLOR} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} 
                style={styles.buttonStyle}
            >
                <Text style={styles.labelStyle}>{children}</Text>
            </LinearGradient>
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
        color: WHITE_COLOR,
        textAlign: 'center',
        fontWeight: '600'
    }
})
