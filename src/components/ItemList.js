import React from "react";
import styled from "styled-components";

import Items from "./Items";

export default function ItemList({ items }) {
  console.log(items);
  const itemList = items.map((curr) => (
    <Items key={curr.id} id={curr.id} weight={curr.weight} />
  ));
  console.log("This is the itemList", itemList);
  return <ul>{itemList}</ul>;
}
