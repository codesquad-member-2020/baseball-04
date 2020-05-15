import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const GameList = ({history, click}) => {

  
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    axios.get("http://52.78.203.80/api/mock/games").then((response) => {
      setTeamList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <GameListWrap>
        {teamList.map((list, index) => {
          return (
            <GameTeamCard>
              <GameNumber>GAME {index + 1}</GameNumber>
              <TeamWrap>
                <TeamImg src={list.home.imageURL} />
                <Team data-gamenum={index + 1} data-teamid={list.home.id} data-team="home" onClick={click}>
                  {list.home.name}
                </Team>{" "}
                <Versus>VS</Versus>{" "}
                <Team data-gamenum={index + 1} data-teamid={list.away.id} data-team="away" onClick={click}>
                  {list.away.name}
                </Team>
                <TeamImg src={list.away.imageURL} />
              </TeamWrap>
            </GameTeamCard>
          );
        })}
      </GameListWrap>
    </>
  );
};

export default GameList;

const GameListWrap = styled.div`
  padding: 20px 15px 20px 30px;
  height: 370px;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: #00ff0000;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #00ff0000;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
    }
  }
`;
const GameTeamCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  background: #1c1c1c;
  border-radius: 20px;
  border: solid 5px #a43657;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
const Team = styled.div`
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 5px;
  font-family: "NeoDunggeunmo";
  font-size: 30px;
  color: whitesmoke;
  &:hover {
    color: #f5a9bc;
  }
`;
const GameNumber = styled.div`
  font-family: "NeoDunggeunmo";
  font-weight: bold;
  font-size: 20px;
  color: #89b5fe;
  margin-top: 10px;
`;
const TeamWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  box-sizing: border-box;
`;
const TeamImg = styled.img`
  width: 50px;
  border-radius: 50px;
  margin: 0px 10px;
`;
const Versus = styled.div`
  font-family: "NeoDunggeunmo";
  color: grey;
  font-weight: bold;
  font-size: 30px;
  margin: 5px;
  height: 40px;
  line-height: 40px;
`;
