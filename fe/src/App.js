import React from 'react';
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components"

function App() {
  const StyleReset = createGlobalStyle`
        ${reset};
    `;

  return (
    <>
      <StyleReset />
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
    </>
  );
}

export default App;
