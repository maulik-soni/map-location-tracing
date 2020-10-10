import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../style/MapDataTable.css';
import Search from './Search';
import Table from './Table';
import {
  SHOW_DATA_ON_MAP_AND_TABLE,
  SEARCH_DATA_IN_TABLE,
  HIGHLIGHT_LOCATION_ON_MAP
} from './../constants/actions';

const tableRows = [
  {
    lable: "Place Name",
    key: "placeName"
  },{
    lable: "City / State",
    key: "city"
  },{
    lable: "Postal Code",
    key: "postalCode"
  },{
    lable: "Country",
    key: "country"
  }
];

const MapDataTable = (props) => {
  const {dispatch, mapData=[], highLightLocation} = props;  
  
  useEffect(()=>{
    dispatch({
      type: SHOW_DATA_ON_MAP_AND_TABLE,
    })
  }, [dispatch]);

  const searchLocation = (key)=>{
    dispatch({
      type: SEARCH_DATA_IN_TABLE,
      key
    })
  }

  const tableRowClickHandler = (highLightLocation) =>{
    dispatch({
      type: HIGHLIGHT_LOCATION_ON_MAP,
      highLightLocation
    })
  }

  return (
    <div>
      <Search onChange={searchLocation}/>
      <div className="map-data-table">
        <Table rows={tableRows} data={mapData} onRowClick={tableRowClickHandler} highLightLocation={highLightLocation}/>
      </div>
    </div>
  );
}

export default connect((state)=>{
  const {mapData, highLightLocation} = state.mapStore;
  return {mapData, highLightLocation};
})(MapDataTable);
