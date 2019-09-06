import * as types from '../constants/QuestionType';
import { getQuestionByLessonIdService } from '../../services/QuestionService';

export const fetchQuestion = (lessonId) => {
    return dispatch => {
        return getQuestionByLessonIdService(lessonId)
            .then(res => {
                dispatch({
                    type: types.FECTH_QUESTION_SUCCESS,
                    payload: {
                        data: res.data
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: types.FECTH_QUESTION_ERROR,
                    payload: {
                        error: error
                    }
                })
            })
    }
}

export const fetchQuestionByIndex = (index) => {
    return {
        type: types.FECTH_QUESTION_BY_INDEX,
        payload: {
            index: index
        }
    }
}