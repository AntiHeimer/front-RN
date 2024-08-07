import Geolocation from 'react-native-geolocation-service';

export default async function GetGeoLocationFunction() {
  const permission = await Geolocation.requestAuthorization('always');

  if (permission == 'granted') {
    return new Promise((res, rej) => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          const timestamp = position.timestamp;
          const date = new Date(timestamp);
          const formattedDate = `${date.getFullYear()}-${String(
            date.getMonth() + 1,
          ).padStart(2, '0')}-${String(date.getDate()).padStart(
            2,
            '0',
          )} ${String(date.getHours()).padStart(2, '0')}:${String(
            date.getMinutes(),
          ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

          const locationData = {latitude, longitude, formattedDate};

          res(locationData);
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  } else {
    throw new Error('Location permission not granted');
  }
}
