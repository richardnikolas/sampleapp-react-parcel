import { merge } from 'lodash';
import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const DEFAULT_THEME = Object.freeze({
  id: 'default',
  primary: '#023b56',
  secondary: '#7873AB'
});

export const createAppTheme = (color = DEFAULT_THEME) => {
  const configs = {
    name: color.id,
    palette: {
      primary: {
        main: color.primary
      },
      secondary: {
        main: color.secondary,
        contrastText: '#78E2D8'
      },
      text: {
        primary: '#3C3C3C',
        darkBlue: '#303E59',
        lightGray: '#8C8D8E'
      },
      error: {
        main: '#E91B0C'
      },
      disabled: {
        main: '#AAAAAA'
      },
      background: {
        main: '#D8CEF0',
        darkBlue: '#011e2c'
      }
    }
  };

  const theme = createTheme(merge({}, configs));

  return responsiveFontSizes(theme);
};

export default createAppTheme;