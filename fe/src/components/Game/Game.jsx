import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import TeamScore from "./TeamScore";
import Field from "./Field";
import PlayerInfo from "./PlayerInfo";
import BattingLog from "./BattingLog";
import { Store, useStore } from "../../Store";

const initialState = { 
        atBats: [
            {
              batterName: "",
              battingOrder: null,
              pitchOutcomes: [
                {
                    ballCount: null,
                  isBall: null,
                  isHit: null,
                  isOut: null,
                  isStrike: null,
                  pitchCount: null,
                  strikeCount: null
                }
              ]
            }
          ],
        currentAtBat: {
            atBatCount: null,
            batterName: "",
            hitCount: null,
            pitchCount: null,
            pitcherName: ""
          },
          halfInningStatus: {
            ballCount: null,
            inning: null,
            inningIsTop: null,
            outCount: null,
            runnerIsOnFirstBase: null,
            runnerIsOnSecondBase: null,
            runnerIsOnThirdBase: null,
            strikeCount: null,
            userIsOffense: null
          },
          scoreBoard: {
            awayName: "",
            awayScore: null,
            homeName: "",
            homeScore: null,
            userIsHome: null
          }
 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT_1":
      return {
        ...state,
        atBats : action.atBats,
      };
    }
};

const Game = ({ history, match }) => {

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [gameData, setGameData] = useState(initialState);

  useEffect(() => {
    const gameId = match.params.gameNum;
    axios
      .get(`http://52.78.203.80/api/mock/games/${gameId}`)
      .then((response) => {
          // dispatch({type : "INIT_1", atBats : response.data.atBats})
          setGameData(response.data);
      });
  }, []);

  const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #241d4f;
    padding: 10px;
    box-sizing: content-box;
  `;

  //   const store = useStore();
  // const [koko2, setKOKO2] = useState(20);
  //   const [teamList, setTeamList] = useState([]);

  //   const team = {
  //     state: { teamList, koko2 },
  //     actions: { setTeamList, setKOKO2 },
  //   };

  //    store.actions.setTeamList(response.data);
  //   <Store.Provider value={team}>

  const test = (test) => {
    console.log(test);
  };

  return (
    <Store.Provider>
      {test(gameData)}
      <Wrap>
        <TeamScore  data={gameData.scoreBoard} history={history} />
        <PlayerInfo data={gameData.currentAtBat} />
        <Field data={gameData.halfInningStatus} />
        <BattingLog data={gameData.atBats} />
      </Wrap>
    </Store.Provider>
  );
};

export default Game;
