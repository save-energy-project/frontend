import React, { Component } from 'react';
import Header from './../components/Header';
import Grid from './../components/Home/Grid';

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <Grid />
      </div>
    )
  }
}

export default Home;
