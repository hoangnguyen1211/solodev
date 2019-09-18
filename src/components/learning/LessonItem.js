import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { QUESTION_NAVIGATOR } from '../../constants/ScreenConstants';
import { COURSE_BACKGROUND, GREEN_COLOR, WHITE_COLOR, BLUE_COLOR } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';
import { AsyncStorageSetData, AsyncStorageGetData } from '../../asyncstorage/AsyncStorage';
import { LEARNING_PROCESS } from '../../constants/StorageConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionAction';

const LessonItem = (props) => {
  const { lesson } = props;
  const { width } = Dimensions.get('window');

  const _navigateQuestionScreen = () => {
    // Lấy thông tin từ Async Store
    AsyncStorageGetData(LEARNING_PROCESS)
    .then(obj => {
      // Kiểm tra nêú lessonId thay đổi
      if(obj.lessonId && (obj.lessonId !== lesson.id)){
        // Gọi redux đặt lại mặc định cho state của question reducer
        refeshQuestionAll();
      }
      // Thêm lessonId vào object trong Async Store
      AsyncStorageSetData(LEARNING_PROCESS, { ...obj, lessonId: lesson.id })
      .then(() => {
        // Chuyển qua mà hình câu hỏi
        props.navigation.navigate(QUESTION_NAVIGATOR);
      })
      .catch(error => console.log(error));
    });
  }

  const renderBox = (wapperBG, iconBG, iconName, isRedirect) => {
    return (
      <TouchableOpacity onPress={
        isRedirect ? () => _navigateQuestionScreen() : _ => _}>
        <View style={[{ height: width / 3, backgroundColor: wapperBG }, styles.wapper]}>
          <View style={[styles.process, { backgroundColor: iconBG }]}>
            <Icon
              name={iconName}
              type='foundation'
              size={15}
              color="#fff"
            />
          </View>
          <Text style={styles.title}>{lesson.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const getProcess = () => {
    if (lesson.isActive == 'true' && lesson.status == 'true') {
      return renderBox(WHITE_COLOR, GREEN_COLOR, 'check', true);
    }
    else if (lesson.isActive == 'false' && lesson.status == 'true') {
      return renderBox(WHITE_COLOR, BLUE_COLOR, 'loop', true);
    }
    else {
      return renderBox('#ddd', '#999', 'lock', false);
    }
  }

  return (
    <View style={[styles.container]}>
      {getProcess()}
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return {
      refeshQuestionAll: () => {
          dispatch(actions.refreshQuestionAll());
      }
  }
}

export default connect(null, mapDispatchToProps)(LessonItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COURSE_BACKGROUND,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    flex: 1
  },
  wapper: {
    padding: 10,
    width: '100%',
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
  },
  process: {
    width: 25,
    height: 25,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#666'
  }
});

