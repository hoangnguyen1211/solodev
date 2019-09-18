import data from '../database/db';

// Lấy danh sách bài học theo khoá học
export const getQuestionByLessonIdService = async (lessonId) => {
    try {
        const questions = await data.questions.filter(x => x.id = lessonId);
        return questions;
    } catch (error) {
        console.log(error)
    }
    return [];;
}