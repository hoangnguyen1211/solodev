import React, { Component, Fragment } from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { WHITE_COLOR, BLACK_COLOR, ORANGE_COLOR, SKY_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';
import { OutlineButton, TextForm } from '../form';

class DragSortQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hintVisible: false
        }
    }

    _checkAnswer = (data) => {
        const { funcHandler } = this.props;
        let status = true;
        for (let index = 0; index < data.length; index++) {
            if ((index + 1) !== JSON.parse(data[index].orderIndex)) {
                status = false;
                break;
            }
        }
        funcHandler(data, status, true);
    }

    /**
     * Hàm refresh câu trả lời
     * Nguyễn Tiến Hoàng
     */
    _onRefresh = () => {
        const { funcHandler, items } = this.props;
        items.sort((item1, item2) => Math.random() - Math.random());
        funcHandler(items, false, false);
    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlock = () => {
        const { funcHandler, items } = this.props;
        items.sort((item1, item2) => item1.orderIndex - item2.orderIndex);
        funcHandler(items, true, true);
    }

    /**
     * Hàm show gợi ý
     * Nguyễn Tiến Hoàng
     */
    _onShowHint = () => {
        this.setState({ hintVisible: true });
    }

    _renderItem = ({ item, index, move, moveEnd, isActive }) => {
        const activeStyle = isActive ? {
            backgroundColor: ORANGE_COLOR,
            borderColor: ORANGE_COLOR,
            color: WHITE_COLOR
        } : {
                backgroundColor: WHITE_COLOR,
                borderColor: WHITE_COLOR,
                color: BLACK_COLOR
            }
        return (
            <TouchableOpacity
                style={[styles.itemAnswer, activeStyle]}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <TextForm style={styles.itemLabel}>{item.name}</TextForm>
            </TouchableOpacity>
        )
    }

    render() {
        const { items, hint } = this.props;
        const { hintVisible } = this.state;
        return (
            <Fragment>
                <View style={{ height: 60 * items.length }}>
                    <DraggableFlatList
                        contentContainerStyle={{
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            flex: 1
                        }}
                        data={items}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => `draggable-item-${index}`}
                        scrollPercent={2}
                        onMoveEnd={({ data }) => this._checkAnswer(data)}
                    />
                </View>
                <View style={{paddingHorizontal: 20}}>
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
                </View>
            </Fragment>
        )
    }
}

export default DragSortQuestion;

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
    }
})