import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background: #071d49;
  color: #e2e8f0;
  padding: 10px 30px;
  border-radius: 3px;
  cursor: pointer;
  line-height: 48px;
  margin: 10px;
  &:hover {
    background: #ff7276;
    outline: none;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
  }
`;

const City = ({ city, handleChange }) => {
  return (
    <Button role="button" onClick={() => handleChange(city)}>
      {city?.city}
    </Button>
  );
};

export default City;
