import React from 'react';
import styled from "styled-components"
import { withRouter } from 'react-router-dom';

const GameList = (props) => {

    const GameListWrap = styled.div`
      padding : 20px 15px 20px 30px;
      height: 370px;
      overflow-y : scroll;
      background: rgba(255,255,255, 0.5);border-radius:15px;
      &::-webkit-scrollbar { width: 15px;}
      ::-webkit-scrollbar-track { background-color: #00ff0000; border-radius:20px;}
      ::-webkit-scrollbar-thumb { background: #00ff0000 ;border-radius:5px; }
      ::-webkit-scrollbar-button { display: none; }
      :hover {
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.5);border-radius:20px; }
    };

    `;
    const GameTeamCard = styled.div`
        display : flex;
        flex-direction : column;
        height : 110px;
        background : #1C1C1C;
        border-radius : 20px;
        border : solid 5px #a43657;
        padding : 15px;
        box-sizing : border-box;
        margin-bottom : 20px;
    `;
    const Team = styled.div`
        color : whitesmoke;
        &:hover {
            color : #DF0174;
        };
    `;
    const GameNumber = styled.div`
        font-weight : bold;
        color : #89B5FE;
    `;
    const TeamWrap = styled.div`
        display : flex;
        justify-content : space-around;
        color : grey;
        font-weight : bold;
        font-size : 25px;
        margin : 15px;
    `;

    const gameListClickHandler = ()=>{
        props.history.push('/game');
    }
    return (
      <>
    <GameListWrap>
     <GameTeamCard onClick={gameListClickHandler}>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        <GameTeamCard>
            <GameNumber>GAME 1</GameNumber>
            <TeamWrap>
                <Team>Captin</Team>VS<Team>Marvel</Team>
            </TeamWrap>
        </GameTeamCard>
        
      </GameListWrap>
      </>
    );
};

export default GameList;