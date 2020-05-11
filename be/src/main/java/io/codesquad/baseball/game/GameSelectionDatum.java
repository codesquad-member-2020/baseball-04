package io.codesquad.baseball.game;

import io.codesquad.baseball.game.team.TeamSelectionDatum;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class GameSelectionDatum {

    long id;
    TeamSelectionDatum home;
    TeamSelectionDatum away;

}
