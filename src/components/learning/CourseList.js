import React from 'react';
import { FlatList } from 'react-native';
import CourseItem from './CourseItem';

export default CourseList = (props) => {
        const { courses, navigation } = props;
        return (
            <FlatList
                data={courses}
                renderItem={
                    ({ item }) => 
                        <CourseItem course={item} navigation={navigation} 
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
            />
        )     
}
