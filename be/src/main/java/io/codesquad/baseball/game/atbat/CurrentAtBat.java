package io.codesquad.baseball.game.atbat;

import io.codesquad.baseball.game.player.BatterStatSummary;
import io.codesquad.baseball.game.player.PitcherStatSummary;
import io.codesquad.baseball.game.team.batter.BatterStat;
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
