
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const FormUI = styled.div`
  padding: 5px;
  border: 1px solid white;
`;


const Form = () => {

  const [state, setState] = useState({
    name: "",
    singer: "",
    duration: "",
    link: "",
    genre: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    console.log(state);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <FormUI>
      <Input
        value={state.name}
        name="name"
        placeholder="name"
        onchange={handleChange}
      />
      <Input
        onchange={handleChange}
        value={state.singer}
        name="singer"
        placeholder="singer"
      />
      <Input
        onchange={handleChange}
        value={state.duration}
        name="duration"
        placeholder="duration"
      />
      <Input
        onchange={handleChange}
        value={state.link}
        name="link"
        placeholder="link"
      />
      <Input
        onchange={handleChange}
        value={state.genre}
        name="genre"
        placeholder="genre"
      />
      <Button title="Create" handleclick={handleClick} />
    </FormUI>
  );
};

export default Form;
