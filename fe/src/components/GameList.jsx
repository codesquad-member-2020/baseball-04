import React from 'react';
import styled from "styled-components"

const GameList = () => {

    const GameListWrap = styled.div`
      padding-right : 15px;
      height: 380px;
      overflow-y : scroll;
      &::-webkit-scrollbar { width: 15px;}
      ::-webkit-scrollbar-track { background-color: #00ff0000; border-radius:5px; }
      ::-webkit-scrollbar-thumb { background: #00ff0000 ;border-radius:5px; }
      ::-webkit-scrollbar-button { display: none; }
      :hover {
        ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.5);border-radius:5px; }
    };
    `;
    const GameTeamCard = styled.div`
        display : flex;
        flex-direction : column;
        width : 400px;
        height : 100px;
        background : rgba(204, 0, 051, 0.5);
        /* background : rgba(255, 000, 153, 0.4); */
        /* background : rgba(255, 000, 102, 0.4); */
        border-radius : 20px;
        border : solid 1px whitesmoke;
        padding : 15px;
        box-sizing : border-box;
        margin-top : 20px;
    `;
    const Team = styled.div`
        color : whitesmoke;
        margin : auto;
        &:hover {
            color : #5FE3A6;
        };
    `;
    const GameNumber = styled.div`
        font-weight : bold;
        color : #FDD9EF;
    `;
    const TeamWrap = styled.div`
        display : flex;
        justify-content : center;
        color : grey;
        font-weight : bold;
        font-size : 25px;
        margin : 15px;
    `;

    return (
      <>
      <GameListWrap>
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