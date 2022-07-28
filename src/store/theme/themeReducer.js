import { SET_THEME } from './themeActions';

const initialTheme = 'light';

export const themeReducer = (state = initialTheme, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return payload;

    default:
      return state;
  }
};
