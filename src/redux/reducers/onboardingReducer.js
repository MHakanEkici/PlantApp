import constant from '../constants/onboardingConstants';

const initialState = {
  isOnboardSkipped: true,
};

export function onboardingReducer(state = initialState, action) {
  switch (action.type) {
    case constant.SET_IS_ONBOARDING_SKIPPED:
      return {
        ...state,
        isOnboardSkipped: action.payload,
      };

    default:
      return state;
  }
}

export default onboardingReducer;
