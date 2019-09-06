import React, { Component, Fragment } from 'react';
import I18n from '../../i18n/i18n';
import { AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LANGUAGE_STORAGE } from '../../constants/StorageConstants';

export default class TextI18n extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i18n: I18n
        }
    }

    componentDidMount = async () => {
		const language  = await AsyncStorageGetData(LANGUAGE_STORAGE);
		if (language) this.setMainLocaleLanguage(language);
	}

    setMainLocaleLanguage = language => {
		let i18n = this.state.i18n;
        i18n.locale = language.toString();
		this.setState({ i18n });
    }

    render() {
        const { langKey } = this.props;
        const { i18n } = this.state;
        return (
            <Fragment>
                { langKey ? i18n.t(langKey) : this.props.children }
            </Fragment>
        )
    }
}
