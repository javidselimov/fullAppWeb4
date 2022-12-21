import React from "react";

import styled from "styled-components";
import Form from "../components/Form";

const CreateL = styled.div`
  width: 50%;
  margin: auto;
  padding: 5px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 100px;
`;

const Createlist = () => {
  return (
    <CreateL>
      <h2>Create Music</h2>
      <Form />
    </CreateL>
  );
};

export default Createlist;
