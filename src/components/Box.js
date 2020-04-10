import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  max-width; 100px;
  margin-bottom: 8px;
  display: flex;
  flex-grow: 2;
`;

export default function Box(props) {
  console.log("box props", props);
  return (
    <Droppable droppableId={`${props.name}`} type="box">
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <li style={{ width: "fit-content" }}>
            <h2>Owner: {props.owner}</h2>
            <h3>Current Weight: {props.currentWeight}</h3>
            <h3>Max Weight: {props.maxWeight}</h3>
            <button>Click me!</button>
          </li>
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
