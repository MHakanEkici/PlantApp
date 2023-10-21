import constant from '../constants/questionConstant';

const setQuestions = categories => {
  return {
    type: constant.SET_QUESTIONS,
    payload: categories,
  };
};

export const questionAction = {
  setQuestions,
};
export default questionAction;
