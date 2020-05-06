import React from 'react';
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components"
import Main from "./components/Main";

function App() {
  const StyleReset = createGlobalStyle`
        ${reset};
    `;
  const Wrap = styled.div`
    background : #241D4F;
    width : 1500px;
    height : 800px;
    margin : auto;
    margin-top : 40px;
    box-sizing : border-box;
    padding : 10px;
  `;

  return (
    <Wrap>
      <StyleReset />
      <Main/>
    </Wrap>
  );
}

export default App;
