import React, { useState } from 'react';
import './../style/main.css';
import MapContainer from './MapContainer';
import MapDataTable from './MapDataTable';
import AppHeader from './AppHeader';

function App() {
  const [openFinder, finderHandler] = useState(true);

  const finderToggleHandler = (flag) =>{
    finderHandler(!openFinder);
  }

  return (
    <>
    <AppHeader finderToggleHandler={finderToggleHandler}/>
    <div className="map-table-wrapper">
      {openFinder && <MapDataTable/>}
      <MapContainer/>
    </div>
    </>
  );
}

export default App;
