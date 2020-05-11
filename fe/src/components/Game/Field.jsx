import React from 'react';
import styled, { keyframes } from "styled-components";
import filedImg from '../../images/diamond2.png';


const Field = () => {

    const Wrap = styled.div`
        width : 1000px;
        height : 600px;
        box-sizing : border-box;
        display : flex;
        justify-content:space-between;
        padding : 10px;
        position : relative;
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
         font-family : 'NeoDunggeunmo';
         font-size : 20px;
        background : blue;
        color : white;
        border-radius : 10px;
        outline :0;
        border : 0;
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
      transform: rotate(41deg);
    `;
     const Route3 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 280px;
       top: 105px;
       left: 225px;
       transform: rotate(-42deg);
     `;

     const Route4 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 320px;
       top: 300px;
       left: 250px;
       transform: rotate(51deg);
     `;
    const AniImg = styled.img`
      height: 70px;
      margin-left: 150px;
      /* transform:rotate(0deg);
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1);   
        filter: FlipH;
        -ms-filter: "FlipH"; */
    `;

    const AniImg2 = styled.img`
      height: 70px;
      margin-left: -30px;
      transform: rotate(0deg);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
    `;

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
    };

    return (
        <Wrap>
            <SBOWrap>
                <SBO>S <Count style={{color : 'yellow'}}>●●</Count></SBO>
                <SBO>B<Count style={{color : 'green'}}>●●●</Count></SBO>
                <SBO>O<Count style={{color : 'red'}}>●●</Count></SBO>
            </SBOWrap>
            <Route1>
                <AniImg src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif" />
            </Route1>
            <Route2>
                <AniImg2 src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif" />
            </Route2>
            <Route3>
                <AniImg2 style={{marginLeft:"50px"}} src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif" />
            </Route3>
            <Route4>
                <AniImg  src="https://media2.giphy.com/media/YrCNxwsXSVLlw0TY1R/giphy.gif?cid=ecf05e47699788e3a0754d3861099fa54128c0c53f4695a0&rid=giphy.gif" />
            </Route4>
            <PitchBtn onClick={pitchBtnClickHandler}>Pitch!</PitchBtn>
            <PitchBtnWrap id="BSBtn"><BallBtn onClick={ballBtnClickHandler}>Ball</BallBtn><StrikeBtn onClick={strikeBtnClickHandler}>Strike</StrikeBtn></PitchBtnWrap>
            <FieldImg src={filedImg} />
            <GameInfo>2회초 수비</GameInfo>
        </Wrap>
    );
};

export default Field;