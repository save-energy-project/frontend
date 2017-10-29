import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import logo from '../images/logo.png';

export default class Header extends Component {
  render () {
    return (
      <AppBar
        title={<img src={logo} height="60" weight="50" />}
        showMenuIconButton={false}
        iconElementRight={<Avatar
          size={45}
        >
          A
        </Avatar>}
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
    );
  }
}
