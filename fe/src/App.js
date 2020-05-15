import React, { useState, createContext } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
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
    background: #241d4f;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: middle;
  `;

  const Wrap = styled.div`
    background-image: url(${backgroundImg});
    background-size: 1500px;
    width: 1500px;
    height: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-sizing: border-box;

  `;

  const [gameData, setGameData] = useState();
  const [gameId, setGameId] = useState();
  const history = createBrowserHistory();

  const gameListClickHandler = (e) => {
    const teamId = e.target.dataset.teamid;
    const team = e.target.dataset.team;
    const gameId = e.target.dataset.gamenum;

    axios
      .put(`http://52.78.203.80/api/mock/games/${gameId}/teams/${teamId}`,{})
      .then((response) => {
        if (response.data.teamSelectionAccepted == true) {
          axios
            .get(`http://52.78.203.80/api/mock/games/${gameId}`)
            .then((response) => {
              setGameData(response.data);
              setGameId(gameId);
              history.push(`/game/${gameId}`);

            });
        }else{
          alert('이미 선택된 팀입니다.');
        }
      });
  };

  return (
    <Router history={history}>
      <Background>
        <Wrap>
          <StyleReset />
          <Switch>
            <Route exact path="/" render={()=> <Main click={gameListClickHandler} />}/>
            <Route exact path="/game/:gameNum"  render={()=> <Game data={gameData} gameId={gameId}/>}/>
            <Route exact path="/score_players" render={()=> <Popup/>}  />
          </Switch>
        </Wrap>
      </Background>
    </Router>
  );
}
export default App;
