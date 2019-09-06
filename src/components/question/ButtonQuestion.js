import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GREEN_COLOR } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

export default ButtonQuestion = (props) => {
    const { funcHandler, styleContainer, backgroundColor, disabled, iconName } = props;
    return (
        <View style={[styles.container, styleContainer]}>
            <TouchableOpacity onPress={() => disabled ? _ => _ : funcHandler() }>
                <View style={[styles.wapper, {  backgroundColor: backgroundColor ? backgroundColor : GREEN_COLOR }]}>
                    <Icon
                        name={iconName}
                        type='font-awesome'
                        size={20}
                        color='#fff'
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