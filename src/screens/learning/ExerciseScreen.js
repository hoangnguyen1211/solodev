import React, { Component, createRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    RadioAnswer, CheckBoxAnswer, ProcessBar, DragSortQuestion,
    ButtonQuestion, QuestionSuccessNotify, QuestionErrorNotify
} from '../../components/question';
import { FONT_NORMAL } from '../../constants/FontConstants';
import { SKY_COLOR } from '../../constants/ColorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';

class ExerciseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedValue: '',
            question: {
                "id": "1",
                "document": "With ES6 generators, we have a different kind of function, which may be paused in the middle, one or many times, and resumed later, allowin...With ES6 generators, we have a different kind of function, which may be paused in the middle, one or many times, and resumed later, allowin...With ES6 generators, we have a different kind of function, which may be paused in the middle, one or many times, and resumed later, allowin...",
                "exercise": "A closing tag tells the web browser we want to finish displaying a webpage. To create a closing tag, we simply include a / sign after the <. Can you add the closing tag for this HTML tag?",
                "orderIndex": "1",
                "lessonId": "1",
                "type": "multi",
                "status": "false",
                "explain": "To create a closing tag, we simply include a / sign after the <.",
                "result": [1, 2, 3, 4],
                "answers": [
                    {
                        "id": 1,
                        "name": "Answer 01",
                        "status": "false"
                    },
                    {
                        "id": 2,
                        "name": "Answer 02",
                        "status": "false"
                    },
                    {
                        "id": 3,
                        "name": "Answer 03",
                        "status": "true"
                    },
                    {
                        "id": 4,
                        "name": "Answer 04",
                        "status": "false"
                    }
                ],
                "relatedExercises": [
                    {
                        "id": "1",
                        "content": "Related Question 01",
                        "orderIndex": "1",
                        "explain": "Explain Question 02",
                        "answers": [
                            {
                                "id": 1,
                                "name": "Answer 01",
                                "status": "false"
                            },
                            {
                                "id": 2,
                                "name": "Answer 02",
                                "status": "false"
                            },
                            {
                                "id": 3,
                                "name": "Answer 03",
                                "status": "true"
                            },
                            {
                                "id": 4,
                                "name": "Answer 04",
                                "status": "false"
                            }
                        ]
                    },
                    {
                        "id": "3",
                        "content": "Related Question 03",
                        "orderIndex": "3",
                        "explain": "Explain Question 02",
                        "answers": [
                            {
                                "id": 1,
                                "name": "Answer 01",
                                "status": "false"
                            },
                            {
                                "id": 2,
                                "name": "Answer 02",
                                "status": "false"
                            },
                            {
                                "id": 3,
                                "name": "Answer 03",
                                "status": "true"
                            },
                            {
                                "id": 4,
                                "name": "Answer 04",
                                "status": "false"
                            }
                        ]
                    },
                    {
                        "id": "2",
                        "content": "Related Question 02",
                        "orderIndex": "2",
                        "explain": "Explain Question 02",
                        "answers": [
                            {
                                "id": 1,
                                "name": "Answer 01",
                                "status": "false"
                            },
                            {
                                "id": 2,
                                "name": "Answer 02",
                                "status": "false"
                            },
                            {
                                "id": 3,
                                "name": "Answer 03",
                                "status": "true"
                            },
                            {
                                "id": 4,
                                "name": "Answer 04",
                                "status": "false"
                            }
                        ]
                    }
                ]
            }
        }

        this.errorComponent = createRef();
        this.sucessComponent = createRef();
    }

    componentDidMount = () => {
        // const { question, getQuestionByIndex } = this.props;
        // getQuestionByIndex(1);
        // this.setState({ question: question });
        // axios.get('http://localhost:3000/questions')
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }

    _onSelectdAnswer = (value) => {
        this.setState({
            checkedValue: value
        })
    }

    _onAnswerChecked = () => {
        if (this.state.checkedValue == "true") {
            console.log('OKI');

            this.sucessComponent.current._showSuccessNotify();
        }
        else {
            console.log('NO');
            this.errorComponent.current._showErrorNotify(this.state.question.explain);
        }
    }

    _renderAnswerView = (question) => {
        switch (question.type) {
            case "single":
                return <RadioAnswer
                            renderItems={question.answers ? question.answers : []}
                            funcHandler={this._onSelectdAnswer}
                        />
            case "multi":
                return <CheckBoxAnswer 
                            renderItems={question.answers ? question.answers : []}
                            funcHandler={this._onSelectdAnswer}
                        />
            case "drag": 
                return <DragSortQuestion 
                            renderItems={question.answers ? question.answers : []}
                            result={question.result}
                            funcHandler={this._onSelectdAnswer}
                        />
            default:
                break;
        }
    }

    render() {
        const { question, checkedValue } = this.state;
        return (
            <View style={styles.container}>
                <ProcessBar widthBar={10} />
                <View style={styles.wrapper}>
                    <Text style={styles.questionStyle}>
                        {question.exercise}
                    </Text>
                </View>
                { this._renderAnswerView(question) }
                <ButtonQuestion
                    iconName="check"
                    disabled={checkedValue === '' ? true : false}
                    funcHandler={this._onAnswerChecked}
                    backgroundColor={ SKY_COLOR }
                    styleContainer={{
                        position: 'absolute',
                        bottom: 40,
                        right: 20
                    }}
                />

                <QuestionErrorNotify ref={this.errorComponent} />
                <QuestionSuccessNotify ref={this.sucessComponent} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.questionReducer.question
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestionByIndex: (index) => {
            dispatch(actions.fetchQuestionByIndex(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen);

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