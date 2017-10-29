import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

export default class ProjectPopUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
      item: this.props.item,
    }
  }

  componentWillReceiveProps (nextProps) {
    const { dialog, item } = nextProps;
    this.setState({ dialog, item });
  }

  handleClose = () => {
    this.setState({ dialog: false });
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <Dialog
        actions={actions}
        open={this.state.dialog}
        onRequestClose={() => {
          this.setState({ dialog: false, })
        }}
      >
        {this.state.item.title}
      </Dialog>
    );
  }
}
