import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { LanguageButton } from '../components/language';
import { TextForm, TitleForm } from '../components/form';
import { STYLE_CONTAINER, STYLE_WAPPER } from '../constants/StyleConstants';
import { AUTH_NAVIGATOR } from '../constants/ScreenConstants';
import { LANGUAGE_STORAGE } from '../constants/StorageConstants';
import { AsyncStorageSetData } from '../asyncstorage/AsyncStorage';

export default class LanguageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languges: [
                { id: 'vi', name: 'Vietnamese', icon: require('../assets/icons/vietnam.png') },
                { id: 'en', name: 'English', icon: require('../assets/icons/uk.png') },
                { id: 'jp', name: 'Japanese', icon: require('../assets/icons/japan.png') }
            ]
        }
    }

    _onSelectedLanguage = (language) => {
        const { navigation } = this.props;
        // Lưu mã ngôn ngữ xuống AsyncStorage
        AsyncStorageSetData(LANGUAGE_STORAGE, language.id);
        // Chuyển qua màn hình đăng nhập
        navigation.navigate(AUTH_NAVIGATOR);
    }

    render() {
        const { languges } = this.state;
        return (
            <View style={[ STYLE_CONTAINER, styles.container ]}>
                <View style={[ STYLE_WAPPER, styles.wapper ]}>
                    <TitleForm style={styles.title}>
                        Display language
                    </TitleForm>
                    <TextForm style={styles.text}>
                        Selecting the right language for you will help the application display exactly what you need.
                    </TextForm>
                    <FlatList
                        data={languges}
                        renderItem={({ item, index }) => 
                            <LanguageButton
                                language = { item }
                                funcHandler = { this._onSelectedLanguage }
                            >
                            { item.name }
                            </LanguageButton>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    text: {
        textAlign: "center",
        marginBottom: 30
    }
})
