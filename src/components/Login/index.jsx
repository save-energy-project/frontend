import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Bitcoin from './../../images/logo.svg';
import SvgIcon from 'material-ui/SvgIcon';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

import logo from '../../images/logo.png';

import './login.css';

export default class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
      stepIndex: 0,
      price: "",
      currency: "",
      amount: ""
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ dialog: nextProps.dialog })
  }

  handleClick() {
    window.location = '/home';
  }

  render () {
    return (
      <Card className="login-card">
        <div className="login-box">
          <img style={{ display: 'inline-block' }} src={logo} alt="logo" height="90"/> <br/>
          <TextField
            hintText=""
            floatingLabelText="Username"
          /><br />
          <TextField
            hintText=""
            floatingLabelText="Password"
            type="password"
          /><br /> <br />
          <RaisedButton label="Sign in" primary={true} onClick={this.handleClick.bind(this)}/>
        </div>
      </Card>
    );
  }

}
