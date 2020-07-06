import React from "react";
import { Map } from "react-leaflet";
import LeafletMapContent from "../context/LeafletMapContent";

const LeafletMap = () => {
  return (
    <Map center={[0, 0]} zoom={3} zoomControl={false} animate={true}>
      <LeafletMapContent />
    </Map>
  );
};

export default LeafletMap;
