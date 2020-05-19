package io.codesquad.baseball.game.atbat.pitch;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Baserunning {

    boolean runnerAdvancesToFirstBase;
    boolean runnerAdvancesToSecondBase;
    boolean runnerAdvancesToThirdBase;
    boolean runnerAdvancesToHomeBase;

}
