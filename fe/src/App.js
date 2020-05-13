import React , {useState, createContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled,{ createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./components/Main";
import Game from "./components/Game/Game";
import Popup from "./components/Popup";
import backgroundImg from "./images/stadium.jpg";


function App() {
  const StyleReset = createGlobalStyle`
        ${reset};
        @font-face { font-family: 'NeoDunggeunmo'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff'); font-weight: normal; font-style: normal; }
        @font-face { font-family: 'GmarketSansBold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); font-weight: normal; font-style: normal; }
        @font-face { font-family: 'HangeulNuri-Bold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff') format('woff'); font-weight: normal; font-style: normal; }
        background: #241D4F;
  `;
 
  const Background = styled.div`
    background: #241D4F;
    box-sizing : border-box;
    width : 100%;
    height : 100%;
    position : absolute;
    top : 0;
    left : 0;
    vertical-align : middle;
  `;


  const Wrap = styled.div`
    background-image : url(${backgroundImg});
    background-size : 1500px;
    width : 1500px;
    height : 800px;
    position:absolute;
    top:50%; left:50%;
    transform: translate(-50%, -50%);
    border-radius : 20px;
  `;




  return (
      <Router>
        <Background>
          <Wrap>
            <StyleReset />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/game/:gameNum" component={Game} />
              <Route path="/score_players" component={Popup} />
            </Switch>
          </Wrap>
        </Background>
      </Router>
  );
}
export default App;
