import axiosService from './AxiosService';
import { API_LESSON } from '../constants/ApiConstaints';

// Lấy danh sách bài học theo khoá học
export const getCourseByCourseIdService = (courseId) => {
    return axiosService.get(`${API_LESSON}?courseId=${courseId}`);
}