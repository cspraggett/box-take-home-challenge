import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Items from "./Items";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
`;

export default function ItemList({ items }) {
  console.log(items);
  const itemList = items.map((curr) => (
    <Items key={curr.id} id={curr.id} weight={curr.weight} />
  ));
  console.log("This is the itemList", itemList);
  return (
    <Droppable droppableId={"1"}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef}>
          <ul>{itemList}</ul>
        </Container>
      )}
    </Droppable>
  );
}
