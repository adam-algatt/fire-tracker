import React from 'react'
import { Icon } from '@iconify/react'
import { v4 as uuidv4 } from 'uuid'
import locationIcon from '@iconify/icons-mdi/fire-alert'


const getKey = (() => {
return uuidv4();
})()
const LocationMarker = ({ lat, lng, onClick }) => {
  return (
 
      <Icon
        icon={locationIcon}
        key={getKey}
        className='location-icon'
        onClick={onClick}
      />
  
  )
}

export default LocationMarker
