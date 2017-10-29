import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

var data = require('./../../data/test.json');

export default class Grid extends Component {
    render () {
      return (
        <div>
          <GridList
            style={{
              padding: '10px',
              overflowY: 'auto',
            }}
          >
            {data.map((item) => (
                    <GridTile
                      key={item.title}
                      title={<div style={{ marginLeft: '15px' }}>{item.title}</div>}
                      subtitle={
                        <div>
                          <FontIcon
                            style={{
                              color: 'white',
                              fontSize: '12px',
                              paddingRight: '5px',
                            }}
                            className="material-icons"
                          >
                            location_on
                          </FontIcon>
                          <span><b>{item.location}</b></span>
                        </div>
                      }
                      actionIcon={
                        <IconButton
                          iconStyle={{ color: 'white' }} iconClassName="material-icons">web</IconButton>
                      }
                    >
                      <img src={item.pictures[0]} />
                    </GridTile>
                  ))}
          </GridList>
        </div>
      );
    }
}
