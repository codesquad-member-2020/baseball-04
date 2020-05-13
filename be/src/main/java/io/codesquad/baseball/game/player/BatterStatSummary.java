package io.codesquad.baseball.game.player;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class BatterStatSummary {

    String batterName;
    int atBatCount;
    int hitCount;

}
