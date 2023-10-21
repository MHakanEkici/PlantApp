import constant from '../constants/onboardingConstants';

const setIsOnboardingSkipped = isOnboardSkipped => {
  return {
    type: constant.SET_IS_ONBOARDING_SKIPPED,
    payload: isOnboardSkipped,
  };
};

export const onboardingAction = {
  setIsOnboardingSkipped,
};
export default onboardingAction;
