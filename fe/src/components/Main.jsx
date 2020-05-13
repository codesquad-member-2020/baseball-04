import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import GameList from "./GameList";

const Main = ({ history }) => {
  const MainWrap = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
  `;
  const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Title = styled.div`
    font-family: "NeoDunggeunmo";
    font-size: 80px;
    color: #ffffff;
    text-shadow: -4px 0 #a33756, 0 4px #a33756, 4px 0 #a33756, 0 -4px #a33756;
    text-align: center;
    margin: 20px;
  `;
  const Subtitle = styled.div`
    font-size: 20px;
    color: #a33756;
    font-weight: bold;
  `;

  const blink = keyframes`
0% {
color : white;
}
80%{
color : white;
}
100% { 
color :  #00ff0000;
}
`;
  const SelectMessage = styled.div`
    font-family: "NeoDunggeunmo";
    font-size: 20px;
    color: whitesmoke;
    margin: 30px;
    ${(props) => {
      if (props.active) {
        return css`
          animation: ${blink} 0.8s infinite alternate;
        `;
      }
    }}
  `;
  const BaseballImg = styled.img`
    height: 80px;
    margin: 10px;
  `;

  const Animation = styled.div`
    display: flex;
    width: 1450px;
    margin: auto;
    overflow: hidden;
  `;

  const run = keyframes`
0% {
margin-left : 0px;
}
100% { 
margin-left : 1600px;
}
`;

  const AniImg = styled.img`
    height: 140px;
    ${(props) => {
      if (props.run) {
        return css`
          animation: ${run} 8s infinite;
        `;
      }
    }}
  `;

  return (
    <>
      <MainWrap>
        <ContentWrap>
          <TitleWrap>
            <BaseballImg src="https://media3.giphy.com/media/cKnZaQbUWKv7QkYnFe/giphy.gif?cid=ecf05e4798aafc218b996e1a365bd43462688d94999f2bb6&rid=giphy.gif" />
            <Title>Baseball</Title>
            <BaseballImg src="https://media3.giphy.com/media/cKnZaQbUWKv7QkYnFe/giphy.gif?cid=ecf05e4798aafc218b996e1a365bd43462688d94999f2bb6&rid=giphy.gif" />
          </TitleWrap>
          <Subtitle>o n l i n e - b a s e b a l l - g a m e</Subtitle>
          <SelectMessage active>참가할 게임을 선택해주세요.</SelectMessage>
          <GameList history={history} />
        </ContentWrap>
      </MainWrap>
      <Animation>
        <AniImg
          run
          src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif"
        />
      </Animation>
    </>
  );
};

export default Main;
