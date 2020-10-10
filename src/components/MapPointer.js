import React from 'react';
import '../style/MapPointer.css';

const PostalCodeIcon = () =>{
  return (
    <svg fill="#2d65c9" version="1.0" width="24px" height="24px" viewBox="0 0 512.000000 512.000000">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#2d65c9" stroke="1">
        <path d="M940 4735 c-181 -37 -335 -121 -461 -252 -114 -117 -182 -242 -219 -397 -23 -97 -28 -259 -10 -328 43 -159 182 -309 345 -371 l60 -22 1150 -2 1150 -3 39 23 c107 61 108 247 3 305 -30 16 -116 17 -1152 22 -1106 5 -1121 5 -1160 26 -137 70 -100 329 71 500 77 78 197 139 299 154 47 7 591 10 1630 8 l1560 -3 63 -23 c175 -63 299 -190 352 -361 20 -62 20 -93 20 -1440 0 -1161 -2 -1384 -15 -1430 -45 -169 -181 -314 -352 -373 l-68 -23 -1605 0 -1605 0 -68 23 c-171 60 -307 205 -353 377 -11 39 -14 194 -14 720 0 632 -2 672 -19 711 -29 63 -72 88 -156 92 -86 3 -137 -21 -169 -83 -21 -39 -21 -54 -24 -655 -4 -799 2 -869 92 -1055 109 -229 310 -390 573 -463 l98 -27 1635 0 c1560 0 1639 1 1715 19 288 67 496 228 614 476 52 109 69 178 82 320 6 73 9 610 7 1460 l-4 1345 -22 83 c-44 166 -121 300 -239 413 -83 81 -140 119 -246 169 -176 81 -8 75 -1872 77 -1343 1 -1672 -1 -1725 -12z" />
        <path d="M1380 2648 c-58 -39 -80 -82 -80 -153 0 -68 21 -110 73 -149 28 -21 38 -21 460 -21 l432 0 33 23 c91 66 94 221 4 290 l-35 27 -427 3 -426 3 -34 -23z" />
        <path d="M3165 1766 c-37 -16 -83 -68 -91 -102 -4 -14 -4 -51 -2 -83 5 -68 31 -110 85 -137 35 -17 66 -19 368 -19 302 0 333 2 368 19 59 29 81 69 85 151 3 60 0 75 -20 104 -12 19 -36 44 -51 55 -27 20 -41 21 -370 23 -269 2 -349 0 -372 -11z" />
      </g>
    </svg>
  )
}

const MapPointer = (props) => {
  const { datails, isActive } = props;
  const pointerClass = (isActive ? "map-pointer-wrapper-active" : "map-pointer-wrapper");

  return (
    <div className="map-pointer">
      <div className={pointerClass}>
        <img className="map-pointer-icon" alt="map pin" src="/map-location-tracing/assets/pin.png" />
      </div>
      {isActive && <div className="map-pointer-description">
        <div className="map-pointer-primary-details">
          <div className="map-pointer-postal-code-icon">
            <PostalCodeIcon/> 
          </div>
          <div className="map-pointer-postal-code">
            {`Postal Code: ${datails.postalCode}`}
          </div>
        </div>
        <div className="map-pointer-secondary-details">
          <div className="map-pointer-place-city">
            {`${datails.placeName}, ${datails.city}`}
          </div>
          <div className="map-pointer-postal-country">
            {datails.country}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default MapPointer;