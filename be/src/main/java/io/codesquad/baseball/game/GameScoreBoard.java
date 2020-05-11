package io.codesquad.baseball.game;

import io.codesquad.baseball.game.team.TeamStat;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class GameScoreBoard {

    GameSummary gameSummary;
    TeamStat home;
    TeamStat away;

}
