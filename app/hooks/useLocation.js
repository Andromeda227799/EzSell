import * as Location from "expo-location";
import { useState, useEffect } from "react";

function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) {
        //console.log("acces nahi diya location ka bro");
        return;
      } else {
        //console.log("location access dediya");
        const { coords } = await Location.getCurrentPositionAsync();
        //console.log("lat long->", coords);
        const lat = coords.latitude;
        const long = coords.longitude;
        setLocation({ lat, long });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //console.log("final location->", location);
  useEffect(() => {
    getLocation();
  }, []);
  return location;
}
export default useLocation;
