import React, { Component, createRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RadioAnswer, ProcessBar, ButtonQuestion, QuestionSuccessNotify, QuestionErrorNotify } from '../../components/question';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { SKY_COLOR } from '../../constants/ColorConstants';
import { QUESTION_SCREEN } from '../../constants/ScreenConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';

class SingleAnswerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedValue: false
        }

        this.errorComponent = createRef();
        this.sucessComponent = createRef();
    }

    _onSelectdAnswer = (value) => {
        this.setState({
            checkedValue: value
        })
    }

    _onAnswerChecked = () => {
        if (this.state.checkedValue) {
            this.sucessComponent.current._showSuccessNotify();
        }
        else {
            this.errorComponent.current._showErrorNotify(this.props.question.explain);
        }
    }

    _onNextQuestion = () => {
        const { navigation, questionTotal, currentIndex, getQuestionByIndex } = this.props;
        if (currentIndex < questionTotal) {
            getQuestionByIndex(currentIndex + 1);
            navigation.navigate(QUESTION_SCREEN);
        }
        else if(currentIndex < questionTotal){
            Alert.alert('SUCCESS');
        }
    }

    render() {
        const { checkedValue } = this.state;
        const { question } = this.props;
        return (
            <View style={styles.container}>
                <ProcessBar widthBar={10} />
                <View style={styles.wrapper}>
                    <Text style={styles.questionStyle}>
                        {question.exercise}
                    </Text>
                    <RadioAnswer
                        renderItems={question.answers ? question.answers : []}
                        funcHandler={this._onSelectdAnswer}
                    />
                </View>
                <ButtonQuestion
                    iconName="check"
                    disabled={checkedValue === '' ? true : false}
                    funcHandler={this._onAnswerChecked}
                    backgroundColor={SKY_COLOR}
                    styleContainer={{
                        position: 'absolute',
                        bottom: 40,
                        right: 20
                    }}
                />

                <QuestionErrorNotify ref={this.errorComponent} />
                <QuestionSuccessNotify funcHandler={this._onNextQuestion} ref={this.sucessComponent} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.questionReducer.question,
        questionTotal: state.questionReducer.listCount,
        currentIndex: state.questionReducer.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestionByIndex: index => {
            dispatch(actions.fetchQuestionByIndex(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnswerScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    questionStyle: {
        fontSize: FONT_NORMAL,
        marginBottom: 20
    }
});