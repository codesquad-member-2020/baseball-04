package io.codesquad.baseball.game;

import io.codesquad.baseball.game.atbat.AtBat;
import io.codesquad.baseball.game.atbat.CurrentAtBat;
import io.codesquad.baseball.game.halfinning.HalfInningStatus;
import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class GameScreenData {

    ScoreBoardSummary scoreBoard;
    CurrentAtBat currentAtBat;
    HalfInningStatus halfInningStatus;
    List<AtBat> atBats;

}
