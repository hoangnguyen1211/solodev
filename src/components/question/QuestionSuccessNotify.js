import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { GREEN_COLOR, WHITE_COLOR } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';
import ButtonQuestion from './ButtonQuestion';

const { height, width } = Dimensions.get('window');

export default class QuestionSuccessNotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xValue: new Animated.Value(-height),
            bgColor: new Animated.Value(0),
            positionIcon: new Animated.Value(60),
            positionLine: new Animated.Value(0),
            scalePoint: new Animated.Value(0)
        }
    }

    _showSuccessNotify = (questionIndex) => {
        Animated.timing(this.state.xValue, {
            toValue: 0,
            duration: 500
        }).start();

        Animated.timing(this.state.bgColor, {
            toValue: 6,
            duration: 1100
        }).start();

        Animated.timing(this.state.positionIcon, {
            toValue: -30,
            duration: 1200
        }).start();

        Animated.timing(this.state.positionLine, {
            toValue: 3,
            duration: 1000
        }).start();

        Animated.timing(this.state.scalePoint, {
            toValue: 1,
            duration: 1000
        }).start();

        
    }

    _hideSuccessNotify = () => {
        Animated.timing(this.state.xValue, {
            toValue: -height,
            duration: 700
        }).start();

        this.setState({
            bgColor: new Animated.Value(0),
            positionIcon: new Animated.Value(60),
            positionLine: new Animated.Value(0)
        });

        this.props.funcHandler();
    }

    render() {
        let bgColor = this.state.bgColor.interpolate({
            inputRange: [0, 4, 6],
            outputRange: [WHITE_COLOR, WHITE_COLOR, GREEN_COLOR]
        });
        let positionLine = this.state.positionLine.interpolate({
            inputRange: [0, 1, 3],
            outputRange: [-width / 2, -width / 4, 0]
        });
        const { xValue, positionIcon, scalePoint } = this.state;
        return (
            <Animated.View style={[styles.container, { width: width, bottom: xValue }]}>
                <View style={styles.wapper}>
                    <Animated.View style={[styles.flag, {
                        transform: [
                            { translateY: positionIcon }
                        ]
                    }]}>
                        <Text style={styles.flagItem}>\</Text>
                        <Text style={styles.flagItem}>|</Text>
                        <Text style={styles.flagItem}>/</Text>
                    </Animated.View>
                    <Animated.View style={[styles.line, { left: positionLine }]}></Animated.View>
                    <Animated.View style={[styles.circlePoint, {
                        backgroundColor: bgColor,
                        transform: [
                            { translateY: -17 },
                            { scale: scalePoint }
                        ]
                    }]}>
                        <Text style={[styles.text, { color: WHITE_COLOR }]}>+</Text>
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
                    iconName="arrow-right"
                    funcHandler={this._hideSuccessNotify}
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
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        height: 4,
        width: width,
        backgroundColor: GREEN_COLOR
    },
    circlePoint: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        borderWidth: 2,
        borderColor: GREEN_COLOR,
        backgroundColor: WHITE_COLOR,
        borderRadius: 20
    },
    text: {
        color: GREEN_COLOR,
        fontWeight: '600',
        fontSize: 16,
        marginHorizontal: 3
    },
    flag: {
        height: 20,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    flagItem: {
        color: GREEN_COLOR,
        fontWeight: 'bold',
        fontSize: 20
    },
    btnNext: {
        padding: 15,
        marginTop: 10,
        backgroundColor: GREEN_COLOR,
        color: WHITE_COLOR
    }
})
