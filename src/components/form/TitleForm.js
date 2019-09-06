import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { FONT_TITLE } from '../../constants/FontConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';

export default TitleForm = (props) => {
    const { children, style } = props;

    return <Text style={[styles.labelStyle, style]}>
            {children}
        </Text>
}

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: FONT_TITLE,
        fontWeight: '600',
        color: BLACK_COLOR
    }
});


