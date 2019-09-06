import React from 'react';
import { Text } from 'react-native';
import { TextI18n } from '../language';

export default HeaderText = (props) => {
    const { langKey } = props;
    return (
        <Text style={{ fontWeight: '600', textAlign: 'center', fontSize: 16 }}>
            <TextI18n langKey={langKey.toString()}/>
        </Text>
    )
}
