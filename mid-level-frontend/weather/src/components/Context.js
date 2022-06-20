import { useGeolocated } from "react-geolocated";
import axios from "axios";
import { useEffect, useContext, useState, createContext } from "react";
const LocationContext = createContext();
const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
  const [search, setSearch] = useState("");
  const [daily,setDaily] = useState([]);
  const [hourly,setHourly] = useState([]);
  const [baseCity,setBaseCity] = useState("");
  const { coords, isGeolocationAvailable } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (search.length > 0) {
      axios
        .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=metric&include=events%2Cdays%2Ccurrent%2Chours%2Calerts&key=47VYVQ6ZVS95HUR9C9VHUQ3WB&contentType=json`)
        .then((res) => {
          setLocation({
            latitude: res.data.coord.lat,
            longitude: res.data.coord.lon,
          });
          setBaseCity(res.data.resolvedAddress);
        }
        )
        .catch((err) => {
          console.log(err);
        }
        );
    }else{
      if (coords) {
        axios
          .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coords.latitude},${coords.longitude}?unitGroup=metric&include=events%2Cdays%2Ccurrent%2Chours%2Calerts&key=47VYVQ6ZVS95HUR9C9VHUQ3WB&contentType=json`)
                    .then((res) => {
            setLocation({
              latitude: res.data.coord.lat,
              longitude: res.data.coord.lon,
              city: res.data.name,
            });
            setBaseCity(res.data.name);
          }
          )
          .catch((err) => {
            console.log(err);
          }
          );
      }
      else if (!isGeolocationAvailable) {
        console.log("Your browser does not support Geolocation");
      }
      else {
        console.log("No position available");
      }
    }
  }, [search, coords, isGeolocationAvailable,baseCity]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios
        .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?iconSet=icons1&aggregateHours=24&combinationMethod=aggregate&shortColumnNames=true&contentType=json&unitGroup=metric&locationMode=single&locations=${location.latitude},${location.longitude}&forecastDays=7&key=47VYVQ6ZVS95HUR9C9VHUQ3WB`)
        .then((res) => {
          setDaily(res.data.days);
          setHourly(res.data.hours);
        }
        )
        .catch((err) => {
          console.log(err);
        }
        );
    }
  }, [location]);

  const values = {
    location,
    setLocation,
    search,
    setSearch,
    daily,
    setDaily,
    hourly,
    setHourly,
    baseCity,
    setBaseCity,
  };
  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
}


export { LocationProvider, LocationContext };
export default LocationProvider;