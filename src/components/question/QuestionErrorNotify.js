import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { WHITE_COLOR, RED_COLOR } from '../../constants/ColorConstants';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { Icon } from 'react-native-elements';
import { ButtonQuestion } from '../../components/question';

const { height, width } = Dimensions.get('window');

export default class QuestionErrorNotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xValue: new Animated.Value(-height),
            bgColor: new Animated.Value(0),
            positionLine: new Animated.Value(0),
            scalePoint: new Animated.Value(0),
            message: ''
        }
    }

    _showErrorNotify = (message) => {
        Animated.timing(this.state.xValue, {
            toValue: 0,
            duration: 500
        }).start();

        Animated.timing(this.state.bgColor, {
            toValue: 6,
            duration: 1100
        }).start();

        Animated.timing(this.state.positionLine, {
            toValue: 3,
            duration: 700
        }).start();

        Animated.timing(this.state.scalePoint, {
            toValue: 1,
            duration: 700
        }).start();

        if (message) {
            this.setState({
                message: message
            });
        }
    }

    _hideErrorNotify = () => {
        Animated.timing(this.state.xValue, {
            toValue: -height,
            duration: 700
        }).start();

        this.setState({
            bgColor: new Animated.Value(0),
            positionLine: new Animated.Value(0),
            scalePoint: new Animated.Value(0),
            message: ''
        });

        this.props.funcHandler();
    }

    render() {
        const { xValue, scalePoint, message } = this.state;
        let bgColor = this.state.bgColor.interpolate({
            inputRange: [0, 4, 6],
            outputRange: [WHITE_COLOR, WHITE_COLOR, RED_COLOR]
        });
        let positionLine = this.state.positionLine.interpolate({
            inputRange: [0, 1, 3],
            outputRange: [-width / 2, -width / 4, 0]
        });
        return (
            <Animated.View style={[styles.container, { width: width, bottom: xValue }]}>
                <View style={styles.wapper}>
                    <Animated.Text style={[styles.messageStyle, {
                        transform: [
                            { scale: scalePoint }
                        ]
                    }]}>{message}</Animated.Text>
                    <Animated.View style={[styles.line, { left: positionLine }]}></Animated.View>
                    <Animated.View style={[styles.circlePoint, {
                        backgroundColor: bgColor,
                        transform: [
                            { translateY: -17 },
                            { scale: scalePoint }
                        ]
                    }]}>
                        <Text style={[styles.text, { color: WHITE_COLOR }]}>-</Text>
                        <Icon
                            name='bolt'
                            type='font-awesome'
                            color={WHITE_COLOR}
                            size={15}
                        />
                        <Text style={[styles.text, { color: WHITE_COLOR }]}>10</Text>
                    </Animated.View>
                </View>
                <ButtonQuestion
                    iconName="arrow-down"
                    funcHandler={this._hideErrorNotify}
                    backgroundColor={RED_COLOR}
                    disabled={true}
                    styleContainer={{ justifyContent: 'flex-end', marginRight: 20 }}
                />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'flex-end',
        shadowColor: '#999',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        justifyContent: 'flex-end',
        paddingBottom: 30,
        overflow: 'hidden'
    },
    wapper: {
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageStyle: {
        paddingHorizontal: '10%',
        marginVertical: 30,
        textAlign: 'center',
        fontSize: FONT_NORMAL
    },
    line: {
        height: 4,
        width: width,
        backgroundColor: RED_COLOR
    },
    circlePoint: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        borderWidth: 2,
        borderColor: RED_COLOR,
        backgroundColor: WHITE_COLOR,
        borderRadius: 20
    },
    text: {
        color: RED_COLOR,
        fontWeight: '600',
        fontSize: 16,
        marginHorizontal: 3
    }
})
