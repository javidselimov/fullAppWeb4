import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
const TitleComp = styled.div`
  padding: 40px;
  width: 400px;
  
  border: 1px solid white;
  border-radius: 10px;
  font-size: 2rem;
  color: white;

  &:hover {
    background-color: #1c786e;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;

const Title = ({ title }) => {
    
    const navigate = useNavigate()
  return (
      <TitleComp onClick={() => navigate("/playlist")}>
          {title}
     </TitleComp>
  )
}

export default Title