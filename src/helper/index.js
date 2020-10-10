
export default function calcFilteredAndSortedMarkers(data, mapInfo) {
  const marginBounds = mapInfo && mapInfo['marginBounds'];
  if (!data || !marginBounds) {
    return [];
  }
  return data.filter(m => ptInRect(m, marginBounds));
}

function ptInSect(x, a, b) {
  return (x - a) * (x - b) <= 0;
}

function ptInRect(pt, rect) {
  return ptInSect(pt['latitude'], rect[0], rect[2]) && ptInSect(pt['longitude'], rect[1], rect[3]);
}