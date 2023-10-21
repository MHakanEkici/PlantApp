import constant from '../constants/questionConstant';

const initialState = {
  questions: [],
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case constant.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
}

export default questionReducer;
