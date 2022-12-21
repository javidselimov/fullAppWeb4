import React, { useState } from "react";
import styled from "styled-components";

const InputUI = styled.input`
  border: none;
  border-bottom: 1px solid white;

  font-size: 1.4rem;
  outline: none;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 10px;

  
`;
const Input = ({ placeholder,name,onchange }) => {
  

  const [value, setValue] = useState('')
  
  const handleChange = (e) => {
    setValue(e.target.value);
    onchange(e)
  }


  return (
    <InputUI
      name={name}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    ></InputUI>
  );
};

export default Input;
