import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
`;

export default function Box(props) {
  console.log(props);
  return (
    <Droppable droppableId={"box"}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <h1>{props.box[0].maxWeight}</h1>
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
