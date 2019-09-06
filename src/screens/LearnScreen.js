import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { COURSE_SCREEN } from '../constants/ScreenConstants';
import { getAllTopicService } from '../services/TopicService';
import { getMyCourseService } from '../services/CourseService';
import { COURSE_BACKGROUND } from '../constants/ColorConstants';
import { TopicList } from '../components/learning';
import { TextI18n } from '../components/language';
import { HeaderText } from '../components/screen';

export default class LearnScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderText langKey={'learn-tab'} />
    };
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
            mycourses: [],
            topics: []
        }
    }

    componentDidMount(){
        // Lấy danh sách chủ đề
        getAllTopicService()
        .then(response => {
            this.setState({topics: response ? response.data : []});
        })
        .catch(error => console.log(error));
        // Lấy danh sách khoá học của tôi
        getMyCourseService()
        .then(response => {
            this.setState({mycourses: response ? response.data : []});
        })
        .catch(error => console.log(error));
    }

    onSearch = value => {
        this.setState({
            txtSearch: value
        })
    }

    render() {
        const { txtSearch, topics, mycourses } = this.state;
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <SearchBar
                        lightTheme={true}
                        placeholder='Search...'
                        onChangeText={this.onSearch}
                        value={txtSearch}
                        containerStyle={styles.searchWapper}
                    />
                    <TopicList 
                        data={mycourses} 
                        navigation={navigation} 
                        title= { <TextI18n langKey={'my-course'} /> }
                        cycle={true}
                        // screen={LESSON_SCREEN} 
                    />
                    <TopicList 
                        data={topics} 
                        navigation={navigation} 
                        title= { <TextI18n langKey={'thematic'} /> } 
                        screen={COURSE_SCREEN}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: COURSE_BACKGROUND
    },
    searchWapper: {
        backgroundColor: '#fff',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    }
})