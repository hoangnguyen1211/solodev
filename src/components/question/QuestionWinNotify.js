import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import { ButtonForm, TitleForm } from '../form';
import { GREEN_COLOR } from '../../constants/ColorConstants';
import ImageCup from '../../assets/images/golden-cup.jpg';
import { LEARNING_PROCESS } from '../../constants/StorageConstants';
import { AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { QUESTION_SCREEN, LESSON_SCREEN } from '../../constants/ScreenConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';

class QuestionWinNotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.visible !== prevState.visible){
          return { isVisible: nextProps.visible };
       }
       else return null;
     }

    _onAgainQuestion = () => {
        const { navigation, refreshQuestionCurrentIndex }  = this.props;
        this.setState({
            isVisible: false
        });
        refreshQuestionCurrentIndex();
        navigation.navigate(QUESTION_SCREEN);
    }

    _onNextQuestion = () => {
        const { navigation }  = this.props;
        AsyncStorageGetData(LEARNING_PROCESS)
        .then(obj => {
            this.setState({
                isVisible: false
            });
            navigation.navigate(LESSON_SCREEN, { courseId: obj.courseId });
        });
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Overlay
                isVisible={this.state.isVisible}
                windowBackgroundColor="rgba(0, 0, 0, .5)"
                overlayBackgroundColor="#fff"
                width={width * 0.9}
                height={height * 0.8}
            >
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapperStyle}>
                        <Image source={ImageCup} style={styles.imageStyle}/>
                    </View>
                    <TitleForm style={styles.titleStyle}>Success</TitleForm>
                    <ButtonForm
                        funcHandler={this._onAgainQuestion}
                    >
                        Làm lại
                    </ButtonForm>
                    <ButtonForm
                        funcHandler={this._onNextQuestion}
                    >
                        Qua bài kế tiếp
                    </ButtonForm>
                </View>
            </Overlay>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshQuestionCurrentIndex: () => {
            dispatch(actions.refreshQuestionCurrentIndex());
        }
    }
}

export default connect(null, mapDispatchToProps)(QuestionWinNotify);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },
    titleStyle: {
        textAlign: 'center',
        marginBottom: 20,
        color: GREEN_COLOR
    },
    imageWrapperStyle: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 150,
        height: 150
    }
})
