package io.codesquad.baseball.game.player;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PitcherStatSummary {

    String pitcherName;
    int pitchCount;

}
