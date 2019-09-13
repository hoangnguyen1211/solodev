import data from '../database/db';

// Lấy danh sách bài học theo khoá học
export const getCourseByCourseIdService = (courseId) => {
    try {
        return data.lessons.filter(x => x.id = courseId);
    } catch (error) {
        console.log(error)
    }
    return [];
}