import React, { Component } from 'react';
import MapComponent from './MapComponent';
import './../style/Map.css';
import {CHANGE_MAP_BOUND, HIGHLIGHT_LOCATION_ON_MAP} from './../constants/actions';
import { connect } from 'react-redux';

class MapContainer extends Component {

  onBoundChange(mapInfo){
    this.props.dispatch({
      type: CHANGE_MAP_BOUND,
      mapInfo
    });
  }

  onPointerClick(highLightLocation){
    this.props.dispatch({
      type: HIGHLIGHT_LOCATION_ON_MAP,
      highLightLocation
    })
    setTimeout(()=>{
      const tableParent = document.querySelector(".map-data-table");
      tableParent.querySelector(".divTableRow-active") && tableParent.querySelector(".divTableRow-active").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    },500)
  }

  render() {
    const {mapData, highLightLocation, mapInfo} = this.props;

    return (
      <div className="map-container">
        <MapComponent
          mapData={mapData}
          mapInfo={mapInfo}
          highLightLocation={highLightLocation}
          onBoundChange={this.onBoundChange.bind(this)}
          onPointerClick={this.onPointerClick.bind(this)}
        />
      </div>
    )
  }
}

export default connect((state)=>{
  const {mapData, highLightLocation, mapInfo} = state.mapStore;
  return {mapData, highLightLocation, mapInfo};
})(MapContainer);