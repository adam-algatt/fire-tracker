import './App.css';
import React from 'react';
import Header from './components/Header';
import Loading from './components/Loading'
import Map from './components/Map';
import { useState, useEffect } from 'react'

function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch nasa api natural disaster data
  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires');
      const { events } = await res.json();
      setEventData(events);
      setLoading(false); 
    }
    fetchEvents();
    if(eventData.length < 1) fetchEvents()
    return () => {
      setEventData([])
      setLocationInfo(null)
    }  //eslint-disable-next-line
  }, [])

  return (
    <div className="App">
    {!loading ? <Header/> : <Loading/> }
    <Map eventData={eventData}
      loading={loading}
      locationInfo={locationInfo}
      setLocationInfo={setLocationInfo}
    />
    </div>
  );
}

export default App;
