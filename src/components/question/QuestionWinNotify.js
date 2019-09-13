import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class QuestionWinNotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    _showOverlayNotify = () => {
        this.setState({
            isVisible: true
        })
    }

    _onAgainQuestion = () => {
        this.setState({
            isVisible: false
        })
    }

    _onNextQuestion = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Overlay
                isVisible={this.state.isVisible}
                windowBackgroundColor="rgba(0, 0, 0, .5)"
                overlayBackgroundColor="#fff"
                width={width * 0.8}
                height={height * 0.7}
            >
                <View style={ styles.wrapper }>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Success</Text>
                    <Text>Congratulations on reaching the finish line</Text>
                    <TouchableOpacity onPress={this._onAgainQuestion}>
                        <Text style={styles.button}>Làm lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onNextQuestion}>
                        <Text style={styles.button}>Qua bài kế tiếp</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        flex: 1,
        alignItems: 'stretch', 
        justifyContent: 'center' 
    },
    button:{
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#999',
        color: '#fff',
        textAlign: 'center'
    }
})
