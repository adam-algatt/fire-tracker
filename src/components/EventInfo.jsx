import React from 'react'



const EventInfo = ({ info }) => {
  
  return (
    <div className='event-info'>
      <h3>Event Details</h3>
      <li>Title: <strong>{ info.title }</strong></li> 
      <li>ID: <strong>{ info.id }</strong></li> 
      
      <button 
      className='event-button'
      onClick={()=> {window.open(`${info.link}`, '_blank', 'noreferrer')}}
      >
      {/* <a href={`${info.link}`} target='_blank'>Fire Info Link</a> */}
      <h3 className='event-link'>FIRE INFO LINK</h3>
      </button>
 </div>
  )
}

export default EventInfo
