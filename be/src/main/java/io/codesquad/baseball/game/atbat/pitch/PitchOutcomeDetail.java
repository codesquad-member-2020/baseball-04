package io.codesquad.baseball.game.atbat.pitch;

import io.codesquad.baseball.game.GameScreenData;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PitchOutcomeDetail {

    String message;
    boolean pitcherChoseStrike;
    boolean pitcherThrewStrike;
    boolean batterChoseSwing;
    boolean outcomeIsStrike;
    boolean outcomeIsBall;
    boolean outcomeIsOut;
    boolean outcomeIsHit;
    boolean runnerAdvancesToFirstBase;
    boolean runnerAdvancesToSecondBase;
    boolean runnerAdvancesToThirdBase;
    boolean runnerAdvancesToHomeBase;
    GameScreenData gameScreenData;

}
