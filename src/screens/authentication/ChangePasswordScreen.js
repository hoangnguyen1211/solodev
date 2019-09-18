import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonForm, InputForm, TextForm, TitleForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { WHITE_COLOR, RED_COLOR, BLACK_COLOR } from '../../constants/ColorConstants';
import { SIGN_UP_SCREEN, SIGN_IN_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                code: '',
                password: '',
                confirm: ''
            }
        }
    }

    _changeInputHandler = (name, text) => {
        this.setState({
            info: { ...this.state.info, [name]: text }
        })
    }

    _onReSendCode = () => {

    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(SIGN_UP_SCREEN);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={styles.titleStyle}>
                        Đổi mật khẩu
                    </TitleForm>

                    <InputForm
                        placeholder="Code"
                        type="text"
                        name="code"
                        style={{ textAlign: 'center' }}
                        funcHandler={this._changeInputHandler}
                    />

                    <View style={styles.textSignUp}>
                        <TextForm>Bạn chưa nhận được mã?</TextForm>
                        <TouchableOpacity onPress={() => this._onReSendCode()}>
                            <TextForm style={styles.signUpNow}>
                                Gửi lại
                            </TextForm>
                        </TouchableOpacity>
                    </View>

                    <InputForm
                        placeholder="Mật khẩu mới"
                        type="password"
                        name="password"
                        funcHandler={this._changeInputHandler}
                    />

                    <InputForm
                        placeholder="Nhập lại mật khẩu"
                        type="password"
                        name="confirm"
                        funcHandler={this._changeInputHandler}
                    />

                    <ButtonForm funcHandler={this._submitHandler}>
                        Cập nhật
                    </ButtonForm>
                    <TouchableOpacity onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
                        <TextForm style={{ textAlign: 'center', color: WHITE_COLOR, marginTop: 15 }}>
                            <TextI18n langKey={'back-login'} />
                        </TextForm>
                    </TouchableOpacity>
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
        marginBottom: 25
    },
    textSignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25
    },
    signUpNow: {
        color: RED_COLOR,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginLeft: 5
    }
})
