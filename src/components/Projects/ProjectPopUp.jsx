import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import ImageGallery from 'react-image-gallery';
import PaymentPopUp from './../PaymentPopUp';

import "react-image-gallery/styles/css/image-gallery.css";

export default class ProjectPopUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
      item: this.props.item,
      paymentDialog: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    const { dialog, item } = nextProps;
    this.setState({ dialog, item });
  }

  handleClose = () => {
    this.setState({ dialog: false });
  }

  createCarousel = () => {
    const { item } = this.state;
    const { pictures } = item;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    let i;
    const images = [];
    if (pictures) {
      for( i = 0; i < pictures.length; i++){
        images.push({
          original: pictures[i],
          thumbnail: pictures[i],
        })
      }
    }
    if (pictures && pictures.length > 0) {
      return (
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
        />
      );
    } else {
      return null;
    }
  }

  handleDonateClick = () => {
    this.setState({ paymentDialog: true });
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

    const { item, dialog } = this.state;
    return (
      <Dialog
        open={dialog}
        autoScrollBodyContent={true}
        onRequestClose={() => {
          this.setState({ dialog: false, })
        }}
      >
        <div className="dialog-header">
          <IconButton
            iconClassName="material-icons"
            onClick={this.handleClose}
          >
            close
          </IconButton>
        </div>

        <h2 style={{ display: 'inline-block', padding: '8px' }}>{item.title}</h2>
        <RaisedButton
          label="Donate"
          primary={true}
          onClick={this.handleDonateClick}
        />
        <p>{item.description}</p>
        <div className="progress">
          <div style={{ display: 'inline-block', paddingRight: '8px' }}> {item.current} </div>
          <LinearProgress
            mode="determinate"
            value={parseInt(item.current)}
            max={parseInt(item.goal)}
            color='#6dbc4d'
            style={{
              width: '500px',
              height: '10px',
              display: 'inline-block',
            }}
          />
          <div style={{ display: 'inline-block', paddingLeft: '8px' }}> {item.goal} </div>
        </div>
        <br />
        <br />
        {this.createCarousel()}
        <br/>
        <br/>
        <RaisedButton
          label="Donate"
          fullWidth={true}
          primary={true}
          onClick={this.handleDonateClick}
        />
        <PaymentPopUp
          dialog={this.state.paymentDialog}
        />
      </Dialog>
    );
  }
}
