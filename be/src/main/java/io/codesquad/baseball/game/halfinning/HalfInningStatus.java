package io.codesquad.baseball.game.halfinning;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class HalfInningStatus {

    int strikeCount;
    int ballCount;
    int outCount;

    int inning;
    boolean inningIsTop; // if false, then bottom
    boolean userIsOffense;

    boolean runnerIsOnFirstBase;
    boolean runnerIsOnSecondBase;
    boolean runnerIsOnThirdBase;

}
