import React from 'react'
import ReactDom from 'react-dom'

import Zoomie from './Zoom';

const App = () => {
  return(
    <>
      <>
        <Zoomie 
          meetingNumber={ 9686065478 } 
          userName="The Mr Robot" 
          passWord="" 
          role={ 0 } 
        />
      </>
    </>
  ) 
};

ReactDom.render( <App />, document.getElementById( 'root' ) );

export default App;
