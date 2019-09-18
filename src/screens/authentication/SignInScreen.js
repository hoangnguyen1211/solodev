import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TitleForm, ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { ORANGE_COLOR, RED_COLOR, BLACK_COLOR, GRAY_COLOR } from '../../constants/ColorConstants';
import { GET_CODE_SCREEN, FORGOT_PASSWORD_SCREEN, APP_NAVIGATOR } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                email: '',
                password: ''
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
        navigation.navigate(APP_NAVIGATOR);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={ styles.titleStyle}>
                        <TextI18n langKey={'login'} />
                    </TitleForm>

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
                        <TextI18n langKey={'login'} />
                    </ButtonForm>

                    <TouchableOpacity onPress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}>
                        <TextForm style={{ textAlign: 'center', color: GRAY_COLOR, marginTop: 15 }}>
                            <TextI18n langKey={'forgot-pasword'} />
                        </TextForm>
                    </TouchableOpacity>

                    <View style={styles.textSignUp}>
                        <TextForm>
                            <TextI18n langKey={'no-account'} />
                        </TextForm>
                        <TouchableOpacity onPress={() => navigation.navigate(GET_CODE_SCREEN)}>
                            <TextForm style={styles.signUpNow}>
                                <TextI18n langKey={'register'} style={{ color: ORANGE_COLOR }} />
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
        color: BLACK_COLOR,
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
        color: RED_COLOR,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginLeft: 5
    }
})
