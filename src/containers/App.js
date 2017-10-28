import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from '../images/logo.svg';
import theme from '../global/material-ui-theme';

import '../styles/index.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar></AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
