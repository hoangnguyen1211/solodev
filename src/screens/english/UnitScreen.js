import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextForm } from '../../components/form';

export default class UnitScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: []
        }
    }

    componentDidMount = () => {
        this.setState({
            units: [
                { id: "1", title: "Welcome to English for IT" },
                { id: "2", title: "Introduction to Software" },
                { id: "3", title: "Operating Systems" },
                { id: "4", title: "Software Applications" },
                { id: "5", title: "IT Careers" }
            ]
        })
    }

    render() {
        const { units } = this.state;
        return (
            <View>
                <FlatList
                    data={units}
                    renderItem={({ item, index }) => {
                        return <View>
                            <View style={ styles.itemStyle }>
                                <TextForm>{`${index + 1}: ${item.name}`}</TextForm>
                            </View>
                        </View>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    itemStyle: {
        paddingVertical: 7
    }
})
