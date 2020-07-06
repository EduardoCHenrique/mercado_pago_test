import constants from './constants';

const { SEARCH_FOCUS, INPUT_TEXT } = constants;

const initialState = {
  focus: false,
  inputText: ''
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        focus: action.focus ? action.focus : !state.focus
      };

    case INPUT_TEXT:
      return {
        ...state,
        inputText: action.text
      };
    default:
      return state;
  }
}

export default reducers;
