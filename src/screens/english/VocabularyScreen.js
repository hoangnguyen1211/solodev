import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextForm } from '../../components/form';

export default class VocabularyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vocabularies: []
        }
    }

    componentDidMount = () => {
        this.setState({
            vocabularies: [
                { name: "abort", comment: "to end a program or a process before its completion",  content: "When the word processor application crashed, the user had to abort the program and lose all his unsaved changes." },
                { name: "bug", comment: "an error in a computer program",  content: "An average developer will create one bug for every 10 lines of code written." }
            ]
        })
    }

    render() {
        const { vocabularies } = this.state;
        return (
            <View>
                <FlatList
                    data={vocabularies}
                    renderItem={({ item, index }) => {
                        return <View>
                            <View>
                                <TextForm>{item.name}</TextForm>
                                <TextForm>{item.comment}</TextForm>
                            </View>
                            <View>

                            </View>
                        </View>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}
