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
  { name: 1, maxWeight: 10, currentWeight: 0, owner: 1 },
  { name: 2, maxWeight: 22, currentWeight: 0, owner: 2 },
];

function App() {
  const [box, setBox] = useState(initialBox);
  const [items, setItems] = useState(initialItems);
  const onDragEnd = (result) => {
    console.log("drag end", result);
    if (!result.destination) {
      return;
    }
    const dropId = result.destination["droppableId"];
    console.log("dropId", dropId);
    console.log("the box", box);
    // if (result.destination.type) {
    //   return;
    // }

    console.log("it's good", box[dropId - 1].currentWeight);
    console.log(
      "the weight",
      box[dropId - 1].currentWeight + items[result.source.index - 1].weight
    );
    if (
      box[dropId - 1].currentWeight + items[result.source.index - 1].weight <=
      box[dropId - 1].maxWeight
    ) {
      setBox([
        ...box,
        (box[parseInt(dropId - 1)].currentWeight +=
          items[result.source.index - 1].weight),
      ]);
      console.log("it fits!", box);
    } else {
      console.log("too heavy");
      return;
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
