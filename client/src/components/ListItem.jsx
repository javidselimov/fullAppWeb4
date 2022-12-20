import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 25%;
  padding: 5px;
  background-color: #8c715a;
  box-sizing: border-box;
  color:white
`;



const ListItem = ({link,name,singer,duration,genre}) => {
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
            <button>Del</button>
      </Item>
    );
};

export default ListItem;
