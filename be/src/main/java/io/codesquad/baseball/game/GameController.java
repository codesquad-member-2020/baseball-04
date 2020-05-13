package io.codesquad.baseball.game;

import io.codesquad.baseball.game.atbat.pitch.BatterChoice;
import io.codesquad.baseball.game.atbat.pitch.PitchOutcomeDetail;
import io.codesquad.baseball.game.atbat.pitch.PitcherChoice;
import io.codesquad.baseball.game.team.TeamSelectionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class GameController {

    private final GameSelector gameSelector;
    private final GameMatcher gameMatcher;
    private final GameViewer gameViewer;

    public GameController(GameSelector gameSelector, GameMatcher gameMatcher, GameViewer gameViewer) {
        this.gameSelector = gameSelector;
        this.gameMatcher = gameMatcher;
        this.gameViewer = gameViewer;
    }

    @GetMapping("/games")
    public ResponseEntity<List<GameSelectionDatum>> getGames() {
        return ResponseEntity.ok(gameSelector.getGameSelectionData());
    }

    @PutMapping("/games/{gameId}/teams/{teamId}")
    public ResponseEntity<TeamSelectionResponse> selectTeam(@PathVariable long gameId,
                                                            @PathVariable long teamId,
                                                            HttpSession session) {
        boolean teamSelectionAccepted = gameSelector.selectTeam(gameId, teamId, session);
        return ResponseEntity.status(teamSelectionAccepted ? HttpStatus.OK : HttpStatus.CONFLICT)
                             .body(TeamSelectionResponse.builder()
                                                        .teamSelectionAccepted(teamSelectionAccepted)
                                                        .build());
    }

    @GetMapping("/games/{gameId}")
    public ResponseEntity<GameScreenData> joinGameAsTeam(@PathVariable long gameId,
                                                         HttpSession session) throws InterruptedException {
        gameMatcher.matchGame(gameId, session);
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
