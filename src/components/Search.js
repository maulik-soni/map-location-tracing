import React from 'react';
import '../style/Search.css';

const SearchIcon=()=>{
  return(
    <svg viewBox="0 0 590.556 590.556" width="24" height="24" fill="#757575">
      <g>
        <g>
          <path d="M574.099,469.235L437.61,353.434c-3.248-2.709-7.227-4.171-11.266-4.171c-5.643,0-11.018,2.843-14.373,7.606    c-15.533,22.029-34.578,41.087-56.611,56.635c-4.1,2.895-6.816,7.319-7.449,12.143c-0.635,4.828,0.775,9.602,3.975,13.439    l115.873,136.61c7.852,9.422,19.252,14.859,31.23,14.859c10.768,0,21.021-4.324,28.877-12.179l48.98-48.981    c8.346-8.348,12.656-19.241,12.137-30.68C588.46,487.269,583.175,476.8,574.099,469.235z" />
          <path d="M218.399,433.743c57.923,0,112.385-22.559,153.348-63.522c40.965-40.965,63.523-95.423,63.523-153.349    C435.271,97.29,337.983,0,218.399,0C98.814,0,1.53,97.29,1.53,216.872S98.817,433.743,218.399,433.743z M71.81,216.872    c0-80.83,65.759-146.589,146.589-146.589c80.831,0,146.588,65.759,146.588,146.589c0,39.091-15.262,75.885-42.982,103.602    c-27.721,27.718-64.515,42.984-103.606,42.984C137.569,363.461,71.81,297.701,71.81,216.872z" />
        </g>
      </g>
    </svg>
  )
}

function EventDebouncer(callBack, delay){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      callBack.apply(this, arguments)
    }, delay);
  }
}

const Search = (props) => {
  const searchHandler = EventDebouncer(props.onChange, 500);
  return (
    <div className="map-data-search-box">
      <input placeholder="Search Location" onChange={e => {
        const value = e.target.value;
        searchHandler(value);
      }}/>
      <SearchIcon/>
    </div>
  );
}
export default Search;