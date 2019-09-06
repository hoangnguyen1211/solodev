import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import ImageTenor from '../../assets/icons/tenor.gif';
import { LESSON_SCREEN } from '../../constants/ScreenConstants';

export default CourseItem = (props) => {
    const { course, navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wapper}>
                <TouchableOpacity onPress={() => navigation.navigate(LESSON_SCREEN, {
                    courseId: course.id
                })}>
                    <Avatar
                        size='xlarge'
                        rounded
                        source={{ uri: course.image }}
                    />
                    <Text style={styles.title}>{course.numberLearned}/{course.totalLesson}</Text>
                </TouchableOpacity>
                <View style={[styles.overlay, { display: course.status === 'true' ? 'none' : '' }]}>
                    <Icon size={30} type='ionicon' name='ios-lock' color='#fff' />
                </View>
            </View>
            <View style={{ height: 30, width: 30, marginTop: 15 }}>
                <Image style={styles.image}
                    source={ImageTenor} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15
    },
    wapper: {
        alignItems: 'center',
        position: 'relative',
        borderRadius: 100,
        zIndex: 100,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#fff'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 111,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 2,
        borderRadius: 3,
        zIndex: 99
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        maxWidth: '100%'
    }
})