import React from "react";
import styled from "styled-components";

export default function Items({ id, weight }) {
  console.log("in Items:", id, weight);

  return (
    <li>
      Name: {id} Weight: {weight}
    </li>
  );
}
