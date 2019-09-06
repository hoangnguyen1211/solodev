import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONT_TEXT } from '../../constants/FontConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';

export default TextForm = (props) => {
    const { children, style } = props;

    return <Text style={[styles.labelStyle, style]}>
                {children}
            </Text>
}

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: FONT_TEXT,
        color: BLACK_COLOR
    }
});