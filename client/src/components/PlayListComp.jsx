import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListItem from "./ListItem";

const PlayList = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const PlayListComp = () => {
  const { list } = useSelector((state) => state.list);

  return (
    <PlayList>
      {list.length > 0
        ? list.map((item) => {
            return (
              <ListItem
                id={item.id}
                name={item.name}
                singer={item.singer}
                duration={item.duration}
                genre={item.genre}
                link={item.link}
              />
            );
          })
        : ""}
    </PlayList>
  );
};

export default PlayListComp;
