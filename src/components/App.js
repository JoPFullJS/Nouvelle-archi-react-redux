import React, { Component } from 'react';
import '../assets/css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
         {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;