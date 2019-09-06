import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';
import { ButtonQuestion, ProcessBar } from '../../components/question';
import { EXERCISE_SCREEN } from '../../constants/ScreenConstants';
import { AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LESSON_ID } from '../../constants/StorageConstants';

class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {}
        }
    }

    componentDidMount = async () => {
        const { question, getQuestionByIndex, getListQuestionByLessonId } = this.props;
        AsyncStorageGetData(LESSON_ID)
        .then((lessonId) => {
            getListQuestionByLessonId(lessonId);
            this.setState({ question: question });
            getQuestionByIndex(1);
        })
        .catch(error => console.log(error));
    }

    _onToExercise = () => {
        const { navigation } = this.props;
        navigation.navigate(EXERCISE_SCREEN);
    }

    render() {
        const { question } = this.state;
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
    return {
        question: state.questionReducer.question
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