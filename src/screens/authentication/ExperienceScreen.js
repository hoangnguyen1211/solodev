import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { WHITE_COLOR } from '../../constants/ColorConstants';
import { CONFIRM_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class ExperienceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: '',
            question: ''
        }
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const jobId = navigation.getParam("jobId");
        switch (jobId) {
            case "sv":
                this.setState({ question: <TextI18n langKey={'student-question'} /> });
                break;
            case "tn":
                this.setState({ question: <TextI18n langKey={'job-question'} /> });
                break;
            case "it":
                this.setState({ question: <TextI18n langKey={'experience-question'} /> });
                break;
            default:
                break;
        }
    }

    _changeInputHandler = (name, text) => {
        this.setState({
            phone: text
        })
    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(CONFIRM_SCREEN);
    }

    render() {
        const { question } = this.state;
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TextForm style={styles.questionStyle}>
                        {question}
                    </TextForm>

                    <InputForm
                        placeholder="Enter the information"
                        type="text"
                        name="experience"
                        style={{ textAlign: 'center' }}
                        funcHandler={this._changeInputHandler}
                    />

                    <TextForm style={styles.noteStyle}>
                        <TextI18n langKey={'note-experience'} />
                    </TextForm>

                    <ButtonForm funcHandler={this._submitHandler}>
                        Hoàn tất
                    </ButtonForm>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: WHITE_COLOR,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 25
    },
    questionStyle: {
        textAlign: 'center',
        marginBottom: 20
    },
    noteStyle: {
        textAlign: 'center',
        paddingHorizontal: '10%',
        marginBottom: 15,
        fontSize: 13
    }
})
