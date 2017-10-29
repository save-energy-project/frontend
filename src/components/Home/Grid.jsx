import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ProjectPopUp from './../Projects/ProjectPopUp';

var data = require('./../../data/test.json');

export default class Grid extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clickedItem: {},
      dialogStatus: false,
    }
  }
    onIconClick = (item) => {
      this.setState({
        clickedItem: item,
        dialogStatus: true,
      });
    }
    render () {
      return (
        <div>
          <GridList
            style={{
              padding: '10px',
              overflowY: 'auto',
            }}
          >
            {data.map((item) => {
              return (
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
                      iconStyle={{ color: 'white' }}
                      onClick={() => {
                        this.onIconClick(item)
                      }} iconClassName="material-icons">info_outline</IconButton>
                  }
                >
                  <img src={item.pictures[0]} />
                </GridTile>
              );
            })}
          </GridList>

          <ProjectPopUp
            dialog={this.state.dialogStatus}
            item={this.state.clickedItem}
          />
        </div>
      );
    }
}
