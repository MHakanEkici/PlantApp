import constant from '../constants/categoryConstant';

const initialState = {
  categories: [],
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case constant.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export default categoryReducer;
