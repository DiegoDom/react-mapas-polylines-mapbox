import { useContext, useState } from 'react';

import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activePlace, setActivePlace] = useState('');

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActivePlace(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return (
      <div className="d-flex justify-content-center p-2">
        <div className="spinner-border text-primary mt-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ul className={`list-group ${places.length > 0 && 'mt-3'}`}>
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activePlace === place.id && 'active'
          }`}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            className={`${
              activePlace === place.id ? 'text-white' : 'text-muted'
            }`}
            style={{ fontSize: '12px' }}
          >
            {place.place_name_es}
          </p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activePlace === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
