import {
  green600,
  green800,
  grey600,
  white,
  greenA200,
  greenA100,
  grey400,
  green200,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import { spacing, getMuiTheme } from 'material-ui/styles';

// greenA200 is the pink accent
const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: green800,
    primary2Color: green600,
    primary3Color: grey600,
    accent1Color: greenA200,
    accent2Color: greenA100,
    accent3Color: green200,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

export default getMuiTheme(rawBaseTheme);
