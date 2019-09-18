import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';
import { ButtonQuestion, ProcessBar } from '../../components/question';
import { AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LEARNING_PROCESS } from '../../constants/StorageConstants';
import { 
    SINGLE_ANSWER_SCREEN, 
    MULTI_ANSWER_SCREEN, 
    DRAG_SORT_ANSWER_SCREEN,
    ENTER_ANSWER_SCREEN
} from '../../constants/ScreenConstants';

class QuestionScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const { getListQuestionByLessonId, currentIndex } = this.props;
        if (currentIndex == 0) {
            AsyncStorageGetData(LEARNING_PROCESS)
                .then(obj => {
                    getListQuestionByLessonId(obj.lessonId);
                })
                .catch(error => console.log(error));
        }
    }

    _onToExercise = () => {
        const { navigation, question } = this.props;
        switch (question.type) {
            case 'single':
                return navigation.navigate(SINGLE_ANSWER_SCREEN);
            case 'multi':
                return navigation.navigate(MULTI_ANSWER_SCREEN);
            case 'drag':
                return navigation.navigate(DRAG_SORT_ANSWER_SCREEN);
            case 'enter':
                return navigation.navigate(ENTER_ANSWER_SCREEN);
            default:
                break;
        }
    }

    render() {
        const { question, currentIndex, questionTotal, navigation } = this.props;
        const widthBar = Math.ceil((currentIndex + 1) / questionTotal * 90);
        return (
            <View style={styles.container}>
                <ProcessBar widthBar={widthBar} navigation={navigation} />
                <View style={styles.wrapper}>
                    <Text style={styles.documentStyle}>
                        {question ? question.document : ""}
                    </Text>
                </View>
                <ButtonQuestion
                    iconName="arrow-right"
                    funcHandler={this._onToExercise}
                    disabled={true}
                    styleContainer={{
                        position: 'absolute',
                        bottom: 40,
                        right: 20
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        padding: 20,
        shadowColor: BLACK_COLOR,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 }
    },
    documentStyle: {
        fontSize: FONT_NORMAL,
        color: BLACK_COLOR
    }
});

const mapStateToProps = state => {
    return {
        question: state.questionReducer.question,
        currentIndex: state.questionReducer.currentIndex,
        questionTotal: state.questionReducer.listCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListQuestionByLessonId: (lessonId) => {
            dispatch(actions.fetchQuestion(lessonId));
        },
        getQuestionByIndex: index => {
            dispatch(actions.fetchQuestionByIndex(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);