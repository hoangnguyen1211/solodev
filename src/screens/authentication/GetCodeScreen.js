import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TitleForm, ButtonForm, InputForm, TextForm } from '../../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../../constants/StyleConstants';
import { WHITE_COLOR } from '../../constants/ColorConstants';
import { CONFIRM_SCREEN } from '../../constants/ScreenConstants';
import { TextI18n } from '../../components/language';

export default class GetCodeScreen extends Component {
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
        navigation.navigate(CONFIRM_SCREEN);
    }

    render() {
        return (
            <View style={[STYLE_CONTAINER]}>
                <View style={[STYLE_WAPPER]}>

                    <TitleForm style={styles.titleStyle}>
                        <TextI18n langKey={'register-free'} />
                    </TitleForm>

                    <InputForm
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        style={{ textAlign: 'center' }}
                        funcHandler={this._changeInputHandler}
                    />

                    <TextForm style={ styles.noteStyle }>
                        <TextI18n langKey={'note-phone'} />
                    </TextForm>

                    <ButtonForm funcHandler={this._submitHandler}>
                        <TextI18n langKey={'get-code'} />
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
    noteStyle: { 
        textAlign: 'center', 
        paddingHorizontal: '10%',
        marginBottom: 15,
        fontSize: 13
    }
})
