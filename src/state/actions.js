import constants from './constants';

const { SEARCH_FOCUS } = constants;

export const toggleSearchFocus = (focus) => {
  return {
    type: SEARCH_FOCUS,
    focus,
  };
}