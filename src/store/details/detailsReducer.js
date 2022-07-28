import {
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAILS,
  SET_NEIGHBOURS,
} from './detailsActions';

const initialState = {
  currentCountry: null,
  neighbours: [],
  status: 'idle',
  error: null,
};

export const detailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'loading',
      };

    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };

    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      };

    case CLEAR_DETAILS:
      return initialState;

    case SET_NEIGHBOURS:
      return {
        ...state,
        neighbours: payload,
      };

    default:
      return state;
  }
};
