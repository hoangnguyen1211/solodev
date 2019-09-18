import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR, ORANGE_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';
import { OutlineButton, TextForm } from '../form';

export default class RadioAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: -1,
            hintVisible: false
        }
    }

    /**
     * Hàm chọn câu trả lời, gọi callback _onSelectdAnswer từ component cha để cập nhật trạng thái
     * Nguyễn Tiến Hoàng
     */
    _onSelected = (item, index) => {
        const { funcHandler } = this.props;
        this.setState({
            checkedIndex: index
        });
        funcHandler(true, JSON.parse(item.status));
    }

    /**
     * Hàm refresh câu trả lời
     * Nguyễn Tiến Hoàng
     */
    _onRefresh = () => {
        const { funcHandler } = this.props;
        this.setState({
            checkedIndex: -1
        });
        funcHandler(false, JSON.parse(false));
    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlock = () => {
        const { renderItems, funcHandler } = this.props;
        const index = renderItems.findIndex(x => x.status == "true");
        this.setState({
            checkedIndex: index
        });
        funcHandler(true, JSON.parse(true));
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
        const { checkedIndex, hintVisible } = this.state;
        return (
            <Fragment>
                <View style={styles.container}>
                    {
                        renderItems.map((item, index) => {
                            return <TouchableOpacity onPress={() => this._onSelected(item, index)} key={index}>
                                <View style={[styles.itemAnswer, index === checkedIndex ? styles.itemChecked : {}]}>
                                    <View style={[styles.circleStyle, index === checkedIndex ? styles.circleChecked : {}]}>
                                        <View style={[styles.pointStyle, { display: index === checkedIndex ? 'flex' : 'none' }]}></View>
                                    </View>
                                    <TextForm style={[styles.itemLabel]}>
                                        {item.name}
                                    </TextForm>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </View>
                <View style={[ styles.hintStyle, { display: hintVisible ? 'flex' :'none' } ]}>
                    <TextForm>{ hint }</TextForm>
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
    circleStyle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderColor: 'silver',
        borderWidth: 1,
        padding: 4,
        backgroundColor: WHITE_COLOR
    },
    pointStyle: {
        backgroundColor: ORANGE_COLOR,
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    itemChecked: {
        borderColor: ORANGE_COLOR
    },
    circleChecked: {
        borderColor: ORANGE_COLOR
    }
})

