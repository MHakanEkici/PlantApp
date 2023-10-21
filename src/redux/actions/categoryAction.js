import constant from '../constants/categoryConstant';

const setCategories = categories => {
  return {
    type: constant.SET_CATEGORIES,
    payload: categories,
  };
};

export const categoryAction = {
  setCategories,
};
export default categoryAction;
