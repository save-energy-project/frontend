import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';

import 'material-design-icons';

class Home extends Component {
  render () {
    return (
      <div>
        <AppBar
          title="L O G O"
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
