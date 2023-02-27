import React from 'react'



const EventInfo = ({ info }) => {
  console.log(info);
  
  return (
    <div className='event-info'>
      <h3>Event Details</h3>
      <li>Title: <strong>{ info.title }</strong></li> 
      <li>ID: <strong>{ info.id }</strong></li> 
 </div>
  )
}

export default EventInfo
