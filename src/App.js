import React from "react";
import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";

import ItemList from "./components/ItemList";

const initialItems = [
  { id: 1, weight: 1 },
  { id: 2, weight: 2 },
  { id: 3, weight: 4 },
  { id: 4, weight: 8 },
];

function App() {
  const onDragEnd = React.useCallback(() => {
    console.log("drag end");
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ItemList items={initialItems} />
    </DragDropContext>
  );
}

export default App;
