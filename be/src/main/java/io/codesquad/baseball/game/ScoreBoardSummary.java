package io.codesquad.baseball.game;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ScoreBoardSummary {

    String homeName;
    String awayName;
    boolean userIsHome;
    int homeScore;
    int awayScore;

}
