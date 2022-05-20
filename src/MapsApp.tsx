import { PlacesProvider, MapProvider } from './context';
import { HomeScreen } from './screens';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
