import React from 'react';
import styled, { keyframes } from "styled-components";
import filedImg from '../../images/field.png';


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
        height : 550px;
        margin-top : 10px;
    `;

    return (
        <Wrap>
            <SBOWrap>
                <SBO>S <Count style={{color : 'yellow'}}>●●</Count></SBO>
                <SBO>B<Count style={{color : 'green'}}>●●●</Count></SBO>
                <SBO>O<Count style={{color : 'red'}}>●●</Count></SBO>
            </SBOWrap>
            <FieldImg src={filedImg} />
            <GameInfo>* 2회초 수비</GameInfo>
        </Wrap>
    );
};

export default Field;