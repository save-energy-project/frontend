import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

import './popup.css';

export default class PaymentPopUp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
      stepIndex: 0,
      price: "", 
      currency: "",
      amount: ""
    }
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ dialog: nextProps.dialog })
  }

  handleNext(currency) {
    const {stepIndex} = this.state;

    if (currency=="Finish") {
      console.log(this.state.amount + " " + this.state.currency);
    }

    if (stepIndex < 1) {
      this.setState({ stepIndex: stepIndex + 1, currency: currency });
    } else {
      this.setState({ dialog: false, stepIndex: 0, currency: "" })
    }


  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    } else {
      this.setState({ dialog: false })
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="popup-main">
            Select your payment method: <br/> 
            <div className="popup-btns">
              <FlatButton
                target="_blank"
                label="Bitcoin"
                secondary={true}
                onClick={this.handleNext.bind(this, "Bitcoin")}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
              /> <br/>
              <FlatButton
                target="_blank"
                label="Ethereum"
                secondary={true}
                onClick={this.handleNext.bind(this, "Ethereum")}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
              /> <br/>
              <FlatButton
                target="_blank"
                label="Litecoin"
                secondary={true}
                onClick={this.handleNext.bind(this, "Litecoin")}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            Select your amount: <br/> <br/>

            <TextField
              hintText={
                this.state.amount == "" ? "Insert Amount Here" : ""} 
                value={this.state.ammount} 
                onChange={this.handleAmountChange.bind(this)}
            />
            {" " + this.state.currency}

          </div>
        );
    }
  }

  handleAmountChange(e) {
    this.setState( {amount: e.target.value} );
  }

  render () {
    const {stepIndex} = this.state;

    return (
      <Dialog
        open={this.state.dialog}
      >          
        {this.getStepContent(stepIndex)} <br/>
        <div className="popup-stepper">
          <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
            <Step>
              <StepLabel>Payment Method</StepLabel>
            </Step>
            <Step>
              <StepLabel>Finalize</StepLabel>
            </Step>
          </Stepper>
        </div>

        <div className="popup-btn">
          <FlatButton
            label={stepIndex === 0 ? 'Cancel' : 'Back'}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          {stepIndex === 1 ?           
            <RaisedButton
            label={'Pay'}
            primary={true}
            onClick={this.handleNext.bind(this, "Finish")}
            /> : null
          }
        </div>
      </Dialog>
    );
  }
  
}
