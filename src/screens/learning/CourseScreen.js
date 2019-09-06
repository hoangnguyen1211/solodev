import React, { Component } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import ImageBackgroud from '../../assets/images/background.jpg';
import { CourseList } from '../../components/learning';
import { getCourseByTopicIdService } from '../../services/CourseService';
import { HeaderText } from '../../components/screen';

export default class CourseScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderText langKey={'course-title'} />
    };
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount(){
        const topicId = this.props.navigation.getParam('id');
        // Lấy danh sách khoá học theo chủ đề
        getCourseByTopicIdService(topicId)
        .then(response => {
            this.setState({courses: response ? response.data : []});
        })
        .catch(error => console.log(error));
    }

    render() {
        const {courses} = this.state;
        const {navigation} = this.props;
        return (
            <ImageBackground style={{flex: 1}} source={ImageBackgroud}>
                <ScrollView>
                    <CourseList courses={courses} navigation={navigation} />
                </ScrollView>
            </ImageBackground>
        )
    }
}
