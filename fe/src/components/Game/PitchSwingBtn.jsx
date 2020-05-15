import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const PitchSwingBtn = ({isOffense, click}) => {

  const [btnStyle, setBtnStyle] = useState({ display: "none" });
  const [btnName , setBtnName] = useState();
  const [firstBtnName , setFirstBtnName] = useState();  
  const [secondBtnName , setSecondBtnName] = useState();


  
  useEffect(() => {
   if(isOffense==true) setBtnName('Pitch!'); setFirstBtnName('strike'); setSecondBtnName('ball');
   if(isOffense==false) setBtnName('Swing!');setFirstBtnName('swing'); setSecondBtnName('　X　');
  }, []);

  const pitchSwingBtnClickHandler = () => {
    setBtnStyle({ display: "flex" });
  };

  const firstBtnClickHandler = () => {
    setBtnStyle({ display: "none" });
    let requestBody = '';
    let pitchBat = '';
    if(firstBtnName=='strike')  requestBody = '"choseStrike": true'; pitchBat = 'pitch';
    if(firstBtnName=='swing')  requestBody = '"choseSwing": true'; pitchBat = 'bat';
    click(requestBody,pitchBat);
  };
  const secondBtnClickHandler = () => {
    setBtnStyle({ display: "none" });
    let requestBody = '';
    let pitchBat = '';
    if(secondBtnName=='ball')  requestBody = '"choseStrike": false';pitchBat = 'pitch';
    if(secondBtnName=='　X　')  requestBody = '"choseSwing": false';pitchBat = 'bat';
    click(requestBody,pitchBat);
  };



    return (
        <>
        <BtnPitch onClick={pitchSwingBtnClickHandler}>{btnName}</BtnPitch>
      <PitchSwingBtnWrap style={btnStyle}>
    <FirstBtn onClick={()=>{firstBtnClickHandler();}}>{firstBtnName}</FirstBtn>
    <SecondBtn onClick={secondBtnClickHandler}>{secondBtnName}</SecondBtn>
      </PitchSwingBtnWrap>
      </>
    );
};

export default PitchSwingBtn;

const BtnPitch = styled.button`
position: absolute;
font-family: "NeoDunggeunmo";
top: 230px;
left: 427px;
font-size: 30px;
border-radius: 10px;
outline: 0;
background: #bdbdbd;
z-index : 1;
`;

const PitchSwingBtnWrap = styled.div`
position: absolute;
top: 200px;
left: 405px;
width: 150px;
justify-content: center;
margin: 2px;
display: none;
z-index : 1;

`;
const SecondBtn = styled.button`
font-family: "NeoDunggeunmo";
font-size: 20px;
background: #e26d07;
color: white;
border-radius: 10px;
outline: 0;
border: 0;
margin-right: 5px;
z-index : 1;

`;

const FirstBtn = styled.button`
font-family: "NeoDunggeunmo";
font-size: 20px;
background: blue;
color: white;
border-radius: 10px;
outline: 0;
border: 0;
z-index : 1;

`;