import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
`;

export default function BoxList({ box }) {
  console.log(box);
  const boxList = box.map((curr, index) => (
    <Box
      name={box.name}
      maxWeight={box.maxWeight}
      currentWeight={box.currentWeight}
    />
  ));

  return <ul>boxList</ul>;
}
