import React, { useState } from 'react';
import GoogleMap from 'google-map-react';
import MapPointer from './MapPointer';

const MapComponent = (props) =>{
  const {mapData=[], onBoundChange, onPointerClick, highLightLocation, mapInfo} = props;
  const {id : locationID = ''} = highLightLocation || {};
  const [mapTileLoaded, setLoaded] = useState(false);
  const center = highLightLocation ? [highLightLocation.latitude, highLightLocation.longitude] : mapInfo.center;

  return (
    <GoogleMap
      center={center}
      zoom={12}
      margin={[30,30,30,30]}
      hoverDistance={30}
      onTilesLoaded={()=>{setLoaded(true)}}
      onChildClick={(index, {datails})=>{
        onPointerClick(datails)
      }}
      onBoundsChange={(center, zoom, bounds, marginBounds)=>{
        onBoundChange({center, zoom, bounds, marginBounds})
      }}
    >
      {mapTileLoaded && mapData.map((datails, index)=>{
        const {latitude, longitude, id} = datails;
        return (
          <MapPointer
            key={index}
            lat={latitude}
            lng={longitude}
            datails={datails}
            isActive={locationID === id}
          />
        )
      })}
    </GoogleMap>
  )
}

export default MapComponent;
