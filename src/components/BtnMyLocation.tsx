import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';
export const BtnMyLocation = () => {
  const { isMapReady, map } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady)
      throw new Error('El mapa de la aplicación no está listo...');
    if (!userLocation)
      throw new Error('No se pudo obtener la geolocalización del usuario...');

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: 999,
      }}
    >
      Mi ubicación
    </button>
  );
};
