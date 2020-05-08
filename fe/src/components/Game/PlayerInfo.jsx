import React from 'react';
import styled, { keyframes } from "styled-components"


const PlayerInfo = () => {

    const Wrap = styled.div`
        width : 380px;
        height : 200px;
        box-sizing : border-box;
        background: rgba(255,255,255, 0.2);
        margin : 10px;
        padding : 20px;
        border-radius : 10px;
    `;

    const PlayerWrap = styled.div`
        margin-bottom : 15px;
    `;

    const Position = styled.div`
        font-family : 'NeoDunggeunmo';
        font-size : 20px;
        margin-left : 5px;
        color : white;
    `;

    const InfoWrap = styled.div`
        display : flex;
        height : 45px;
        margin-top :10px;
        /* padding : 5px 5px 5px 10px; */
        box-sizing : border-box;

    `;

    const Player = styled.div`
        font-family : 'NeoDunggeunmo';
        height : 100%;
        line-height :45px;
        color : white;
        font-size : 25px;
        padding : 0px 5px 0px 5px;
        background : #A33756;
        box-sizing : border-box;

    `;

    const Info = styled.div`
        font-family : 'NeoDunggeunmo';
        height : 100%;
        line-height : 45px;
        color : #28d685;
        font-size : 25px;
        margin-left : 10px;
        box-sizing : border-box;

    `;

    return (
      <Wrap>
          <PlayerWrap>
              <Position>[ 투수 ]</Position>
              <InfoWrap><Player>데이비드</Player><Info>#39</Info></InfoWrap>
          </PlayerWrap>
          <PlayerWrap>
              <Position>[ 타자 ]</Position>
              <InfoWrap><Player>하밀</Player><Info>1타석 0안타</Info> </InfoWrap>
          </PlayerWrap>
      </Wrap>
    );
};

export default PlayerInfo;