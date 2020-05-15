import React, { useState, useEffect, useReducer } from "react";
import styled, { keyframes } from "styled-components";
import Popup from "../Popup";


const TeamScore = ({data ,history}) => {

  // const popupBtnHandler = () => {
  // //  history.push("/score_players");
  // setPopupStyle({display : "flex"})
  // };


  const [isHome, setIsHome] = useState();
  const [homeScore , setHomeScore] = useState();
  const [awayScore , setAwayScore] = useState();
  const [popupStyle, setPopupStyle] = useState({display:"none"});


  useEffect(() => {
   setIsHome(data.userIsHome);
   setHomeScore(data.homeScore);
   setAwayScore(data.awayScore);
  }, []);


  const setPlayerMark = ()=>{
      let style = {};
      isHome === true ? style = {marginRight : "350px"} : style = {marginLeft : "350px"};
        return style;
    };


  const popupBtnHandler = ()=>{
    setPopupStyle({display:"flex"});
  };
  
  const closeBtnClickHandler = () => {
    setPopupStyle({display:"none"});
  };

  return (
    <>
    <Popup style={popupStyle} click={closeBtnClickHandler}/>
    <Wrap>
      <Title>BASEBALL</Title>
      <Subtitle>o n l i n e - b a s e b a l l - g a m e</Subtitle>
      <PopupBtn onClick={popupBtnHandler}>상세 점수·선수 명단</PopupBtn>
      <ScoreWrap>
        <TeamImg src={data.homeImageUrl}/>
        <Content>{data.homeName}</Content>
        <Score>{homeScore}</Score>
        <Score style={{ color: "#A33756" }}>vs</Score>
        <Content>{data.awayName}</Content>
        <Score>{awayScore}</Score>
        <TeamImg src={data.awayImageUrl}/>

      </ScoreWrap>
      <Player style={setPlayerMark()}>▲</Player>
    </Wrap>
    </>
  );
};

export default TeamScore;


const Wrap = styled.div`
  width: 1000px;
  height: 200px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-family: "NeoDunggeunmo";
  font-size: 40px;
  color: #ffffff;
  text-shadow: -4px 0 #a33756, 0 4px #a33756, 4px 0 #a33756, 0 -4px #a33756;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Subtitle = styled.div`
  font-size: 15px;
  color: #a33756;
`;

const PopupBtn = styled.button`
  position: absolute;
  top: 40px;
  left: 820px;
  outline: 0;
  background: rgba(255, 255, 255, 0.7);
  border: solid 3px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
  font-family: "NeoDunggeunmo";
  z-index : 5;
`;

const ScoreWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 98%;
  height : 85px;
  padding: 10px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px;
  border-radius: 10px;
`;

const Content = styled.div`
  font-family: "NeoDunggeunmo";
  font-size: 45px;
  color: white;
  height : 60px;
  line-height: 60px;
  margin-left : 10px;
`;

const Score = styled.div`
  font-family: "NeoDunggeunmo";
  font-size: 40px;
  color: white;
  height : 60px;
  line-height: 60px;
  margin : 0px 25px;
`;
const Player = styled.div`
  font-family: "GmarketSansBold";
  color: yellow;
`;

const TeamImg = styled.img`
  width: 60px;
  height : 60px;
  border-radius: 60px;
  margin-right : 20px;
`;
