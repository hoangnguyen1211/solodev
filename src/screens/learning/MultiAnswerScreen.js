import React, { Component, createRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
    CheckBoxAnswer, 
    ProcessBar, 
    ButtonQuestion, 
    QuestionSuccessNotify, 
    QuestionErrorNotify,
    QuestionWinNotify
} from '../../components/question';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { ORANGE_COLOR } from '../../constants/ColorConstants';
import { QUESTION_SCREEN } from '../../constants/ScreenConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';

class MultiAnswerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedValue: false,
            selected: false,
            question: this.props.question,
            winVisible: false
        }

        this.errorComponent = createRef();
        this.sucessComponent = createRef();
    }

    _onSelectedAnswer = (arrayAnswers, value, status) => {
        this.setState({
            checkedValue: value,
            selected: status,
            question: { ...this.state.question, answers: arrayAnswers }
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
        if ((currentIndex + 1) < questionTotal) {
            getQuestionByIndex(currentIndex + 1);
            navigation.navigate(QUESTION_SCREEN);
        }
        else if((currentIndex + 1) === questionTotal){
            this.setState({
                winVisible: true
            })
        }
    }

    /**
     * Phương thức random câu hỏi liên quan khi user trả lời sai
     * Người tạo: Nguyễn Tiến Hoàng
     */
    _onRandomQuestion = () => {
        // Lấy ra danh sách câu hỏi liên quan
        const relatedQuetions = this.props.question.relatedExercises;
        // Thực hiện random => Lấy ra câu hỏi đầu tiên
        relatedQuetions.sort((item1, item2) => Math.random() - Math.random());
        this.setState({
            question: relatedQuetions[0]
        })
    }

    render() {
        const { selected, question, winVisible } = this.state;
        const { currentIndex, questionTotal, navigation } = this.props;
        const widthBar = Math.ceil((currentIndex + 1) / questionTotal * 90);
        
        return (
            <View style={styles.container}>
                <ProcessBar widthBar={widthBar} navigation={navigation} />
                <View style={styles.wrapper}>
                    <Text style={styles.questionStyle}>
                        {question.quiz}
                    </Text>
                    <CheckBoxAnswer
                        renderItems={question.answers}
                        hint={question.hint}
                        funcHandler={this._onSelectedAnswer}
                    />
                </View>
                <ButtonQuestion
                    iconName="check"
                    disabled={selected}
                    funcHandler={this._onAnswerChecked}
                    backgroundColor={ORANGE_COLOR}
                    styleContainer={{
                        position: 'absolute',
                        bottom: 40,
                        right: 20
                    }}
                />

                <QuestionErrorNotify ref={this.errorComponent} funcHandler={this._onRandomQuestion} />
                <QuestionSuccessNotify funcHandler={this._onNextQuestion} ref={this.sucessComponent} />
                <QuestionWinNotify visible={winVisible} navigation={navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MultiAnswerScreen);

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