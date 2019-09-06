import { combineReducers } from "redux";
import questionReducer from './QuestionReducer';

const appReducers = combineReducers({
    questionReducer
});

export default appReducers;