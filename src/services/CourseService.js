import data from '../database/db';
// Lấy danh sách khoá học của tôi
export const getMyCourseService = () => {
    try {
        return data.mycourses;
    } catch (error) {
        console.log(error)
    }
    return [];
}

// Lấy danh sách khoá học theo chủ đề
export const getCourseByTopicIdService = (topicId) => {
    try {
        return data.courses.filter(x => x.topicId == topicId);
    } catch (error) {
        console.log(error)
    }
    return [];
}