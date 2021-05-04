import React from 'react';
import ReactDom from 'react-dom';

import Zoomie from './Zoom';

const App = () => {
  return(
    <>
      <Zoomie 
        meetingNumber={ 4149821362 } 
        userName="The Mr Robot" 
        passWord="" 
        role={ 0 } 
      />
    </>
  ) 
};

ReactDom.render( <App />, document.getElementById( 'root' ) );

export default App;
