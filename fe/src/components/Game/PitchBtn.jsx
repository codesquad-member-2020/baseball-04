import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const PitchBtn = (props) => {

  const [btnStyle, setBtnStyle] = useState({ display: "none" });

  const pitchBtnClickHandler = () => {
    setBtnStyle({ display: "flex" });
  };

  const ballBtnClickHandler = () => {
    setBtnStyle({ display: "none" });
  };
  const strikeBtnClickHandler = () => {
    setBtnStyle({ display: "none" });
  };

    return (
        <>
        <BtnPitch onClick={pitchBtnClickHandler}>Pitch!</BtnPitch>
      <PitchBtnWrap style={btnStyle}>
        <BallBtn onClick={ballBtnClickHandler}>Ball</BallBtn>
        <StrikeBtn onClick={()=>{strikeBtnClickHandler(); props.click();}}>Strike</StrikeBtn>
      </PitchBtnWrap>
      </>
    );
};

export default PitchBtn;

const BtnPitch = styled.button`
position: absolute;
font-family: "NeoDunggeunmo";
top: 230px;
left: 427px;
font-size: 30px;
border-radius: 10px;
outline: 0;
background: #bdbdbd;
`;

const PitchBtnWrap = styled.div`
position: absolute;
top: 200px;
left: 405px;
width: 150px;
justify-content: center;
margin: 2px;
display: none;
`;
const BallBtn = styled.button`
font-family: "NeoDunggeunmo";
font-size: 20px;
background: #e26d07;
color: white;
border-radius: 10px;
outline: 0;
border: 0;
margin-right: 5px;
`;

const StrikeBtn = styled.button`
font-family: "NeoDunggeunmo";
font-size: 20px;
background: blue;
color: white;
border-radius: 10px;
outline: 0;
border: 0;
`;