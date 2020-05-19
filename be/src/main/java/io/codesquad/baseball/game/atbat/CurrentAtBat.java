package io.codesquad.baseball.game.atbat;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class CurrentAtBat {

    String pitcherName;
    int pitchCount;
    String batterName;
    int atBatCount;
    int hitCount;

}
