import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';
import { ButtonQuestion, ProcessBar } from '../../components/question';
import { AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LESSON_ID, QUESTION_INDEX } from '../../constants/StorageConstants';

class QuestionScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const { getListQuestionByLessonId, currentIndex } = this.props;
        if(currentIndex === 0){
            AsyncStorageGetData(LESSON_ID)
            .then(lessonId => {
                getListQuestionByLessonId(lessonId);
            })
            .catch(error => console.log(error));
        }
    }

    _onToExercise = () => {
        const { navigation, question } = this.props;
        switch (question.type) {
            case 'single':
                return navigation.navigate('SingleAnswerScreen');
            case 'multi':
                return navigation.navigate('MultiAnswerScreen');
            case 'drag':
                return navigation.navigate('');
            default:
                break;
        }
    }

    render() {
        const { question } = this.props;
        return (
            <View style={styles.container}>
                <ProcessBar widthBar={10} />
                <View style={styles.wrapper}>
                    <Text style={styles.documentStyle}>
                        {question ? question.document : ""}
                    </Text>

                </View>
                <ButtonQuestion
                    iconName="arrow-right"
                    funcHandler={this._onToExercise}
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
    console.log(state);
    
    return {
        question: state.questionReducer.question,
        currentIndex: state.questionReducer.currentIndex
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