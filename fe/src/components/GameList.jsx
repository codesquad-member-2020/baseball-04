import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { withRouter } from 'react-router-dom';
import {useStore} from "../Store";
import axios from "axios";


const GameList = (props) => {

    const store = useStore();

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
        font-family : 'NeoDunggeunmo';
        font-size : 35px;
        color : whitesmoke;
        &:hover {
            color : #F5A9BC;
        };
    `;
    const GameNumber = styled.div`
        font-family: 'HangeulNuri-Bold';
        font-weight : bold;
        color : #89B5FE;
    `;


    const TeamWrap = styled.div`
        font-family : 'NeoDunggeunmo';
        display : flex;
        justify-content : space-around;
        color : grey;
        font-weight : bold;
        font-size : 30px;
        margin : 15px;
    `;

    const gameListClickHandler = ()=>{
        props.history.push('/game');
    }
    const [teamList , setTeamList] = useState([]);

    useEffect(() => {
        axios.get("http://52.78.203.80/api/mock/games").then((response) => {
        //  store.actions.setTeamList(response.data);
        setTeamList(response.data);
        });
      }, []);

    return (
      <>
        <GameListWrap>
          {teamList.map((list,index) => {
            return (
              <GameTeamCard onClick={gameListClickHandler}>
                <GameNumber>GAME {index+1}</GameNumber>

                <TeamWrap>
                  <Team>{list.away.name}</Team> VS <Team>{list.home.name}</Team>
                </TeamWrap>
              </GameTeamCard>
            );
          })}
        </GameListWrap>
      </>
    );
};

export default GameList;
