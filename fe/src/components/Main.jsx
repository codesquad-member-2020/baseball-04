import React from 'react';
import styled, { keyframes } from "styled-components"
import GameList from "./GameList"

const Main = () => {
    const MainWrap = styled.div`
        display : flex;
        justify-content : space-between;
    `;
    const ContentWrap = styled.div`
        text-align : center;
        margin : 20px;
        box-sizing : border-box;
        padding : 10px;
    `;
    const Title = styled.div`
        font-size : 60px;
        color : #FFFFFF; 
        text-shadow: -4px 0 #A33756,0 4px #A33756,4px 0 #A33756,0 -4px #A33756;
        margin : 20px;
        `;
    const Subtitle = styled.div`
        font-size : 20px;
        color : #A33756;
    `;
    const SelectMessage = styled.div`
        font-size : 20px;
        color : whitesmoke;
        margin : 30px;
    `;
    const BaseballImg = styled.img`
        height : 150px;
        margin : 50px;
    `;


    const Animation = styled.div`
      display : flex;
      border-bottom: solid 10px #28d685;
      width: 1400px;
      height: 110px;
      margin: auto;
    `;


    const AniImg = styled.img`
      height: 110px;
      margin-left : 170px;
      /* transform:rotate(0deg);
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1);   
        filter: FlipH;
        -ms-filter: "FlipH"; */
       
    `;


    return (
        <>
        <MainWrap>
        <BaseballImg src = "https://media3.giphy.com/media/cKnZaQbUWKv7QkYnFe/giphy.gif?cid=ecf05e4798aafc218b996e1a365bd43462688d94999f2bb6&rid=giphy.gif"/>
        <ContentWrap>
        <Title>BASEBALL</Title>
        <Subtitle>o n l i n e - b a s e b a l l - g a m e</Subtitle>
        <SelectMessage>참가할 게임을 선택해주세요.</SelectMessage>
        <GameList/>
        </ContentWrap>
        <BaseballImg src = "https://media3.giphy.com/media/cKnZaQbUWKv7QkYnFe/giphy.gif?cid=ecf05e4798aafc218b996e1a365bd43462688d94999f2bb6&rid=giphy.gif"/>
        </MainWrap>
        <Animation>
            <AniImg src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif" />
            <div style={{width: "1000px"}}></div>
            <div style={{width:"70px",borderBottom:"solid 18px #F8BB73"}}></div>
        </Animation>
        </>
    );
};

export default Main;