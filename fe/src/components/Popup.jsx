import React from 'react';
import styled, { keyframes } from "styled-components"
import { cloneNode } from '@babel/types';

const Popup = ({history}) => {

    const Wrap = styled.div`
        width : 100%;
        height : 100%;
        display : flex;
        flex-wrap : wrap;
        background: #241D4F;
        padding : 10px;
        justify-content : center;
        box-sizing : border-box;
        font-family : 'NeoDunggeunmo';
        color : white;
    `;

    const ScoreWrap = styled.div`
        border : solid 1px white;
        width : 850px;
        height : 200px;
        padding : 10px;
        box-sizing : border-box;
        display : flex;
        flex-direction : column;
        justify-content :center;
        align-items :center;
        background: rgba(0,0,0, 0.3);

    `;
   
    const CloseBtn = styled.button`
        border :0;
        outline : 0;
        background : #00ff0000;
        color : white;
        font-size : 40px;
        position : absolute;
        top : 0;
        right : 70px;
        &:hover {
            color : #28d685;
        };
    `;

    const RoundWrap = styled.div`
      display: flex;
      justify-content: center;
      margin: 5px;
      border-bottom: solid 1px white;
      box-sizing: border-box;
    `;
    const TeamScoreWrap = styled.div`
      display: flex;
      justify-content: center;
      margin: 5px;
      box-sizing: border-box;
    `;

    const Round = styled.div`
      width: 40px;
      margin: 2px;
      font-size: 30px;
    `;

    const Result = styled.div`
        color : #28d685;
        width: 40px;
      margin: 2px;
      font-size: 30px;

    `;
    const ScorePlayerIndication = styled.div`
        color : yellow;
        font-size : 20px;
        margin-left : 10px;
    `;
    const ScoreTeamName = styled.div`
      font-size: 30px;
      margin: 2px;
      margin-right: 20px;
      width: 150px;
      text-align: center;
      box-sizing: border-box;
      display :flex;
      justify-content : center;
    `;

    const Playing = styled.div`
        width : 35px;
        font-size : 30px;
        box-sizing : border-box;
        text-align : center;
    `;

    const PlayersWrap = styled.div`
      display: flex;
    `;

    const TeamPlayerWrap = styled.div`
        width : 550px;
        height : 550px;
        border : solid 1px white;
        margin : 10px 0px;
        padding : 15px;
        box-sizing : border-box;
        background: rgba(0,0,0, 0.3);

    `;

    const TeamNameWrap = styled.div`
        display : flex;
        justify-content : center;
        border-bottom : solid 2px white;
        padding-bottom : 10px;
    `;

    const TeamName = styled.div`
        font-size : 30px;
        font-weight : bold;

    `;

    const PlayerIndication = styled.div`
        font-size : 25px;
        color : yellow;
        margin-left : 10px;
    `;

    const CategoryWrap = styled.div`
        display :flex;
        margin : 5px;
        padding : 10px;
        border-bottom : solid 2px grey;
    `;

    const Categories = styled.div`
        width : 100px;
        font-size : 23px;
        color :grey;
        box-sizing : border-box;
        text-align: center;
    `;

    const PlayerWrap = styled.div`
        display : flex;
        margin : 5px;
        padding : 7px;
        border-bottom : solid 1px grey;
    `;

    const PlayerName = styled.div`
        font-size : 23px;
        text-align: center;
        width : 100px;

    `;

    const Values = styled.div`
        font-size : 23px;
        text-align: center;
        width : 100px;
    `;

    const Totals = styled.div`
        font-size : 23px;
        text-align: center;
        width : 100px;
        color : #28d685;
        font-weight : bold;
    `;

    const closeBtnHandler = ()=>{
        history.push('/game');

    };

    return (
        <Wrap> 
            <CloseBtn onClick={closeBtnHandler}>X</CloseBtn>
        <ScoreWrap>
            <RoundWrap><Playing></Playing><ScoreTeamName></ScoreTeamName><Round>1</Round><Round>2</Round><Round>3</Round><Round>4</Round><Round>5</Round><Round>6</Round><Round>7</Round><Round>8</Round><Round>9</Round><Round>10</Round><Round>11</Round><Round>12</Round><Round>R</Round></RoundWrap>
            <TeamScoreWrap><Playing>⚾</Playing><ScoreTeamName>LENA<ScorePlayerIndication></ScorePlayerIndication></ScoreTeamName><Round>1</Round><Round>0</Round><Round>0</Round><Round>0</Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Result>1</Result></TeamScoreWrap>
            <TeamScoreWrap><Playing></Playing><ScoreTeamName>JOY<ScorePlayerIndication>◀</ScorePlayerIndication></ScoreTeamName><Round>1</Round><Round>2</Round><Round>2</Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Round></Round><Result>5</Result></TeamScoreWrap>

        </ScoreWrap>
        <PlayersWrap>
            <TeamPlayerWrap>
                <TeamNameWrap><TeamName>LENA</TeamName><PlayerIndication></PlayerIndication></TeamNameWrap>
                <CategoryWrap><Categories>타자</Categories><Categories>타석</Categories><Categories>안타</Categories><Categories>아웃</Categories><Categories>평균</Categories></CategoryWrap>
            <PlayerWrap>
                <PlayerName>델마</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>지니</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>강운</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>올라프</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap style={{color : '#FA5882'}}>
                <PlayerName>또치</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>제이슨</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>코리</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>하이디</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>JK</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap><Totals>Totals</Totals><Totals>9</Totals><Totals>0</Totals><Totals>0</Totals><Totals></Totals></PlayerWrap>
            
            </TeamPlayerWrap>
            <TeamPlayerWrap>
            <TeamNameWrap><TeamName>JOY</TeamName><PlayerIndication>◀</PlayerIndication></TeamNameWrap>
                <CategoryWrap><Categories>타자</Categories><Categories>타석</Categories><Categories>안타</Categories><Categories>아웃</Categories><Categories>평균</Categories></CategoryWrap>
            <PlayerWrap>
                <PlayerName>샐리</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>엘린</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>후</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>아리</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>휴이</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>택</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>원</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap style={{color : '#FA5882'}}>
                <PlayerName>젤로</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap>
                <PlayerName>백코</PlayerName><Values>1</Values><Values>1</Values><Values>0</Values><Values>1.000</Values>
            </PlayerWrap>
            <PlayerWrap><Totals>Totals</Totals><Totals>9</Totals><Totals>0</Totals><Totals>0</Totals><Totals></Totals></PlayerWrap>
            
            </TeamPlayerWrap>
        </PlayersWrap>
       </Wrap>
           
    );
};

export default Popup;