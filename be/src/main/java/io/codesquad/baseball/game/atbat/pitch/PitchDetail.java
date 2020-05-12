package io.codesquad.baseball.game.atbat.pitch;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PitchDetail {

    String message;
    boolean pitcherChoseStrike;
    boolean pitcherThrewStrike;
    boolean batterChoseSwing;
    boolean outcomeIsStrike;
    boolean outcomeIsBall;
    boolean outcomeIsOut;
    boolean outcomeIsHit;

}
