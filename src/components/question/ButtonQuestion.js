import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, GREEN_COLOR } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

export default ButtonQuestion = (props) => {
    const { funcHandler, styleContainer, backgroundColor, disabled, iconName } = props;

    return (
        <View style={[styles.container, styleContainer, { display: disabled === false ? 'none' : 'flex' }]}>
            <TouchableOpacity onPress={() => disabled ? funcHandler() : _ => _ }>
                <View style={[styles.wapper, {  backgroundColor: backgroundColor ? backgroundColor : GREEN_COLOR }]}>
                    <Icon
                        name={iconName}
                        type='font-awesome'
                        size={20}
                        color={WHITE_COLOR}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: GREEN_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#999',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4
    }
})