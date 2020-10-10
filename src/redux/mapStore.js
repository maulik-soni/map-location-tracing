import {
  SHOW_DATA_ON_MAP_AND_TABLE,
  HIGHLIGHT_LOCATION_ON_MAP,
  SEARCH_DATA_IN_TABLE,
  CHANGE_MAP_BOUND
} from './../constants/actions';

import calcFilteredAndSortedMarkers from './../helper';
import MAP_DATA from './../constants/mapdata';

const MAP_INFO = {
  center: [28.63329999999999, 77.33715699999999],
  bounds: [28.984668654106727, 76.53172181933593, 28.28075094681671, 78.14259218066405, 28.28075094681671, 76.53172181933593, 28.984668654106727, 78.14259218066405],
  marginBounds: [28.948623812336166, 76.57292054980468, 28.31702587395894, 78.1013934501953, 28.31702587395894, 76.57292054980468, 28.948623812336166, 78.1013934501953],
  zoom: 10
}

const INIT_DATA = {
  mapInfo: MAP_INFO,
  mapData: [],
  location: {}
};

export default function mapReducer(state=INIT_DATA, action){
  let newSate = state;
  let mapInfo = MAP_INFO;
  let mapData = [...MAP_DATA];

  switch(action.type){
    case SHOW_DATA_ON_MAP_AND_TABLE:
      newSate.mapInfo = mapInfo;
      newSate.mapData = calcFilteredAndSortedMarkers(mapData, mapInfo);
      return {...state, ...newSate};

    case SEARCH_DATA_IN_TABLE:
      const {key} = action;
      mapInfo = state.mapInfo;
      const searchList = MAP_DATA.filter(data => {
        const condition = data.country.toLowerCase().includes(key.toLowerCase())
                            || data.placeName.toLowerCase().includes(key.toLowerCase())
                              || data.city.toLowerCase().includes(key.toLowerCase())
                                || (`${data.postalCode}`).includes(key.toLowerCase()) 
        
        return condition;
      });
      newSate.mapData = key ? searchList : calcFilteredAndSortedMarkers(searchList, mapInfo);
      return {...state, ...newSate};
    
    case HIGHLIGHT_LOCATION_ON_MAP:
      const {highLightLocation} = action;
      newSate.highLightLocation = highLightLocation;
      newSate.mapInfo.center = [highLightLocation.latitude, highLightLocation.longitude];
      return  {...state, ...newSate};
      
    case CHANGE_MAP_BOUND:
      mapData = [...MAP_DATA];
      mapInfo = action.mapInfo;
      newSate.mapData = calcFilteredAndSortedMarkers(mapData, mapInfo);
      newSate.mapInfo = mapInfo;
      return  {...state, ...newSate};

    default:
      return newSate;
  }
}