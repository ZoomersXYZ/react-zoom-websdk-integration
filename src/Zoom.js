// Add this, never use it client side in production
const API_KEY = '';
// Add this, never use it client side in production
const API_SECRET = '';
import React, { Component } from 'react';
import { ZoomMtg } from "@zoomus/websdk";
// import { TextField, Button, Card } from "@material-ui/core";
import './Zoom.css'

const zoomMeeting = document.getElementById('zmmtg-root');


class Zoom extends Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      meetingLaunched: false,
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      meetingNumber: '4149821362',
      userName: 'Mr Robot',
      passWord: '',
      leaveUrl: 'https://zoomers.xyz',
      role: 1
    }
  };
  
  launchMeeting = () => {    
    this.setState( { 
      meetingLaunched: !this.state.meetingLaunched 
    } );
    const meetConfig = {
      meetingNumber: this.state.meetingNumber,
      passWord: this.state.passWord,
      userName: this.state.userName,
      apiKey: this.state.apiKey,        
    };

    ZoomMtg.generateSignature( {            
      meetingNumber: this.state.meetingNumber,
      passWord: this.state.passWord,
      userName: this.state.userName,
      apiKey: this.state.apiKey,
      apiSecret: this.state.apiSecret,
      role: this.state.role,
      
      success ( res )  {
        console.log( 'signature', res.result );
        ZoomMtg.init( {
          leaveUrl: 'localhost', 
          // isSupportAV: false, // messes display up
          debug: true, 
          disableJoinAudio: true, 
          disableCallOut: true, 
          disableRecord: true, 

          success() {
            ZoomMtg.join(                            
              {
                meetingNumber: meetConfig.meetingNumber,
                userName: meetConfig.userName,
                signature: res.result,
                apiKey: meetConfig.apiKey,
                userEmail: '',
                passWord: meetConfig.passWord,
                success() {
                  console.log( 'Meeting Joined' );
                },
                error( res ) {
                  console.log( res );
                }
              }
            );
          },
          error( res ) {
            console.log( res );
          } 
        } );
      }
    } );
  };
  
  componentDidMount() {
    ZoomMtg.setZoomJSLib( 'https://source.zoom.us/1.8.6/lib', '/av' );
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    this.launchMeeting();
  }

  handleChange = ( e ) => {
    this.setState( { [ e.target.name ]: e.target.value } )
  }

  render() {
    if ( zoomMeeting != null ) {
      zoomMeeting.style.height = '1920px';
      zoomMeeting.style.width = '1080px';
      zoomMeeting.style.position = 'relative';
      zoomMeeting.style.zIndex = '1';
      zoomMeeting.style.margin = '0%'
    }
    // const { meetingLaunched, userName, meetingNumber, passWord } = this.state;
    return (
      <>
        {/* { !meetingLaunched ?
          <form className="form">
            <TextField type="text" placeholder="Username" name="userName" value={ userName } onChange={ this.handleChange } />
            <TextField type="text" placeholder="Meeting Number" name="meetingNumber" value={ meetingNumber } onChange={ this.handleChange } />
            <TextField type="text" placeholder="Password" name="passWord" value={ passWord } onChange={ this.handleChange } />

            <Button variant="contained" color="primary" className="launchButton" onClick={this.launchMeeting }>Launch Meeting</Button>
          </form> 
        :   
          <></>
        } */}
      </>
    )
  }
}

export default Zoom;
