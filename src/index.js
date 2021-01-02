import React from 'react'
import ReactDom from 'react-dom'

import Zoomie from './Zoomus';

const App = () => {
  return(
    <>
      <script src="https://source.zoom.us/1.8.1/lib/vendor/jquery.min.js"></script>
      <>
        <Zoomie 
          meetingNumber={ 9686065478 } 
          userName="ssgear456@gmail.com" 
          passWord="2401234" 
          role={ 0 } 
        />
      </>
    </>
  ) 
};

ReactDom.render( <App />, document.getElementById( 'root' ) );

export default App;
