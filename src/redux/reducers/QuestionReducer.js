import * as types from '../constants/QuestionType';

const initialState = {
    listQuestion: [],
    question: {},
    listCount: 0,
    currentIndex: 0
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REFRESH_QUESTION_ALL:
            return {
                ...state,
                listQuestion: [],
                question: {},
                listCount: 0,
                currentIndex: 0
            };
        case types.FECTH_QUESTION_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                listQuestion: data,
                listCount: data.length
            };
        case types.FECTH_QUESTION_BY_INDEX:
            let question = {};
            state.listQuestion.forEach((item, index) => {
                if (index === action.payload.index) {
                    question = { ...item };
                }
            });
            return {
                ...state,
                question,
                currentIndex: action.payload.index
            };
        case types.FECTH_QUESTION_CURRENT:
            return { ...state };
        case types.REFESH_QUESTION_CURENT_INDEX:
            return { ...state, currentIndex: 0 };
        default:
            return { ...state };
    }
}

export default questionReducer;