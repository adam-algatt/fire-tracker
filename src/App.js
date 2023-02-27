import './App.css';
import React from 'react';
import Header from './components/Header';
import Loading from './components/Loading'
import Map from './components/Map';
import { useState, useEffect } from 'react'

function App() {

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
  }, [])
  
  return (
    <div className="App">
    {!loading ? <Header/> : <Loading/> }
    <Map eventData={eventData}/>
    </div>
  );
}

export default App;
