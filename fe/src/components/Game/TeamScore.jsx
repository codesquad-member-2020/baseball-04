import React from 'react';
import styled, { keyframes } from "styled-components"


const TeamScore = (props) => {

    const Wrap = styled.div`
      width: 1000px;
      height: 200px;
      box-sizing: border-box;
      text-align : center;
      position : relative;
    `;

    const Title = styled.div`
      font-family : 'NeoDunggeunmo';
      font-size: 40px;
      color: #ffffff;
      text-shadow: -4px 0 #a33756, 0 4px #a33756, 4px 0 #a33756, 0 -4px #a33756;
      margin: auto;
      margin-top : 10px;
      margin-bottom : 5px;
    `;

    const Subtitle = styled.div`
        font-size : 15px;
        color : #A33756;
    `;

    const PopupBtn = styled.button`
        position : absolute;
        top : 40px;
        left : 820px;
        outline : 0;
        background : rgba(255,255,255, 0.7);
        border : solid 3px rgba(0,0,0, 0.5);
        box-sizing : border-box;
        font-size : 16px;
        border-radius : 5px;
        padding : 5px;
        font-family : 'NeoDunggeunmo';
    `;

    const ScoreWrap = styled.div`
        display :flex;
        justify-content : center;
        width : 98%;
        padding : 10px;
        box-sizing: border-box;
        background: rgba(255,255,255, 0.2);
        margin : 10px;
        border-radius : 10px;
    `;

    const Content = styled.div`
        font-family : 'NeoDunggeunmo';
        font-size : 45px;
        color : white;
        margin : 15px 30px 15px 30px;
    `;

    const Score = styled.div`
        font-family : 'NeoDunggeunmo';
        font-size : 40px;
        color : white;
        margin : 15px 30px 15px 30px;
    `;
    const Player = styled.div`
        font-family: 'GmarketSansBold';
        color : yellow;
        margin-left : 300px;
    `;

    const popupBtnHandler = ()=>{
        props.history.push('/score_players');
    };

    return (
       <Wrap>
        <Title>BASEBALL</Title>
        <Subtitle>o n l i n e - b a s e b a l l - g a m e</Subtitle>
        <PopupBtn onClick={popupBtnHandler}>상세 점수·선수 명단</PopupBtn>
        <ScoreWrap>
            <Content>LENA</Content><Score>1</Score><Score style={{color : "#A33756"}}>vs</Score><Content>JOY</Content><Score>2</Score>
        </ScoreWrap>
        <Player>▲</Player>
       </Wrap>
    );
};

export default TeamScore;