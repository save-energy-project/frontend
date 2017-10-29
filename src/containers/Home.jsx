import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';

import logo from '../images/logo.png';

class Home extends Component {
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

    </div>
    )
  }
}

export default Home;
