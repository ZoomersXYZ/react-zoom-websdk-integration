// Add this, never use it client side in production
const API_KEY = '';
// Add this, never use it client side in production
const API_SECRET = '';
import React, { Component } from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import './Zoom.css'

const zoomMeeting = document.getElementById('zmmtg-root');


class Zoom extends Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      sdkVersion: props.sdkVersion || '1.9.5', 

      apiKey: props.apiKey || API_KEY, 
      apiSecret: props.apiSecret || API_SECRET, 

      leaveUrl: props.leaveUrl || 'https://zoomers.xyz', 
      meetingNumber: props.meetingNumber || '4149821362', 
      passWord: props.passWord || '0000', 
      role: props.role || 1,  

      userName: props.userName || 'Zoomers Web SDK User' 
    }
  };
  
  launchMeeting = () => { 
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
          isSupportAV: false, // messes display up
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
    ZoomMtg.setZoomJSLib( `https://source.zoom.us/${ this.state.sdkVersion }/lib`, '/av' );
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
    return (
      <></>
    )
  }
}

export default Zoom;
