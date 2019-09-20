import data from '../database/db';

// Lấy danh sách bài học theo khoá học
export const getQuestionByLessonIdService = async (lessonId) => {
    try {
        return await data.questions.filter(x => x.id = lessonId);
    } catch (error) {
        console.log(error)
    }
    return [];;
}