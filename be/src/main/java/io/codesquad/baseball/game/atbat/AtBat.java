package io.codesquad.baseball.game.atbat;

import io.codesquad.baseball.game.atbat.pitch.PitchOutcomeSummary;
import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class AtBat {

    String batterName;
    int battingOrder;
    List<PitchOutcomeSummary> pitchOutcomes;

}
