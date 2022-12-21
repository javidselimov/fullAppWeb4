import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getList } from "../state/actions";

const Item = styled.div`
  width: 25%;
  padding: 5px;
  background-color: #8c715a;
  box-sizing: border-box;
  color:white
`;



const ListItem = ({ id, link, name, singer, duration, genre }) => {

   const dispatch =  useDispatch();
   
  const handleClick = (id) => {
  
    console.log(id)
    axios
      .delete(`http://localhost:4000/delete/${id}`)
      .then((data) => {
        console.log(data)
       dispatch(getList());
      });
    
  }
    return (
      <Item>
        <iframe
          width="100%"
          height="300px"
          src={link}
          title="The Weeknd - Save Your Tears (Official Music Video)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
            ></iframe>
            <h1>
                {name}
            </h1> 
            <p>
                {duration}
            </p>  
            <p>
                {genre}
            </p>  
            <p>{singer}</p>
            <button onClick={()=>handleClick(id)}>Del</button>
      </Item>
    );
};

export default ListItem;
