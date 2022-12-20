import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import CreateMusic from '../components/CreateMusic';
import Title from '../components/Title';
import { getList } from '../state/actions';

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
    const {loading,list,error }=useSelector(state=>state.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList())
    },[])

    console.log(loading, list, error)
    
    return (
      <HomeContainer>
        {loading ? (
          <>Loading..</>
        ) : list?.length > 0 ? (
          <Title title="This is amazing playlist" />
        ) : list?.length === 0 ? (
          <CreateMusic title="Create Music" />
        ) : (
          <>{error}</>
        )}
      </HomeContainer>
    );
}

export default Home