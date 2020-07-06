import React, { useState } from "react";
import styled from "styled-components";
import { useMapContext } from "../context/MapContextProvider";
import City from "./City";
import { useLeaflet, CircleMarker, Tooltip, Popup } from "react-leaflet";
import ReactPaginate from "react-paginate";

const Wrapper = styled.div`
  border: 2px solid;
  width: 25%;
  z-index: 2000;
  position: fixed;
  height: inherit;
  left: 1%;
  top: inherit;
`;

const PaginationWrapper = styled.div`
  position: fixed;
  left: 30%;
  top: 100%;
`;

const CitiesList = () => {
  const { cities, setMyMarker } = useMapContext();
  const { map } = useLeaflet();
  const [offset, setOffset] = useState(0);

  const handlePageClick = (data) => {
    setOffset(data.selected * 6);
  };

  const handleChange = (city) => {
    setMyMarker(
      <CircleMarker
        center={[city.latitude, city.longitude]}
        radius={20 * Math.log(parseInt(city.population) / 1000)}
        fillOpacity={0.5}
        stroke={false}
      >
        <Tooltip permanent direction="right" offset={[-8, -2]} opacity={1}>
          <div>{city.city}</div>
          <div>Population: {parseInt(city.population)}</div>
          <div>
            the growth from 2000 to 2013: {city.growth_from_2000_to_2013}
          </div>
          <div>state: {city.state}</div>
        </Tooltip>
        <Popup>Welcome to {city.city}</Popup>
      </CircleMarker>
    );
    map.flyTo([city.latitude, city.longitude], 8);
  };

  return (
    <Wrapper>
      {cities.slice(offset, offset + 6).map((city, index) => (
        <City key={index} city={city} handleChange={handleChange} />
      ))}
      <PaginationWrapper>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={cities.length / 6}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default CitiesList;
