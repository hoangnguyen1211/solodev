import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { LessonList } from '../../components/learning';
import { COURSE_BACKGROUND } from '../../constants/ColorConstants';
import { getCourseByCourseIdService } from '../../services/LessonService';
import { HeaderText } from '../../components/screen';
import { AsyncStorageSetData, AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LEARNING_PROCESS } from '../../constants/StorageConstants';

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
    this.setState({lessons: getCourseByCourseIdService(courseId)});
    AsyncStorageGetData(LEARNING_PROCESS)
    .then(obj => {
      AsyncStorageSetData(LEARNING_PROCESS, { ...obj, courseId: courseId })
    })
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