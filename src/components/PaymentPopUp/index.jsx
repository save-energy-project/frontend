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

    if (currency === "Finish") {
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
    this.state.amount=""
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    } else {
      this.setState({ dialog: false })
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        const BitcoinIcon = (props) => (
          <SvgIcon {...props}>
          </SvgIcon>
        );
        const EtherIcon = (props) => (
          <SvgIcon {...props}>
          </SvgIcon>
        );
        const LitecoinIcon = (props) => (
          <SvgIcon {...props}>
          </SvgIcon>
        );
        return (
          <div className="popup-main">
            Select your payment method: <br/> 
            <div className="popup-btns">
              <FlatButton
                target="_blank"
                label="Bitcoin"
                secondary={true}
                onClick={this.handleNext.bind(this, "Bitcoin")}
                // icon={<BitcoinIcon />}
              /> <br/>
              <FlatButton
                target="_blank"
                label="Ethereum"
                secondary={true}
                onClick={this.handleNext.bind(this, "Ether")}
                // icon={<EtherIcon />}
              /> <br/>
              <FlatButton
                target="_blank"
                label="Litecoin"
                secondary={true}
                onClick={this.handleNext.bind(this, "Litecoin")}
                // icon={<LitecoinIcon />}
              />
            </div>
          </div>
        );

      case 1:
        var currencyConverter = {};
        currencyConverter["Bitcoin"] = 5803.64;
        currencyConverter["Ether"] = 305.63;
        currencyConverter["Litecoin"] = 55.04;
        return (
          <div>

            Select your amount in crypto or USD: <br/> <br/>

            <TextField
              floatingLabelText=""
              hintText={this.state.amount === "" ? "Insert Amount Here" : ""} 
              value={this.state.ammount} 
              onChange={this.handleAmountChange.bind(this)}
            />
            {" " + this.state.currency}
            <br/>
            {"or"}
            <br/>
            {currencyConverter[this.state.currency]*this.state.amount + " USD"}
          </div>
        );

      default:
        return (
          <div>
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
