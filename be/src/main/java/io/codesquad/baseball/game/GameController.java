package io.codesquad.baseball.game;

import io.codesquad.baseball.game.atbat.pitch.BatterChoice;
import io.codesquad.baseball.game.atbat.pitch.PitchOutcomeDetail;
import io.codesquad.baseball.game.atbat.pitch.PitcherChoice;
import io.codesquad.baseball.game.team.TeamSelectionResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController {

    @GetMapping("/games")
    public ResponseEntity<List<GameSelectionDatum>> getGames() {
        return null;
    }

    @PutMapping("/games/{gameId}/teams/{teamId}")
    public ResponseEntity<TeamSelectionResponse> selectTeam(@PathVariable long gameId, @PathVariable long teamId) {
        return null;
    }

    @GetMapping("/games/{gameId}")
    public ResponseEntity<GameScreenData> joinGameAsTeam(@PathVariable long gameId) {
        return null;
    }

    @PutMapping("/games/{gameId}/pitch")
    public ResponseEntity<PitchOutcomeDetail> getPitchOutcome(@PathVariable long gameId, @RequestBody PitcherChoice body) {
        return null;
    }

    @PutMapping("/games/{gameId}/bat")
    public ResponseEntity<PitchOutcomeDetail> getBatOutcome(@PathVariable long gameId, @RequestBody BatterChoice body) {
        return null;
    }

    @GetMapping("/games/{gameId}/scoreboard")
    public ResponseEntity<GameSummary> showScoreBoard(@PathVariable long gameId) {
        return null;
    }

}
