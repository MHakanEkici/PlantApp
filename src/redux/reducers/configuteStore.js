import {categoryReducer, questionReducer} from '../reducers';

import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  categoryReducer,
  questionReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
