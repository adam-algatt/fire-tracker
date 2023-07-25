import React from 'react'
import { Icon } from '@iconify/react'
import { v4 as uuidv4 } from 'uuid'
import locationIcon from '@iconify/icons-mdi/map-marker-alert'

const getKey = (() => {
return uuidv4();
})()
const LocationMarker = ({ onClick, size }) => {
  return (
 
      <Icon
        icon={locationIcon}
        key={getKey}
        className='location-icon'
        onClick={onClick}
        width={size}
        height={size}
      />
  
  )
}

export default LocationMarker
