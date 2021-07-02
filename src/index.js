import React from 'react';
import ReactDom from 'react-dom';

import Zoomie from './Zoom';

const App = () => {
  return(
    <>
      <Zoomie 
        sdkVersion="1.9.5"

        leaveUrl="https://zoomers.xyz" 
        
        meetingNumber={ 4149821362 } 
        passWord="0000" 
        role={ 1 } // { 0 } ?

        userName="The Mr Robot" 
      />
    </>
  ) 
};

ReactDom.render( <App />, document.getElementById( 'root' ) );

export default App;
