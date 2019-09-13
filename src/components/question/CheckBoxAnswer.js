import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GREEN_COLOR, WHITE_COLOR, BLACK_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';
import { Icon } from 'react-native-elements';

export default class CheckBoxAnswer extends Component {

    constructor(props) {
        super(props);
    }

    _onSelected = (item, index) => {
        const { funcHandler, renderItems } = this.props;
        let result = true;

        // Hàm cập nhật lại trạng thái checked cho từng phần tử
        // Trả về mảng mới sau khi người dùng click vào checkbox
        const newArray = renderItems.map((element, eleIndex) => {
            // Kiểm tra vị trí người dùng đang click => Cập nhật lại trạng thái checked
            if (eleIndex === index) {
                // Kiểm tra lựa chọn của user đáp án xem có giống với không
                return { ...element, checked: !element.checked }
            }
            // Nếu không trùng vị trí index thì không cập nhật
            return { ...element, checked: (element.checked ? element.checked : false) }
        });
        
        for(let i = 0; i < newArray.length; i++){
            if(newArray[i].checked !== JSON.parse(newArray[i].status)){
                result = false;
                break;
            }
        }
        funcHandler(newArray, result);
    }

    render() {
        const { renderItems } = this.props;
        
        return (
            <View style={styles.container}>
                {
                    renderItems.map((item, index) => {
                        return <TouchableOpacity onPress={() => this._onSelected(item, index)} key={index}>
                            <View style={[styles.itemAnswer]}>
                                <View style={[styles.itemAnswerSelected]}>
                                    <View style={[styles.itemChecked]}></View>
                                    <Icon
                                        containerStyle={[
                                            { display: item.checked ? 'flex' : 'none' },
                                            styles.iconStyle
                                        ]}
                                        name='check'
                                        type='font-awesome'
                                        color={GREEN_COLOR}
                                        size={18}
                                        iconStyle={{ zIndex: 100 }}
                                    />
                                </View>
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
        color: BLACK_COLOR,
        zIndex: 1
    },
    itemLabel: {
        fontSize: FONT_TEXT,
        color: BLACK_COLOR,
        marginLeft: 10
    },
    itemAnswerSelected: {
        width: 22,
        height: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 99
    },
    itemChecked: {
        width: 18,
        height: 18,
        borderRadius: 2,
        borderColor: 'silver',
        borderWidth: 2
    },
    iconStyle: {
        position: 'absolute',
        top: 0,
        left: 5,
        zIndex: 100
    }
})

