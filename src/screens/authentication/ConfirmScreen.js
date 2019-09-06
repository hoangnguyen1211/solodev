import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { WHITE_COLOR } from '../../constants/ColorConstants';
import { SIGN_UP_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class ConfirmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }

    _changeInputHandler = (name, text) => {
        this.setState({
            code: text
        })
    }

    _onReSendCode = () => {

    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(SIGN_UP_SCREEN);
    }

    render() {
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={styles.titleStyle}>
                        <TextI18n langKey={'confirm'} />
                    </TitleForm>

                    <InputForm
                        placeholder="Code"
                        type="text"
                        name="code"
                        style={{ textAlign: 'center' }}
                        funcHandler={this._changeInputHandler}
                    />

                    <View style={styles.textSignUp}>
                        <TextForm>
                            <TextI18n langKey={'not-code'} />
                        </TextForm>
                        <TouchableOpacity onPress={() => this._onReSendCode()}>
                            <TextForm style={styles.signUpNow}>
                                <TextI18n langKey={'send-again'} />
                            </TextForm>
                        </TouchableOpacity>
                    </View>

                    <ButtonForm funcHandler={this._submitHandler}>
                        <TextI18n langKey={'send'} />
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
    textSignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25
    },
    signUpNow: {
        color: WHITE_COLOR,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginLeft: 5
    }
})
