import * as types from '../constants/QuestionType';

const initialState = {
    listQuestion: [],
    question: {}
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FECTH_QUESTION_SUCCESS:
            console.log("GET ALL");
            
            return { ...state, listQuestion: action.payload.data };
        case types.FECTH_QUESTION_ERROR:
            return {...state};
        case types.FECTH_QUESTION_BY_INDEX:
                console.log("GET BY ID");
            const array = state.listQuestion.filter((item, index) => index === action.payload.index);
            return { ...state, question: array[0] };
        default:
            return {...state};
    }
}

export default questionReducer;