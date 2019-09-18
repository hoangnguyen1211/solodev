import * as types from '../constants/QuestionType';
import { getQuestionByLessonIdService } from '../../services/QuestionService';

export const fetchQuestion = (lessonId) => {
    return dispatch => {
        return getQuestionByLessonIdService(lessonId)
            .then(response => {
                dispatch({
                    type: types.FECTH_QUESTION_SUCCESS,
                    payload: {
                        data: response.sort((item1, item2) => Math.random() - Math.random())
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

export const refreshQuestionAll = () => {
    return {
        type: types.REFRESH_QUESTION_ALL
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

export const refreshQuestionCurrentIndex = () => {
    return {
        type: types.REFESH_QUESTION_CURENT_INDEX
    }
}