import constants from './constants';

const { SEARCH_FOCUS, INPUT_TEXT } = constants;

export const toggleSearchFocus = (focus) => {
  return {
    type: SEARCH_FOCUS,
    focus
  };
}

export const setInputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
}