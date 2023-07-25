import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import EventInfo from './EventInfo';
import { useState, useEffect } from 'react';
import { parsePoints, testRecenter } from '../map-utils/utils';

const Map = ({ eventData, loading, setLocationInfo, locationInfo }) => {

  const [mapCenter, setMapCenter] = useState({lat: 45.4369, lng: -122.5519});
 const [filteredFires, setFilteredFires] = useState([])
 const [zoomState, setZoomState] = useState(10)
 const [markerSize, setMarkerSize] = useState(20)
 
 const changeMapCenter = (lat, lng) => {
  setMapCenter({lat: lat, lng: lng}); 
}

useEffect(() => {
  
  const callParse = (eventData, zoomState, mapCenter) => {
   const {filteredLat, markerSize} = parsePoints(eventData, zoomState, mapCenter)
   setFilteredFires(filteredLat)
   setMarkerSize(markerSize)
  }
if (loading === false && eventData.length !== 0) {
  callParse(eventData, zoomState, mapCenter)
}

}, [eventData, mapCenter, zoomState, loading])

  const markers = filteredFires.map((event, idx) => {
    let coord = event.geometry[0].coordinates;
    return (     
    <LocationMarker
     key={event.id}
     lat={coord[1]}
     lng={coord[0]}
     idx={idx}
     size={markerSize}
     onClick={() => { 
     setLocationInfo({ id: event.id, title: event.title, link: event.sources[0].url })
     changeMapCenter(coord[1], coord[0]);
     }}
     />
    )
  })

  return (
    <div className='map'>
      <GoogleMapReact
      bootstrapURLKeys={{key:
      process.env.REACT_APP_GOOGLE_KEY}}
      defaultCenter={{lat: 45.4369, lng: -122.5519}}
      onDragEnd={(e) => testRecenter(e, changeMapCenter)}
      onZoomAnimationEnd={(e) => setZoomState(e)}
      center = { mapCenter }
      defaultZoom={10}
      zoom={zoomState}
      disableDefaultUI={true}
      >
        {markers}
      </GoogleMapReact>
    {locationInfo && <EventInfo key={`${locationInfo.title}-${locationInfo.id}`} info={locationInfo}/>}
    </div>
  )
}

export default Map;
