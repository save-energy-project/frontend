import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from '../routes';

import logo from '../images/logo.svg';
import theme from '../global/material-ui-theme';

import '../styles/index.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
