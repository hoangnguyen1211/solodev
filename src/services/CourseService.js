import axiosService from './AxiosService';
import { API_MY_COURSE, API_COURSE } from '../constants/ApiConstaints';

// Lấy danh sách khoá học của tôi
export const getMyCourseService = () => {
    return axiosService.get(API_MY_COURSE);
}

// Lấy danh sách khoá học theo chủ đề
export const getCourseByTopicIdService = (topicId) => {
    return axiosService.get(`${API_COURSE}?topicId=${topicId}`);
}