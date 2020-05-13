package io.codesquad.baseball.game;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ScoreBoardSummary {

    String homeName;
    String homeImageUrl;
    String awayName;
    String awayImageUrl;
    int homeScore;
    int awayScore;
    boolean userIsHome;

}
