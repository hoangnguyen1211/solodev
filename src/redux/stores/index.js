import { createStore, applyMiddleware } from 'redux';
import appReducers from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(
        appReducers,
        applyMiddleware(thunk)
    );
    return store;
}

export default configureStore;