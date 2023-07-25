export const parsePoints = (points, zoomState, mapCenter) => {
let markerSize
    zoomState > 5 ? markerSize = (zoomState * 2.5) : markerSize = (zoomState * 2) 
     const pointRadiusModifier = 
      zoomState > 5 ?   30 - (zoomState * 2) : 100
   
   //subtract number from lat lng to limit rendered items
   //Ceiling
   const latCeiling = mapCenter.lat + pointRadiusModifier
   const lngCeiling = mapCenter.lng + pointRadiusModifier
   //Floor
   const latFloor =  mapCenter.lat - pointRadiusModifier
   const lngFloor = mapCenter.lng - pointRadiusModifier
   
   const filteredLng = points.filter(point => point.geometry[0].coordinates[0] < lngCeiling && point.geometry[0].coordinates[0] > lngFloor)
   const filteredLat = filteredLng.filter(point => point.geometry[0].coordinates[1] < latCeiling && point.geometry[0].coordinates[1] > latFloor)
   
   return {filteredLat, markerSize}
   }

  export const testRecenter = (e, changeMapCenter) => {
    //change map center on scroll to render firest within lat/lng bounds set in parsePoints()
     const lat = e.center.lat()
     const lng = e.center.lng()
  
    changeMapCenter(lat, lng)
  }