import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioForm, ButtonForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { EXPERIENCE_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class GetCodeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedValue: '',
            jobs: []
        }
    }

    componentDidMount = () => {
        this.setState({
            jobs: [
                { id: 'sv', name: 'Sinh viên' },
                { id: 'tn', name: 'Trái ngành' },
                { id: 'it', name: 'IT' }
            ]
        })
    }

    _changeInputHandler = (job) => {
        this.setState({
            checkedValue: job.id
        })
    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(EXPERIENCE_SCREEN, {
            jobId: this.state.checkedValue
        });
    }

    render() {
        const { jobs } = this.state;
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>
                    <TextForm style={styles.noteStyle}>
                        <TextI18n langKey={'job-question'} />
                    </TextForm>

                    <RadioForm
                        renderItems={jobs}
                        funcHandler={this._changeInputHandler}
                    />

                    <ButtonForm funcHandler={this._submitHandler}>
                        <TextI18n langKey={'next'} />
                    </ButtonForm>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noteStyle: {
        textAlign: 'center',
        paddingHorizontal: '10%',
        marginBottom: 30,
        fontWeight: '600'
    }
})
