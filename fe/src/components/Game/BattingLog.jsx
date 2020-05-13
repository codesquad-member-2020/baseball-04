import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"

const BattingLog = ({data}) => {

    const Wrap = styled.ul`
    width : 360px;
    height : 540px;
    box-sizing : border-box;
    background: rgba(0,0,0, 0.3);
    border-radius : 15px;
    padding : 25px 30px;
    /* margin : auto; */
    margin-left : 40px;
    margin-top : 15px;
    overflow-y : scroll;
    &::-webkit-scrollbar { width: 15px;}
      ::-webkit-scrollbar-track { background-color: #00ff0000; border-radius:20px;}
      ::-webkit-scrollbar-thumb { background: #00ff0000 ;border-radius:5px; }
      ::-webkit-scrollbar-button { display: none; }
    
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.5);border-radius:20px; 
    };
    font-family : 'NeoDunggeunmo';
    color : white;
    font-size : 22px;
    `;

    const Log = styled.li`
        margin-bottom : 30px;
        border : solid 0.2px rgba(255,255,255, 0.2);
        box-sizing : border-box;
        padding : 15px;
    `;


    const BatterName = styled.div`
        color : #C1BEEF;
        margin-bottom : 20px;
        margin-top : 10px;
    `;

    const SBLogWrap = styled.div`
        display : flex;
        text-align : center;
        margin : 10px 0px;
    `;
    const PitchNum = styled.div`
        width : 25px;
        /* border : solid 1px red; */
    `;
    const SB = styled.div`
        width : 150px;
    `;
    const SBNum = styled.div`
        width : 120px;
        font-size : 28px;

    `;

    const Result = styled.div`
        color : #28d685;
        margin-bottom : 15px;
        margin-left : 5px;
        margin-right : 25px;
    `;

    const setPitchCountIcon = (num) => {
      switch (num) {
        case 1:
          return "➊";
        case 2:
          return "➋";
        case 3:
          return "➌";
        case 4:
          return "➍";
        case 5:
          return "➎";
          case 6:
            return "➏";
      }
    };

    const setSBMsg = (data)=>{
        if(data.strikeCount<0) return;
        return `S${data.strikeCount} B${data.ballCount}`
    };

    const setSBOMsg = (data) => {
      if (data.isStrike == true && data.isOut == true) {
        return <SB style={{ color: "#28d685" }}>삼진아웃!</SB>;
      } else if (data.isOut == true && data.isHit == true) {
        return <SB style={{ color: "#28d685" }}>볼넷!</SB>;
      }else if(data.isBall == true){
        return <SB>볼</SB>;
      }else if(data.isHit){
        return <SB style={{ color: "#28d685" }}>안타!</SB>;
      }else if(data.isStrike){
        return <SB>스트라이크</SB>;
      }else if(data.isOut){
        return <SB style={{ color: "#28d685" }}>아웃!</SB>;
      }
    };
    const setCurrentBatterStyle = (index)=>{
        let style = '';
        index===0 ? style={color : '#FA5882'} : style={color : '#C1BEEF'};
        return style;
    };


    return (
        <Wrap>
              {data.slice().reverse().map((list, index) => {
          return (
            <Log>     
            <BatterName style = {setCurrentBatterStyle(index)} >{list.battingOrder}번 타자 {list.batterName}</BatterName>
            {list.pitchOutcomes.slice().reverse().map((pitchList, index) => {
          return (
                <SBLogWrap>
                <PitchNum>{setPitchCountIcon(pitchList.pitchCount)}</PitchNum>{setSBOMsg(pitchList)}<SBNum>{setSBMsg(pitchList)}</SBNum>
            </SBLogWrap>

          );})}
        </Log>
          );
        })}
        </Wrap>

    );
};

export default BattingLog;