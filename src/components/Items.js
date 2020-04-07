import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

export default function Items({ id, weight }) {
  console.log("in Items:", id, weight);

  return (
    <Draggable draggableId={id.toString()} index={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <li>
            Name: {id} Weight: {weight}
          </li>
        </div>
      )}
    </Draggable>
  );
}
