import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LessonItem from './LessonItem';

export default LessonList = (props) => {
    const { lessons, navigation } = props;
    return (
        <View style={styles.container}>
            <FlatList
                data={lessons}
                renderItem={({ item, index }) =>
                    <View style={{ flex: 1 }}>
                        <LessonItem
                            lesson={item}
                            navigation={navigation}
                            total={lessons.length}
                            index={index + 1}
                        />
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                scrollEnabled={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    }
})