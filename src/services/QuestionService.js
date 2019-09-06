import axiosService from './AxiosService';
import { API_QUESTION } from '../constants/ApiConstaints';

// Lấy danh sách bài học theo khoá học
export const getQuestionByLessonIdService = (lessonId) => {
    return axiosService.get(`${API_QUESTION}?lessonId=${lessonId}`);
}