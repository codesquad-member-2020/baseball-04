package io.codesquad.baseball.game;

import io.codesquad.baseball.game.atbat.AtBat;
import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class GameScreenData {

    String homeName;
    String awayName;
    boolean userIsHome;
    int homeScore;
    int awayScore;

    String pitcherName;
    int pitchCount;
    String batterName;
    int atBatCount;
    int hitCount;

    int strikeCount;
    int ballCount;
    int outCount;

    int inning;
    boolean inningIsTop; // if false, then bottom
    boolean userIsOffense;

    boolean runnerIsOnFirstBase;
    boolean runnerIsOnSecondBase;
    boolean runnerIsOnThirdBase;

    List<AtBat> atBats;

}
