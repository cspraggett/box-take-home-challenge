import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import ItemList from "./components/ItemList";
import Box from "./components/Box";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const initialItems = [
  { id: 1, weight: 1 },
  { id: 2, weight: 2 },
  { id: 3, weight: 4 },
  { id: 4, weight: 8 },
];

const initialBox = [{ name: "box1", maxWeight: 10, currentWeight: 0 }];

function App() {
  const [box, setBox] = useState(initialBox);
  const [items, setItems] = useState(initialItems);
  const onDragEnd = (result) => {
    console.log("drag end", result);
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId !== "box") {
      return;
    }

    console.log("it's good", box[0].currentWeight);
    console.log(
      "the weigth",
      box[0].currentWeight + items[result.source.index - 1].weight
    );
    if (
      box[0].currentWeight + items[result.source.index - 1].weight <=
      box[0].maxWeight
    ) {
      console.log("it fits!");
    } else {
      console.log("too heavy");
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <ItemList items={initialItems} />
        <Box box={initialBox} />
      </Container>
    </DragDropContext>
  );
}

export default App;
