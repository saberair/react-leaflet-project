import React from "react";
import CitiesList from "./CitiesList";
import { TileLayer, ZoomControl } from "react-leaflet";
import { useMapContext } from "../context/MapContextProvider";
import "leaflet/dist/leaflet.css";

const LeafletMapContent = () => {
  const { myMarker } = useMapContext();
  return (
    <>
      <CitiesList />
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {myMarker}
      <ZoomControl position="topright" />
    </>
  );
};

export default LeafletMapContent;
