import React from "react";
import "./App.css";

import ItemList from "./components/ItemList";

const initialItems = [
  { id: 1, weight: 1 },
  { id: 2, weight: 2 },
  { id: 3, weight: 4 },
  { id: 4, weight: 8 },
];

function App() {
  return <ItemList items={initialItems} />;
}

export default App;
