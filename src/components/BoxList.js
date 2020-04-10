import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-grow: 2;
`;

export default function BoxList({ box }) {
  console.log("this is by box:", box);
  const boxList = box.map((curr, index) => (
    <Box
      index
      key={index}
      index={index}
      name={curr.name}
      maxWeight={curr.maxWeight}
      currentWeight={curr.currentWeight}
      owner={curr.owner}
    />
  ));

  return <ul>{boxList}</ul>;
}
