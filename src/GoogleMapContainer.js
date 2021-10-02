import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from './config';


const MapContainer = (props) => {
  console.log(props);
  const mapStyles = {        
    height: "50vh",
    width: "100%"
  };

  const locations = [
    {
      name: props.name,
      location: { 
        lat: parseFloat(props.lat),
        lng: parseFloat(props.lng)
      },
    }
  ];

  const defaultCenter = {
    lat: parseFloat(props.lat), lng: parseFloat(props.lng)
  }
  
  return (
   
     <LoadScript
       googleMapsApiKey={config.config.googleMapApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        />
        {/* marker is not working on developer mode APi */}
        {
            locations.map(item => {
              return (
                <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </LoadScript>
   
  )
}

export default MapContainer;