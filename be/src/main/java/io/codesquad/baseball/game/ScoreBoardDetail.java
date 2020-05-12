package io.codesquad.baseball.game;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class ScoreBoardDetail {

    String homeName;
    String awayName;
    int homeScore;
    int awayScore;
    boolean homeIsOffense;
    boolean userIsHome;
    List<Integer> homeInningScores;
    List<Integer> awayInningScores;

}
