package io.codesquad.baseball.game.atbat.pitch;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PitchOutcomeSummary {

    int pitchCount;
    int strikeCount;
    int ballCount;
    boolean isStrike;
    boolean isBall;
    boolean isOut;
    boolean isHit;

    @JsonGetter("isStrike")
    public boolean isStrike() {
        return isStrike;
    }

    @JsonGetter("isBall")
    public boolean isBall() {
        return isBall;
    }

    @JsonGetter("isOut")
    public boolean isOut() {
        return isOut;
    }

    @JsonGetter("isHit")
    public boolean isHit() {
        return isHit;
    }

}
