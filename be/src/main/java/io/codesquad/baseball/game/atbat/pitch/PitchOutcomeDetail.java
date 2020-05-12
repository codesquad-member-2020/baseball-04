package io.codesquad.baseball.game.atbat.pitch;

import io.codesquad.baseball.game.GameScreenData;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PitchOutcomeDetail {

    boolean endOfHalfInning;
    PitchDetail pitchDetail;
    Baserunning baserunning;
    GameScreenData gameScreenData;

}
