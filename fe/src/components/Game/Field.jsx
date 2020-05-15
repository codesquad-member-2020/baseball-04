import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import filedImg from "../../images/diamond2.png";
import PitchSwingBtn from "./PitchSwingBtn";

const Field = ({ data, click ,baseRunning, pitchDetail}) => {
  const Wrap = styled.div`
    width: 1000px;
    height: 600px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    overflow: hidden;
  `;

  const SBOWrap = styled.div`
    width: 200px;
    padding: 10px;
  `;

  const SBO = styled.div`
    font-family: "NeoDunggeunmo";
    color: white;
    font-size: 35px;
    margin: 5px;
    display: flex;
  `;

  const Count = styled.div`
    font-family: "NeoDunggeunmo";
    color: white;
    font-size: 35px;
    margin-left: 15px;
  `;

  const GameInfo = styled.div`
    font-family: "NeoDunggeunmo";
    font-size: 30px;
    color: white;
    padding: 25px;
    width: 200px;
    margin: 0px 10px;
  `;
  const FieldImg = styled.img`
    width: 600px;
    height: 530px;
    margin-top: 10px;
    border-radius: 10px;
  `;

  //초기 0, 이동 270
  const move1 = keyframes`
    0%{
     margin-left : 0px;
    }
    100%{
      margin-left : 270px;
    }
    `;
  // 초기 0, 이동 210 -> -25
  const move2 = keyframes`
    0% {
     margin-left : 210px;
    }
    100% { 
     margin-left : -25px;
     }
    `;
    const move3 = keyframes`
    0% {
     margin-left : 210px;
    }
    100% { 
     margin-left : -25px;
     }
    `;
  const move4 = keyframes`
    0%{
     margin-left : 0px;
    }
    80%{ 
     margin-left : 400px;
    }
   100%{
    width :0px;
   }
    
    `;
  const Route1 = styled.div`
    position: absolute;
    width: 320px;
    top: 305px;
    left: 385px;
    transform: rotate(-50deg);
  `;
  const Route2 = styled.div`
    position: absolute;
    width: 280px;
    top: 110px;
    left: 450px;
    transform: rotate(42deg);
  `;
  const Route3 = styled.div`
    position: absolute;
    width: 280px;
    top: 105px;
    left: 235px;
    transform: rotate(-40deg);
  `;

  const Route4 = styled.div`
    position: absolute;
    width: 330px;
    top: 295px;
    left: 230px;
    transform: rotate(50deg);
  `;
  const AniImg1 = styled.img`
    height: 70px;
    margin-left: 0px;
    ${(props) => {
      if (props.active) {
        return css`
          animation: ${move1} 2s forwards;
        `;
      }
    }}
  `;

  const AniImg2 = styled.img`
    height: 70px;
    margin-left: 210px;
    transform: rotate(0deg);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    ${(props) => {
      if (props.active) {
        return css`
          animation: ${move2} 2s forwards;
        `;
      }
    }}
  `;

  const AniImg3 = styled.img`
    height: 70px;
    margin-left: 210px;
    transform: rotate(0deg);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    ${(props) => {
      if (props.active) {
        return css`
          animation: ${move3} 2s forwards;
        `;
      }
    }}
  `;
  const AniImg4 = styled.img`
    height: 70px;
    margin-left: 0px;
    ${(props) => {
      if (props.active) {
        return css`
          animation: ${move4} 4s forwards;
        `;
      }
    }}
  `;
  const ResultWrap = styled.div`
    position : absolute;
    width : 95%;
    height : 250px;
    top : 350px;
    display :flex;
    justify-content : center;
    align-items : center;
    box-sizing : border-box;
   

  `;
  const ResultMsg = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 800px;
    height: 150px;
    border-radius: 20px;
    padding: 50px 40px 30px 40px;
    box-sizing: border-box;
    margin: auto;
    color: white;
    font-family: "NeoDunggeunmo";
    font-size: 30px;
    text-align: center;
    ${(props) => {
      if (props.show) {
        return css`
          animation: ${showMessage} 4s forwards;
        `;
      }
    }}
  `;
  const FireworksWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const Fireworks = styled.img`
    width: 100%;
    height: 100%;
    ${(props) => {
      if (props.showF) {
        return css`
          animation: ${showFireworks} 4s forwards;
        `;
      }
    }}
  `;
  const showMessage = keyframes`
    0% {
      opacity : 0;
    }
    40% {
      opacity : 1;
    }
    80%{
      opacity : 1;
    }
    100% {
      opacity : 0;
    }
    `;
    const showFireworks = keyframes`
    0% {
      opacity : 0;
    }
    40% {
      opacity : 1;
    }
    80%{
      opacity : 1;
    }
    99%{
      opacity :0;
    }
    100% {
      opacity : 0;
      z-index : -2;
    }
    `;

    

  // const [batterPosition, setBatterPosition] = useState(0);

  const [inning, setInning] = useState();
  const [ballCount, setBallCount] = useState();
  const [strikeCount, setStrikeCount] = useState();
  const [outCount, setOutCount] = useState();
  const [firstBase, setFirstBase] = useState();
  const [secondBase, setSecondBase] = useState();
  const [thirdBase, setThirdBase] = useState();
  const [homeBase, setHomeBase] = useState(false);


  useEffect(() => {
    setInning(setInningMsg(data));
    setBallCount(makeCircle(data.ballCount));
    setStrikeCount(makeCircle(data.strikeCount));
    setOutCount(makeCircle(data.outCount));
    setFirstBase(data.runnerIsOnFirstBase);
    setSecondBase(data.runnerIsOnSecondBase);
    setThirdBase(data.runnerIsOnThirdBase);
    
    baseRunning==='' ? setHomeBase(false) : setHomeBase(baseRunning.runnerAdvancesToHomeBase);

    console.log(baseRunning);
    console.log(pitchDetail);
  }, []);

  const setInningMsg = (data) => {
    let msg = '';
    const isTop = data.inningIsTop === true ? "초" : "말";
    const offense = data.userIsOffense === true ? "수비" : "공격";
    msg = `${data.inning}회${isTop} ${offense}`;
    if(data.inningIsTop==null || data.userIsOffense ==null ) msg='';
    return msg ;
  };

  const makeCircle = (num) => {
    let countCircle = "";
    for (let i = 0; i < num; i++) {
      countCircle += "●";
    }
    return countCircle;
  };

  const showMsg = ()=> {
  if(pitchDetail==='')return;
  if(pitchDetail.outcomeIsHit==true){

    // const img = "https://media1.giphy.com/media/3rYxjPwF5i9mALN1UM/giphy.gif?cid=ecf05e4717c670d1f4c5de672ccd5c6468bac448d48d29d5&rid=giphy.gif"
    // const img = "https://media2.giphy.com/media/eJ5oQjIgCo8rS/giphy.gif?cid=ecf05e47007419c0af6338b27f5c1534ecd51607de8452eb&rid=giphy.gif";
    // const img = "https://media1.giphy.com/media/NxpMNq17Y2Khq/giphy.gif?cid=ecf05e47eaff096097e66a0e5fb050ad641024471c446454&rid=giphy.gif";
    // const img = "https://media0.giphy.com/media/xT9IgMgdur6larNA1a/giphy.gif?cid=ecf05e47a97e61665c0d41d45b42ad067b71ee3b730e1fbc&rid=giphy.gif";
    // const img = "https://media2.giphy.com/media/3ohhwzIw3bISRhQWME/giphy.gif?cid=ecf05e471fe8ed4e6a649f599210813c2a3f24021fd0a59d&rid=giphy.gif";
    // const img="https://media3.giphy.com/media/LwDos9YUtFxZU8TfzW/giphy.gif?cid=ecf05e4781dc7b97a7601d526c014a28baa47e9b65797597&rid=giphy.gif";
  const img = "https://media2.giphy.com/media/eKlyWo5MCbWf2oVpCp/giphy.gif?cid=ecf05e47e74832139bef590ba8af0a383758a783e7e0f262&rid=giphy.gif";
  return <>    <FireworksWrap><Fireworks showF src={img}/></FireworksWrap>
    <ResultWrap><ResultMsg show>{pitchDetail.message}</ResultMsg></ResultWrap> </>
  }else{
    return <ResultWrap><ResultMsg show>{pitchDetail.message}</ResultMsg></ResultWrap>
  }
  };

  const setBatter = () => {
    const img =
      "https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif";

    if (secondBase === false) {
      return (
        <>
          <Route1>
            <AniImg1 active src={img} />
          </Route1>
        </>
      );
    }
    if (thirdBase === false) {
      return (
        <>
          <Route1>
            <AniImg1 active src={img} />
          </Route1>
          <Route2>
            <AniImg2 active src={img} />
          </Route2>
        </>
      );
    }
    if (homeBase==false && thirdBase === true) {
      return (
        <>
          <Route1>
            <AniImg1 active src={img} />
          </Route1>
          <Route2>
            <AniImg2 active src={img} />
          </Route2>
          <Route3>
            <AniImg3 active src={img} />
          </Route3>
        </>
      );
    }
    if (homeBase == true) {
      return (
        <>
          <Route1>
            <AniImg1 active src={img} />
          </Route1>
          <Route2>
            <AniImg2 active src={img} />
          </Route2>
          <Route3>
            <AniImg3 active src={img} />
          </Route3>
          <Route4>
            <AniImg4 active src={img} />
          </Route4>
        </>
      );
    }
  };

  return (
    <>
    <Wrap>

      <SBOWrap>
        <SBO>
          S <Count style={{ color: "yellow" }}>{strikeCount}</Count>
        </SBO>
        <SBO>
          B<Count style={{ color: "green" }}>{ballCount}</Count>
        </SBO>
        <SBO>
          O<Count style={{ color: "red" }}>{outCount}</Count>
        </SBO>
      </SBOWrap>
      {setBatter()}
      <PitchSwingBtn isOffense = {data.userIsOffense} click = {click}/>
      <FieldImg src={filedImg} />
      
    {showMsg()}
      <GameInfo>{inning}</GameInfo>
    </Wrap>
    </>
  );
};

export default Field;

