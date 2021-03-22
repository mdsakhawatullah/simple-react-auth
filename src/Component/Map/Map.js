import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 23.7104,
    lng: 90.40744
  };
  
  function Map() {
    return (
        <div className="justify-content-md-center"> 
      <LoadScript
        googleMapsApiKey="AIzaSyAtZx6gsbQc1S2o6vVYyw7Xxqu4STQ5BF4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    )
  }
  
  export default React.memo(Map)