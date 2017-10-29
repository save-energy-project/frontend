import React, { Component } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Grid from './../components/Home/Grid';

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <Grid />
        <Footer />
      </div>
    )
  }
}

export default Home;
