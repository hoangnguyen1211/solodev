import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TextForm, OutlineButton } from '../form';
import { BLACK_COLOR, ORANGE_COLOR } from '../../constants/ColorConstants';

export default class EnterAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            test: []
        }
    }

    componentDidMount = () => {
        const { answers } = this.props;
        const { test } = this.state;
        // Tạo mảng kết quả trả lời
        for (let index = 0; index < answers.length; index++) {
            test.push('');
        }

        this.setState({
            test
        });
    }

    /**
     * Hàm xử lý khi người dùng nhập đáp án
     * Nguyễn Tiến  Hoàng
     */
    _enterAnswer = (text, index) => {
        const { test } = this.state;
        const { answers, funcHandler } = this.props;
        let checked = true;

        test[index] = text.toLowerCase();
        this.setState({ test });

        // Kiểm tra đáp án
        for (let index = 0; index < answers.length; index++) {
            if (answers[index].name.toLowerCase() !== test[index]) {
                checked = false;
                break;
            }
        }
        funcHandler(checked, true);
    }

    /**
     * Hàm xử lý khi người dùng chọn đáp án
     * Nguyễn Tiến Hoàng
     */
    _onChooseAnswer = (text) => {
        const { test } = this.state;
        const { answers, funcHandler } = this.props;
        let checked = true;

        // Set lựa chọn cho ô input
        for (let index = 0; index < answers.length; index++) {
            if (test[index].length > 0) {
                continue;
            }
            else {
                test[index] = text;
                break;
            }
        }
        this.setState({ test });
        // Kiểm tra đáp án
        for (let index = 0; index < answers.length; index++) {
            if (answers[index].name.toLowerCase() !== test[index]) {
                checked = false;
                break;
            }
        }
        funcHandler(checked, true);
    }

    /**
     * Hàm refresh câu trả lời
     * Nguyễn Tiến Hoàng
     */
    _onRefresh = () => {
        const { test } = this.state;
        for (let index = 0; index < test.length; index++) {
            test[index] = '';
        }
        this.setState({ test });
        funcHandler(false, false);
    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlock = () => {
        const { answers, funcHandler } = this.props;
        const { test } = this.state;
        for (let index = 0; index < answers.length; index++) {
            test[index] = answers[index].name;
        }
        this.setState({ test });
        funcHandler(true, true);
    }

    _renderQuiz = () => {
        const { test } = this.state;
        const { quiz } = this.props;
        // Thay thế thẻ <br> bằng \n
        const result = quiz.trim().replace(/(<br>|<\/br>)/g, '\n');
        // Cắt chuỗi câu hỏi
        var arrQuiz = result.split(/\[[[1-9]*}}/g);
        return <Fragment>
            {
                arrQuiz.map((item, index) => {
                    if (index < arrQuiz.length - 1) {
                        return <Fragment key={index}>
                            <TextForm style={styles.textStyle}>{item.trim()}</TextForm>
                            <TextInput
                                name={'answer' + index}
                                style={styles.inputStyle}
                                onChangeText={(text) => this._enterAnswer(text, index)}
                                value={test[index]}
                            />
                        </Fragment>
                    }
                    return <TextForm style={styles.textStyle} key={index}>{item.trim()}</TextForm>
                })
            }
        </Fragment>
    }

    _renderHint = () => {
        const { hints } = this.props;
        return hints.map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => this._onChooseAnswer(item)}>
                <TextForm style={styles.answerTextStyle}>{item}</TextForm>
            </TouchableOpacity>
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.wrapperStyle}>
                    {this._renderQuiz()}
                </View>
                <View 
                    style={ styles.answerStyle }>
                    {this._renderHint()}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                    <OutlineButton funcHandler={this._onRefresh}>Refresh</OutlineButton>
                    <OutlineButton
                        buttonStyle={{ marginLeft: 5 }}
                        funcHandler={this._onUnlock}>
                        Unlock
                    </OutlineButton>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 20
    },
    wrapperStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    answerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        justifyContent: 'center',
        borderColor: ORANGE_COLOR,
        borderWidth: 1,
        shadowColor: BLACK_COLOR,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4
    },
    answerTextStyle: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: BLACK_COLOR,
        fontSize: 14,
        fontWeight: '600'
    },
    textStyle: {
        lineHeight: 30,
        fontSize: 14,
        color: BLACK_COLOR
    },
    inputStyle: {
        paddingHorizontal: 5,
        height: 20,
        borderBottomWidth: 1,
        borderBottomColor: BLACK_COLOR,
        minWidth: 30,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '600',
        margin: 10
    },
    hintStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: '#f2f2f2'
    }
})
