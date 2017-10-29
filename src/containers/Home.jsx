import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import PaymentPopUp from './../components/PaymentPopUp';

import logo from '../images/logo.png';

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
        <AppBar
          title={<img src={logo} height="60" weight="50" />}
          showMenuIconButton={false}
        >
          <div className='search-bar'>
            <AutoComplete
              dataSource={[]}
              inputStyle={{ color: 'white'}}
            />
            <IconButton
              iconStyle={{ color: 'white' }}
              iconClassName="material-icons"
            >
              search
            </IconButton>
          </div>
        </AppBar>
        <RaisedButton
          label="CLICK HERE SIMRAN"
          onClick={() => {
            this.setState({ dialog: true });
          }}
          style = {{
            marginLeft: '100px',
            marginTop: '100px',
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
