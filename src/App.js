import React from "react";
import styled from "styled-components";
import MapContextProvider from "./context/MapContextProvider";
import LeafletMap from "./components/LeafletMap";

const Wrapper = styled.div`
  margin: 30px auto;
  width: 70%;
  height: 500px;
  text-align: center;
  border: 2px solid;
  position: relative;
  transform: rotate(0deg) !important;
`;

const App = () => (
  <MapContextProvider>
    <Wrapper>
      <LeafletMap />
    </Wrapper>
  </MapContextProvider>
);
export default App;
