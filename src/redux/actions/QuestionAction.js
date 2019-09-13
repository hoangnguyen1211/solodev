import * as types from '../constants/QuestionType';
import { getQuestionByLessonIdService } from '../../services/QuestionService';

export const fetchQuestion = (lessonId) => {
    return dispatch => {
        return getQuestionByLessonIdService(lessonId)
            .then(response => {
                dispatch({
                    type: types.FECTH_QUESTION_SUCCESS,
                    payload: {
                        data: response
                    }
                });
            })
            .then(() => {
                dispatch(fetchQuestionByIndex(0))
            })
            .catch(error => {
                console.log(error);
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

export const fetchQuestionCurrent = () => {
    return {
        type: types.FECTH_QUESTION_CURRENT
    }
}