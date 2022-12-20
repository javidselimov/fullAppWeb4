import React from 'react'
import styled from 'styled-components'
import CreateMusic from '../components/CreateMusic';
import Title from '../components/Title';

const HomeContainer = styled.div`
  background-color: #1aab9c;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Home = () => {
    return (
      <HomeContainer>
            <Title title="This is amazing playlist" />
            <CreateMusic title = "Create Music"/>
      </HomeContainer>
    
  )
}

export default Home