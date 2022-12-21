import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 10px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 10px;
`;

const Button = ({ title, handleclick }) => {

  return <Btn onClick={handleclick}>{title}</Btn>;
};

export default Button;
