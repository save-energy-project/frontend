import React, { Component } from 'react';
import Header from './../components/Header';
import Grid from './../components/Home/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import PaymentPopUp from './../components/PaymentPopUp';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dialog: false,
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Grid />
        <RaisedButton
          label="CLICK HERE SIMRAN"
          onClick={() => {
            this.setState({ dialog: true });
          }}
        />
        <PaymentPopUp
          dialog={this.state.dialog}
        />
      </div>
    )
  }
}

export default Home;
