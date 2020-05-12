import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import filedImg from '../../images/diamond2.png';
import hitSound from '../../audio/hit.mp3';

const Field = () => {

    const Wrap = styled.div`
        width : 1000px;
        height : 600px;
        box-sizing : border-box;
        display : flex;
        justify-content:space-between;
        padding : 10px;
        position : relative;
        overflow : hidden;
    `;

    const SBOWrap = styled.div`
        width : 200px;
        padding : 10px;
    `;

    const SBO = styled.div`
        font-family : 'NeoDunggeunmo';
        color : white;
        font-size : 35px;
        margin : 5px;
        display :flex;
    `;

    const Count = styled.div`
        font-family : 'NeoDunggeunmo';
        color : white;
        font-size : 35px;
        margin-left :15px;
    `;


    const GameInfo = styled.div`
        font-family : 'NeoDunggeunmo';
        font-size : 30px;
        color : white;
        padding : 25px;
        width : 200px;
        margin : 0px 10px;

    `;
    const FieldImg = styled.img`
        width : 600px;
        height : 530px;
        margin-top : 10px;
        border-radius : 10px;
    `;

    const PitchBtn = styled.button`
        position : absolute;
        font-family : 'NeoDunggeunmo';
        top : 230px;
        left : 427px;
        font-size : 30px;
        border-radius : 10px;
        outline : 0;
        background : #BDBDBD;
    `;

    const PitchBtnWrap = styled.div`
        display : flex;
        position : absolute;
        top : 200px;
        left : 405px;
        width : 150px;
        display : flex;
        justify-content : center;
        margin : 2px;
        display : none ; 
        
    `;
    const BallBtn = styled.button`
        font-family : 'NeoDunggeunmo';
        font-size : 20px;
        background : #E26D07;
        color : white;
        border-radius : 10px;
        outline :0;
        border : 0;
        margin-right :5px;
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
    const move23 = keyframes`
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
      /* border-bottom : solid 3px red; */
      position: absolute;
      width: 320px;
      top: 305px;
      left: 385px;
      transform: rotate(-50deg);
    `;
    const Route2 = styled.div`
      /* border-bottom : solid 3px red; */
      position: absolute;
      width: 280px;
      top: 110px;
      left: 450px;
      transform: rotate(42deg);
    `;
     const Route3 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 280px;
       top: 105px;
       left: 235px;
       transform: rotate(-40deg);
     `;

     const Route4 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 330px;
       top: 295px;
       left: 230px;
       transform: rotate(50deg);
     `;
    const AniImg1 = styled.img`
      height: 70px;
      margin-left : 0px;
     ${props => {
         if(props.active){
             return css`animation : ${move1} 2s forwards`;
         }
     }}
    `;

    const AniImg2 = styled.img`
      height: 70px;
      margin-left : 210px;
      transform: rotate(0deg);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
      ${props => {
         if(props.active){
             return css`animation : ${move23} 2s forwards`;
         }
     }}
    `;

    const AniImg3 = styled.img`
      height: 70px;
      margin-left : 210px;
      transform: rotate(0deg);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
      ${props => {
         if(props.active){
             return css`animation : ${move23} 2s forwards`;
         }
     }}
    `;
    const AniImg4 = styled.img`
      height: 70px;
      margin-left: 0px;
      ${props => {
         if(props.active){
             return css`animation : ${move4} 3.5s forwards`;
         }
     }}
    `;

    const [batterPosition, setBatterPosition] = useState(0);


    const pitchBtnClickHandler = ()=> {
        const btnWrap = document.getElementById('BSBtn');
        btnWrap.style.display = "flex";
    };

    const ballBtnClickHandler = ()=>{
        const btnWrap = document.getElementById('BSBtn');
        btnWrap.style.display = "none";
    };

    const strikeBtnClickHandler = ()=>{
        const btnWrap = document.getElementById('BSBtn');
        btnWrap.style.display = "none";
        setBatterPosition(batterPosition + 1);
    };

    const runningAnimation = ()=> {

        const img = "https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif";
        
        if(batterPosition === 1){return <><Route1><AniImg1 active src={img}/></Route1></>}
        if(batterPosition === 2){return <><Route1><AniImg1 active src={img}/></Route1><Route2><AniImg2 active src={img} /></Route2> </>}
        if(batterPosition === 3){return <><Route1><AniImg1 active src={img} /></Route1><Route2><AniImg2 active src={img}/></Route2><Route3><AniImg3 active src={img}/></Route3></>};
        if(4<=batterPosition&&batterPosition<=9){return <><Route1><AniImg1 active src={img} /></Route1><Route2><AniImg2 active src={img}/></Route2><Route3><AniImg3 active src={img}/></Route3><Route4><AniImg4 active src={img}/></Route4></>}
        if(batterPosition===10){return <><Route2><AniImg2 active src={img}/></Route2><Route3><AniImg3 active src={img}/></Route3><Route4><AniImg4 active src={img}/></Route4></>}
        if(batterPosition===11){return <><Route3><AniImg3 active src={img}/></Route3><Route4><AniImg4 active src={img}/></Route4></>}
        if(batterPosition===12){return <><Route4><AniImg4 active src={img}/></Route4></>}
        if(batterPosition>12) return;
    };

    return (
        <Wrap>
            <SBOWrap>
                <SBO>S <Count style={{color : 'yellow'}}>●●</Count></SBO>
                <SBO>B<Count style={{color : 'green'}}>●●●</Count></SBO>
                <SBO>O<Count style={{color : 'red'}}>●●</Count></SBO>
            </SBOWrap>
            {runningAnimation()}
            <PitchBtn onClick={pitchBtnClickHandler}>Pitch!</PitchBtn>
            <PitchBtnWrap id="BSBtn"><BallBtn onClick={ballBtnClickHandler}>Ball</BallBtn><StrikeBtn onClick={strikeBtnClickHandler}>Strike</StrikeBtn></PitchBtnWrap>
            <FieldImg src={filedImg} />
            <GameInfo>2회초 수비</GameInfo>
        </Wrap>
    );
};

export default Field;