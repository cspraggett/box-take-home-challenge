import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solix lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: lightgreen;
  flex-grow: 1;
`;

export default function Items({ id, weight }) {
  console.log("in Items:", id, weight);

  return (
    <Draggable draggableId={id.toString()} index={id}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <li>
            Name: {id} Weight: {weight}
          </li>
        </Container>
      )}
    </Draggable>
  );
}
