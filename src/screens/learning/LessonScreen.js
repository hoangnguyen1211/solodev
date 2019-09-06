import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { LessonList } from '../../components/learning';
import { COURSE_BACKGROUND } from '../../constants/ColorConstants';
import { getCourseByCourseIdService } from '../../services/LessonService';
import { HeaderText } from '../../components/screen';

export default class LessonScreen extends Component {
  static navigationOptions = {
      headerTitle: <HeaderText langKey={'lesson-title'} />
  };
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    };
  }

  componentDidMount(){
    const courseId = this.props.navigation.getParam('courseId');
    // Lấy danh sách khoá học theo chủ đề
    getCourseByCourseIdService(courseId)
    .then(response => {
        this.setState({lessons: response ? response.data : []});
    })
    .catch(error => console.log(error));
}

  render() {
    const { lessons } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView style={{ backgroundColor: COURSE_BACKGROUND }}>
        <LessonList lessons={lessons} navigation={navigation} />
      </ScrollView>
    )
  }
}