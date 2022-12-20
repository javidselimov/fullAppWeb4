import React from "react";

import styled from "styled-components";


import { useNavigate } from "react-router-dom";
const Create = styled.button`
  border: 1px white solid;
  padding: 20px;
  color: white;
  font-size: 1.4rem;
  background-color: #d48390;
  margin-top: 30px;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #9c4f5b;
    cursor: pointer;
  }
`;

const CreateMusic = ({ title }) => {
    const navigate = useNavigate()
    return <Create onClick={() => navigate('/createlist')}>{title}</Create>;
};

export default CreateMusic;
