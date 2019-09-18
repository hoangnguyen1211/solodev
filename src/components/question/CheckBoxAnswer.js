import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SKY_COLOR, WHITE_COLOR, BLACK_COLOR, ORANGE_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';
import { Icon } from 'react-native-elements';
import { OutlineButton, TextForm } from '../form';

export default class CheckBoxAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hintVisible: false
        }
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

        // Kiểm tra câu trả lời đúng hay chưa
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].checked !== JSON.parse(newArray[i].status)) {
                result = false;
                break;
            }
        }
        funcHandler(newArray, result, true);
    }

    /**
     * Hàm refresh câu trả lời
     * Nguyễn Tiến Hoàng
     */
    _onRefresh = () => {
        const { funcHandler, renderItems } = this.props;
        const newArray = renderItems.map(item => {
            return { ...item, checked: false };
        });
        funcHandler(newArray, false, false);
    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlock = () => {
        const { funcHandler, renderItems } = this.props;
        const newArray = renderItems.map(item => {
            let status = JSON.parse(item.status);
            return { ...item, checked: status };
        });
        funcHandler(newArray, true, true);
    }

    /**
     * Hàm show gợi ý
     * Nguyễn Tiến Hoàng
     */
    _onShowHint = () => {
        this.setState({ hintVisible: true });
    }

    render() {
        const { renderItems, hint } = this.props;
        const { hintVisible } = this.state;
        return (
            <Fragment>
                <View style={styles.container}>
                    {
                        renderItems.map((item, index) => {
                            return <TouchableOpacity onPress={() => this._onSelected(item, index)} key={index}>
                                <View style={[styles.itemAnswer, { borderColor: item.checked ? ORANGE_COLOR : WHITE_COLOR }]}>
                                    <View style={[styles.itemAnswerSelected]}>
                                        <View style={[styles.itemChecked]}></View>
                                        <Icon
                                            containerStyle={[
                                                { display: item.checked ? 'flex' : 'none' },
                                                styles.iconStyle
                                            ]}
                                            name='check'
                                            type='font-awesome'
                                            color={ORANGE_COLOR}
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
                <View style={[styles.hintStyle, { display: hintVisible ? 'flex' : 'none' }]}>
                    <TextForm>{hint}</TextForm>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                    <OutlineButton
                        buttonStyle={{ marginRight: 5 }}
                        funcHandler={this._onShowHint}>
                        Hint
                    </OutlineButton>
                    <OutlineButton funcHandler={this._onRefresh}>Refresh</OutlineButton>
                    <OutlineButton
                        buttonStyle={{ marginLeft: 5 }}
                        funcHandler={this._onUnlock}>
                        Unlock
                    </OutlineButton>
                </View>
            </Fragment>
        )
    }

}

const styles = StyleSheet.create({
    itemAnswer: {
        borderWidth: 2,
        borderColor: WHITE_COLOR,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 7,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: WHITE_COLOR,
        color: BLACK_COLOR,
        zIndex: 1,
        shadowColor: BLACK_COLOR,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5
    },
    itemLabel: {
        fontSize: FONT_TEXT,
        color: BLACK_COLOR,
        marginLeft: 10
    },
    hintStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: '#f2f2f2'
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

