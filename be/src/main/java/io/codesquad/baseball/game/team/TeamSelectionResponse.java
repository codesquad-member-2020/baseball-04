package io.codesquad.baseball.game.team;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class TeamSelectionResponse {

    boolean teamSelectionAccepted;

}
