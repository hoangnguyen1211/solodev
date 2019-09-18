import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TitleForm, ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { BLACK_COLOR } from '../../constants/ColorConstants';
import { CHANGE_PASSWORD_SCREEN } from '../../constants/ScreenConstants';

export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    _changeInputHandler = (name, text) => {
        this.setState({
            phone: text
        })
    }

    _submitHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(CHANGE_PASSWORD_SCREEN);
    }

    render() {
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={styles.titleStyle}>
                        Xác thực
                    </TitleForm>

                    <InputForm
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        style={{ textAlign: 'center' }}
                        funcHandler={this._changeInputHandler}
                    />

                    <TextForm style={ styles.noteStyle }>
                        *Lưu ý:  Vui lòng nhập đúng số điện thoại thật của bạn để nhận mã xác thực miễn phí!
                    </TextForm>

                    <ButtonForm funcHandler={this._submitHandler}>
                        Get Code
                    </ButtonForm>
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
    noteStyle: { 
        textAlign: 'center', 
        paddingHorizontal: '10%',
        marginBottom: 15,
        fontSize: 13
    }
})
