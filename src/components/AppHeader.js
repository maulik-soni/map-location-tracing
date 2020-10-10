import React from 'react';
import '../style/AppHeader.css';

const SearchIcon = () => {
  return(
    <svg height="24" viewBox="0 0 512 512" width="24" fill="#ffffff"><g><g id="glyph"><path d="m502.52 447.813a24.1 24.1 0 0 0 -8.019-17.227l-138.078-123.108a202.683 202.683 0 0 1 -48.945 48.945l123.108 138.077c8.716 10.185 25.595 10.673 34.885 1l30.029-30.029a24.1 24.1 0 0 0 7.02-17.658z" /><path d="m381 192c0-104.215-84.785-189-189-189s-189 84.785-189 189 84.785 189 189 189 189-84.785 189-189zm-189 144c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144z" /><path d="m192 92a84.1 84.1 0 0 0 -84 84c0 22.962 13.148 49.214 39.081 78.027a323.174 323.174 0 0 0 37.552 35.445 12 12 0 0 0 14.734 0 323.174 323.174 0 0 0 37.552-35.445c25.933-28.813 39.081-55.065 39.081-78.027a84.1 84.1 0 0 0 -84-84zm0 124a40 40 0 1 1 40-40 40.045 40.045 0 0 1 -40 40z" /></g></g></svg>
  )
}

const AppHeader = (props) => {
  const {finderToggleHandler} = props
  return (
    <div className="app-header">
      <div className="finder-icon" onClick={finderToggleHandler}><SearchIcon/></div>
      <div>Location Finder</div>
    </div>
  );
}
export default AppHeader;