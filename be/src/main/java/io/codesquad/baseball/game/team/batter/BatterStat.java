package io.codesquad.baseball.game.team.batter;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class BatterStat {

    String batterName;
    int atBatCount;
    int hitCount;
    int outCount;
    String average;

}
