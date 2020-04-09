import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import ItemList from "./components/ItemList";
import BoxList from "./components/BoxList";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const users = [1, 2, 3, 4, 5];

const initialItems = [
  { id: 1, weight: 1 },
  { id: 2, weight: 2 },
  { id: 3, weight: 4 },
  { id: 4, weight: 8 },
];

const initialBox = [
  { name: "box1", maxWeight: 10, currentWeight: 0, owner: 1 },
  { name: "box2", maxWeight: 22, currentWeight: 0, owner: 2 },
];

function App() {
  const [box, setBox] = useState(initialBox);
  const [items, setItems] = useState(initialItems);
  const onDragEnd = (result) => {
    console.log("drag end", result);
    if (!result.destination) {
      return;
    }

    // if (result.destination.type) {
    //   return;
    // }

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
        <BoxList box={initialBox} />
      </Container>
    </DragDropContext>
  );
}

export default App;
