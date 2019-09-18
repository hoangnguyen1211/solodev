import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, GRAY_COLOR, GRADIENT_COLOR } from '../../constants/ColorConstants';
import { TextForm } from './';

export default class RadioForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: -1
        }
    }

    _onSelected = (item, index) => {
        const { funcHandler } = this.props;
        this.setState({
            checkedIndex: index
        });
        funcHandler(item);
    }

    render() {
        const { renderItems, styleContianer } = this.props;
        const { checkedIndex } = this.state;
        return (
            <View style={[ styles.container, styleContianer ]}>
                {
                    renderItems.map((item, index) => {
                        return <TouchableOpacity key={index} onPress={() => this._onSelected(item, index)}>
                            <View style={[ styles.itemWrapper, checkedIndex == index ? styles.itemWrapperChecked : {} ]}>
                                <View style={[styles.itemCircle, checkedIndex == index ? styles.itemCircleChecked : {}]}></View>
                                <TextForm style={[styles.itemLabel, checkedIndex == index ? styles.itemLabelChecked : {}]}>
                                    {item.name}
                                </TextForm>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#dedede',
        borderColor: '#dedede',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    itemCircle: {
        width: 20,
        height: 20,
        borderColor: GRAY_COLOR,
        borderRadius: 10,
        borderWidth: 2
    },
    itemLabel: {
        color: GRAY_COLOR,
        fontWeight: '600',
        marginLeft: 10
    },
    itemCircleChecked: {
        borderWidth: 6
    }
})

