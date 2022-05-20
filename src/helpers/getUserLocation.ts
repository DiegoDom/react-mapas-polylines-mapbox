import Swal from 'sweetalert2';

export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        resolve([longitude, latitude]);
      },
      (err) => {
        console.log(err);
        Swal.fire(
          'Error',
          'No se pudo obtener la geolocalización del usuario',
          'error'
        );
        reject();
      }
    );
  });
};
