import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TitleForm, ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { WHITE_COLOR } from '../../constants/ColorConstants';
import { JOB_SCREEN, SIGN_IN_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                email: '',
                password: '',
                fullname: ''
            }
        }
    }

    _changeInputHandler = (name, text) => {
        this.setState({
            account: { ...this.state.account, [name]: text }
        })
    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(JOB_SCREEN);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={styles.titleStyle}>
                        <TextI18n langKey={'account-info'} />
                    </TitleForm>

                    <InputForm
                        placeholder="Name"
                        type="text"
                        name="fullname"
                        funcHandler={this._changeInputHandler}
                    />

                    <InputForm
                        placeholder="Email"
                        type="text"
                        name="email"
                        funcHandler={this._changeInputHandler}
                    />

                    <InputForm
                        placeholder="Password"
                        type="password"
                        name="password"
                        funcHandler={this._changeInputHandler}
                    />

                    <ButtonForm funcHandler={this._submitHandler}>
                        <TextI18n langKey={'next'} />
                    </ButtonForm>

                    <View style={styles.textSignUp}>
                        <TextForm>
                            <TextI18n langKey={'has-account'} />
                        </TextForm>
                        <TouchableOpacity onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
                            <TextForm style={styles.signUpNow}>
                                <TextI18n langKey={'login'} />
                            </TextForm>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 20
    },
    textSignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    signUpNow: {
        color: WHITE_COLOR,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginLeft: 5
    }
})
