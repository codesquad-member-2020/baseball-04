import React from 'react';
import styled, { keyframes } from "styled-components"

const BattingLog = () => {

    const Wrap = styled.ul`
    width : 360px;
    height : 540px;
    box-sizing : border-box;
    background: rgba(0,0,0, 0.3);
    border-radius : 15px;
    padding : 25px 30px;
    margin : auto;
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

  


    return (
        <Wrap>
            <Log>
                <BatterName style = {{color : '#FA5882'}}>7번 타자 하밀</BatterName>
                <SBLogWrap>
                    <PitchNum>➎</PitchNum><SB>스트라이크</SB><SBNum>S2 B3</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➍</PitchNum><SB>스트라이크</SB><SBNum>S2 B3</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➌</PitchNum><SB>스트라이크</SB><SBNum>S2 B3</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➋</PitchNum><SB>스트라이크</SB><SBNum>S2 B3</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➊</PitchNum><SB>스트라이크</SB><SBNum>S2 B3</SBNum>
                </SBLogWrap>
            </Log>
            <Log>
                <BatterName >6번 타자 린</BatterName>
                <Result>- 안타!</Result>
                <SBLogWrap>
                    <PitchNum>➌</PitchNum><SB>볼</SB><SBNum>S1 B2</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➋</PitchNum><SB>볼</SB><SBNum>S1 B2</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➊</PitchNum><SB>스트라이크</SB><SBNum>S1 B0</SBNum>
                </SBLogWrap>
            </Log>
            <Log>
                <BatterName >5번 타자 디온</BatterName>
                <Result>- 아웃!</Result>
                <SBLogWrap>
                    <PitchNum>➍</PitchNum><SB>스트라이크</SB><SBNum>S3 B1</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➌</PitchNum><SB>볼</SB><SBNum>S2 B1</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➋</PitchNum><SB>스트라이크</SB><SBNum>S2 B0</SBNum>
                </SBLogWrap>
                <SBLogWrap>
                    <PitchNum>➊</PitchNum><SB>스트라이크</SB><SBNum>S1 B0</SBNum>
                </SBLogWrap>
            </Log>
        </Wrap>

    );
};

export default BattingLog;