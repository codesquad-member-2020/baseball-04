package io.codesquad.baseball.game;

import io.codesquad.baseball.game.team.TeamStat;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class GameSummary {

    ScoreBoardDetail scoreBoard;
    TeamStat home;
    TeamStat away;

}
