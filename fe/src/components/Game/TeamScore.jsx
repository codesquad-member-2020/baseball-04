import React from 'react';
import styled, { keyframes } from "styled-components"


const TeamScore = () => {

    const Wrap = styled.div`
      width: 1100px;
      height: 200px;
      box-sizing: border-box;
      text-align : center;
  
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

    return (
       <Wrap>
        <Title>BASEBALL</Title>
        <Subtitle>o n l i n e - b a s e b a l l - g a m e</Subtitle>
        <ScoreWrap>
            <Content>Captain</Content><Score>1</Score><Score style={{color : "#A33756"}}>vs</Score><Content>Marvel</Content><Score>2</Score>
        </ScoreWrap>
        <Player>▲</Player>
       </Wrap>
    );
};

export default TeamScore;