import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import EventInfo from './EventInfo';
import { useState } from 'react';

// add function called by location Marker
//set map center to lat/lng of location marker

const Map = ({ eventData }) => {
 
 const [locationInfo, setLocationInfo] = useState(null);
 const [mapCenter, setMapCenter] = useState({lat: 45.4369, lng: -122.5519});

 const changeMapCenter = (lat, lng) => {
  setMapCenter({lat: lat, lng: lng}); 
}



  const markers = eventData.map(event => {
    let coord = event.geometry[0].coordinates;
    return (     
    <LocationMarker
     key={event.id}
     lat={coord[1]}
     lng={coord[0]}
     onClick={() => { 
     setLocationInfo({ id: event.id, title: event.title })
     changeMapCenter(coord[1], coord[0]);
     }}
     />
    )
  })
  return (
    <div className='map'>
      <GoogleMapReact
      bootstrapURLKeys={{key:
      'AIzaSyCqpd6HePepmic0ab-1sgottUiryq3GJD4'}}
      center = { mapCenter }
      zoom = {12}
      >
        {markers}
      </GoogleMapReact>
    {locationInfo && <EventInfo key={`${locationInfo.title}-${locationInfo.id}`} info={locationInfo}/>}
    </div>
  )
}



export default Map;
