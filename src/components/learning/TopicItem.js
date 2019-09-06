import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

export default TopicItem = (props) => {
    const { cycle, topic, navigation, screen } = props;
    const { width } = Dimensions.get('window');
    const imgSize = Math.floor(width / 3);
    const containerStyle = {
        height: imgSize,
        width: imgSize,
    }

    const _onNavigateScreen = () => {
        navigation.navigate(screen, {
            id: topic.id
        });
    }

    return (
        <TouchableOpacity onPress={() => _onNavigateScreen()}>
            <View style={{ marginBottom: 12 }}>
                <View style={[styles.container, containerStyle]}>
                    <View style={cycle ? [styles.line, { borderRadius: imgSize / 2 }] : ''}>
                        <View style={cycle ? { borderRadius: imgSize / 2, overflow: 'hidden' } : ''}>
                            <Avatar
                                size='small'
                                source={{ uri: topic.image }}
                                containerStyle={styles.image}
                            />
                        </View>
                    </View>
                </View>
                <Text style={{ textAlign: 'center' }}>{topic.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 6
    },
    line: {
        padding: 4,
        borderColor: '#dadada',
        borderWidth: 3
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
