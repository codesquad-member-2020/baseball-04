import React from 'react';
import styled, { keyframes } from "styled-components";
import TeamScore from './TeamScore';
import Field from './Field';
import PlayerInfo from './PlayerInfo';
import BattingLog from './BattingLog';

const Game = () => {

    const Wrap = styled.div`
        width : 100%;
        height : 100%;
        display : flex;
        flex-wrap : wrap;
        background: #241D4F;
        padding : 10px;
    `;

    return (
       <Wrap>
           <TeamScore/>
           <PlayerInfo/>
           <Field/>
           <BattingLog/>
       </Wrap>
    );
};

export default Game;