import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { GREEN_COLOR } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

export default ProcessBar = (props) => {

    const { widthBar, styleContainer, navigation } = props;

    _goBackCourse = () => {
        
    }

    return (
        <View style={[styles.container, styleContainer]}>
            <Icon
                name='times'
                type='font-awesome'
                color='#999'
                size={23}
                onPress={ () => _goBackCourse() } />
            <View style={styles.wapper}>
                <View style={[styles.processBar, { width: widthBar ? `${widthBar}%` : '0%' }]}></View>
            </View>
            <Icon
                name='flag'
                type='font-awesome'
                color='#999'
                size={20}
                onPress={() => Alert.alert("WIN")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#999',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        paddingHorizontal: 10,
        paddingTop: 55,
        paddingBottom: 15
    },
    wapper: {
        flex: 1,
        height: 12,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#999',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4
    },
    processBar: {
        backgroundColor: GREEN_COLOR,
        height: '100%',
        borderRadius: 6
    }
})
