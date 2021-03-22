import React from 'react'
import Header from '../Header/Header';
import Map from '../Map/Map'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailLocation from '../DetailLocation/DetailLocation';

function Destination() {
  return (
  <>  
   {
          <Header/>
      }  
  <div style={{display:'flex'}}>
      
     

  <div className="mt-5" style={{width:'30%'}}>
{
    <DetailLocation/>
}
    </div>
 <div className="mt-5" style={{width:'60%'}}>
            <Map/>
      </div>

  </div>
</>
  );
}

export default Destination;
