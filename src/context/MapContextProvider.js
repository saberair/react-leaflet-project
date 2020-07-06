import React, { useState, useEffect } from "react";
import { createContext } from "./context";

export const [useMapContext, MapStateContextProvider] = createContext();

const MapContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [myMarker, setMyMarker] = useState();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "cities.json", true);

    xhr.onload = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const cities = JSON.parse(xhr.response);
          setCities(cities);
        } else {
          console.error(xhr.statusText);
        }
      }
    };

    xhr.onerror = (e) => {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }, []);

  return (
    <MapStateContextProvider value={{ cities, myMarker, setMyMarker }}>
      {children}
    </MapStateContextProvider>
  );
};

export default MapContextProvider;
