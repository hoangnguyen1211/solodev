import { AsyncStorageSetData, AsyncStorageGetData } from '../asyncstorage/AsyncStorage';
import { LEARNING_PROCESS } from '../constants/StorageConstants';

/**
 * Phương thức lấy ra danh sách các khoá học đã hoàn thành
 */
export const getListCurrentCourse = (courseId) => {
    AsyncStorageGetData(LEARNING_PROCESS)
    .then(res => {
        return res.find(x => JSON.parse(x.courseId) === courseId);
    })
    .catch(error => console.log(error));
    return [];
}

export const setListCurrentCourse = (courseId) => {
    AsyncStorageGetData(LEARNING_PROCESS)
    .then(res => {
        AsyncStorageSetData(LEARNING_PROCESS, {
            topicId: topicId
        });
    })
    .catch(error => console.log(error));
}