package io.codesquad.baseball.game.team;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class TeamSelectionDatum {

    long id;
    String name;
    String imageURL;
    boolean isAvailable;

    @JsonGetter("isAvailable")
    public boolean isAvailable() {
        return isAvailable;
    }

}
