import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GREEN_COLOR , WHITE_COLOR, BLACK_COLOR, GRAY_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';

export default class RadioAnswer extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkedIndex: -1
        }
    }

    _onPress = (item, index) => {
        const { funcHandler } = this.props;
        
        this.setState({
            checkedIndex: index
        });
        funcHandler(item.status);
    }

    render(){
        const { renderItems } = this.props;
        const { checkedIndex } = this.state;
        return (
            <View style={styles.container}>
                {
                    renderItems.map((item, index) => {
                        return <TouchableOpacity onPress={() => this._onPress(item, index)} key={index}>
                            <View style={[styles.itemAnswer, index ===  checkedIndex ? styles.itemChecked :  {} ]}>
                                <View style={[styles.circle, index ===  checkedIndex ? styles.circleChecked :  {} ]}></View>
                                <Text style={[styles.itemLabel]}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    itemAnswer: {
        borderWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: WHITE_COLOR,
        color: BLACK_COLOR
    },
    itemLabel: {
        fontSize: FONT_TEXT,
        color:  BLACK_COLOR,
        marginLeft: 10
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderColor: 'silver',
        borderWidth: 2
    },
    circleChecked: {
        borderWidth: 5,
        borderColor: GREEN_COLOR
    }
})

