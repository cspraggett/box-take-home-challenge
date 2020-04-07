import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
`;

export default function Box(props) {
  console.log(props);
  return (
    <Container>
      <h1>{props.box[0].maxWeight}</h1>
    </Container>
  );
}
