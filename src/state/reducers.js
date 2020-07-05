import constants from './constants';

const { SEARCH_FOCUS } = constants;

const initialState = {
  focus: false,
  search: '',
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        focus: action.focus,
      };
    default:
      return state;
  }
}

export default reducers;
