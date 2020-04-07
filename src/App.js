import React from "react";
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

const initialBox = [{ name: "box1", maxWeight: 10 }];

function App() {
  const onDragEnd = React.useCallback(() => {
    console.log("drag end");
  }, []);
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
