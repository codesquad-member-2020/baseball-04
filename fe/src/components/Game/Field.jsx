import React from 'react';
import styled, { keyframes } from "styled-components";
import filedImg from '../../images/diamond2.png';
// import filedImg from '../../images/field2.png';
// import filedImg from '../../images/diamond.jpg';



const Field = () => {

    const Wrap = styled.div`
        width : 1100px;
        height : 600px;
        box-sizing : border-box;
        display : flex;
        justify-content:space-between;
        padding : 10px;
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
        padding : 15px;
        margin-right : 10px;

    `;
    const FieldImg = styled.img`
        width : 600px;
        height : 530px;
        margin-top : 10px;
        border-radius : 10px;
    `;

    const Route1 = styled.div`
      /* border-bottom : solid 3px red; */
      position: absolute;
      width: 320px;
      top: 570px;
      left: 500px;
      transform: rotate(-47deg);
    `;
    const Route2 = styled.div`
      /* border-bottom : solid 3px red; */
      position: absolute;
      width: 280px;
      top: 375px;
      left: 570px;
      transform: rotate(39deg);
    `;
     const Route3 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 280px;
       top: 370px;
       left: 325px;
       transform: rotate(-38deg);
     `;

     const Route4 = styled.div`
       /* border-bottom : solid 3px red; */
       position: absolute;
       width: 320px;
       top: 565px;
       left: 345px;
       transform: rotate(48deg);
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
            <FieldImg src={filedImg} />
            <GameInfo>* 2회초 수비</GameInfo>
        </Wrap>
    );
};

export default Field;