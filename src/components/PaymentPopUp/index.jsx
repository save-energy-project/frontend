import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class PaymentPopUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ dialog: nextProps.dialog })
  }
  handleClose = () => {
    this.setState({ dialog: false })
  }
  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <Dialog
        actions={actions}
        open={this.state.dialog}
      />
    );
  }
}
