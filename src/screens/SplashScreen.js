import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APP_COLOR } from '../constants/ColorConstants';
import { LANGUAGE_SCREEN } from '../constants/ScreenConstants';

const WELCOME_TEXT = 'SOLO DEV';

class SplashScreen extends Component {
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                1500
            )
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate(LANGUAGE_SCREEN);
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.textStyles}>
                    {WELCOME_TEXT}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: APP_COLOR
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default SplashScreen;