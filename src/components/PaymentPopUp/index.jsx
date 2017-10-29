import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton';
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
      stepIndex: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ dialog: nextProps.dialog })
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
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
          <div>
            Select your payment method: <br/> <br/>
            <FlatButton
              target="_blank"
              label="Bitcoin"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            /> <br/>
            <FlatButton
              target="_blank"
              label="Ethereum"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            /> <br/>
            <FlatButton
              target="_blank"
              label="Litecoin"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        );

      case 1:
        return (
          <p>
            {'An ad group contains one or more ads which target a shared set of keywords.'}
          </p>
        );

      case 2:
        return (
          <p>
            {'Try out different ad text to see what brings in the most customers, and learn ' +
            'how to enhance your ads using features like ad extensions. If you run into any ' +
            'problems with your ads, find out how to tell if they\'re running and how to ' +
            'resolve approval issues.'}
          </p>
        );
    }
  }

  render () {
    const {stepIndex} = this.state;

    return (
      <Dialog
        open={this.state.dialog}
      >          


        {this.getStepContent(stepIndex)}

        <div className="popup-btn" style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onClick={this.handleNext}
          />
        </div>

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


      </Dialog>
    );
  }
}
