import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import infoBackImg from "../../images/전광판.png";

const PlayerInfo = ({data}) => {
  const [pitcherName, setPitcherName] = useState();
  const [pitcherCount, setPitcherCount] = useState();
  const [batterName, setBatterName] = useState();
  const [batterInfo, setBatterInfo] = useState();

  useEffect(() => {
    setPitcherName(data.pitcherName);
    setPitcherCount(`#${data.pitchCount}`);
    setBatterName(data.batterName);
    setBatterInfo(`${data.atBatCount}타석 ${data.hitCount}안타`);
  }, []);

  return (
    <Wrap>
      <PlayerWrap>
        <Position>[ 투수 ]</Position>
        <InfoWrap>
          <Player>▶ {pitcherName}</Player>
          <Info>{pitcherCount}</Info>
        </InfoWrap>
      </PlayerWrap>
      <PlayerWrap>
        <Position>[ 타자 ]</Position>
        <InfoWrap>
          <Player>▶ {batterName}</Player>
          <Info>{batterInfo}</Info>
        </InfoWrap>
      </PlayerWrap>
    </Wrap>
  );
};

export default PlayerInfo;

const Wrap = styled.div`
  width: 380px;
  height: 200px;
  box-sizing: border-box;
  /* background: rgba(255,255,255, 1); */
  margin: 10px 10px 10px 30px;
  padding: 20px;
  border-radius: 10px;
  border: solid 8px #a33756;
  background-image: url(${infoBackImg});
`;

const PlayerWrap = styled.div`
  margin-bottom: 15px;
`;

const Position = styled.div`
  font-family: "NeoDunggeunmo";
  font-size: 20px;
  /* margin-left : 5px; */
  color: white;
`;

const InfoWrap = styled.div`
  display: flex;
  height: 45px;
  margin-top: 5px;
  /* padding : 5px 5px 5px 10px; */
  box-sizing: border-box;
`;

const Player = styled.div`
  font-family: "NeoDunggeunmo";
  height: 100%;
  line-height: 45px;
  color: white;
  font-size: 23px;
  /* padding : 0px 5px 0px 5px; */
  box-sizing: border-box;
`;

const Info = styled.div`
  font-family: "NeoDunggeunmo";
  height: 100%;
  line-height: 45px;
  color: #28d685;
  font-size: 23px;
  margin-left: 10px;
  box-sizing: border-box;
`;
