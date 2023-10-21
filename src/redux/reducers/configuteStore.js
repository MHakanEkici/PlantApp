import {categoryReducer, questionReducer, onboardingReducer} from '../reducers';

import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  categoryReducer,
  questionReducer,
  onboardingReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
