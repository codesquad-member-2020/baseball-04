package io.codesquad.baseball.game.team;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.codesquad.baseball.game.team.batter.BatterStat;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class TeamStat {

    private String teamName;
    @JsonProperty("isUser")
    private boolean isUser;
    private int battingOrder;
    private int teamAtBatCount;
    private int teamHitCount;
    private int teamOutCount;
    private List<BatterStat> batterStats;

}
