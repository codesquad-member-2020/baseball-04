import React from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components"
import Main from "./components/Main";
import Game from "./components/Game";
import backgroundImg from "./images/stadium.jpg";

function App() {
  const StyleReset = createGlobalStyle`
        ${reset};
    `;
  const Wrap = styled.div`
    background-image : url(${backgroundImg});
    background-size : 1500px;
    /* background : #241D4F; */

    width : 1500px;
    height : 800px;
    margin : auto;
    margin-top : 40px;
    box-sizing : border-box;
    /* padding : 10px; */
   
  `;
  

  return (
    <Router>
      <Wrap>
        <StyleReset />
        <Switch>
        <Route exact path="/" component ={Main}/> 
        <Route path="/game" component ={Game}/> 
        </Switch>
      </Wrap>
      </Router>
    
  );
}
export default App;
