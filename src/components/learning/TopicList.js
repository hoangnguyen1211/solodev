import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ToppicItem from './TopicItem';

export default TopicList = (props) => {
    const { data, cycle, screen, title, navigation } = props;
    return (
        <View style={[styles.wrapper, { marginTop: 10 }]}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <ToppicItem 
                        topic={item} 
                        cycle={cycle} 
                        navigation={navigation} 
                        screen={screen} 
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 5,
        paddingVertical: 8,
        backgroundColor: '#fff',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    title: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5
    }

})
