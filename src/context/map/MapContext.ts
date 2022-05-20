import { createContext } from 'react';
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map, Marker } from '!mapbox-gl';

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);
