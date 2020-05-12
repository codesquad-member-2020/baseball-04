package io.codesquad.baseball.mock;

import io.codesquad.baseball.game.GameScreenData;
import io.codesquad.baseball.game.GameSelectionDatum;
import io.codesquad.baseball.game.GameSummary;
import io.codesquad.baseball.game.ScoreBoardDetail;
import io.codesquad.baseball.game.ScoreBoardSummary;
import io.codesquad.baseball.game.atbat.AtBat;
import io.codesquad.baseball.game.atbat.CurrentAtBat;
import io.codesquad.baseball.game.atbat.pitch.Baserunning;
import io.codesquad.baseball.game.atbat.pitch.BatterChoice;
import io.codesquad.baseball.game.atbat.pitch.PitchDetail;
import io.codesquad.baseball.game.atbat.pitch.PitchOutcomeDetail;
import io.codesquad.baseball.game.atbat.pitch.PitchOutcomeSummary;
import io.codesquad.baseball.game.atbat.pitch.PitcherChoice;
import io.codesquad.baseball.game.halfinning.HalfInningStatus;
import io.codesquad.baseball.game.team.TeamSelectionDatum;
import io.codesquad.baseball.game.team.TeamSelectionResponse;
import io.codesquad.baseball.game.team.TeamStat;
import io.codesquad.baseball.game.team.batter.BatterStat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/mock")
public class MockGameController {

    @GetMapping("/games")
    public ResponseEntity<List<GameSelectionDatum>> getGames() {
        List<GameSelectionDatum> games = new ArrayList<>();
        games.add(GameSelectionDatum.builder()
                                    .id(1)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(1)
                                                            .name("JK")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U75J67NMV-0b94bf9f88a1-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(2)
                                                            .name("Crong")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U74HAJ05S-b82cb3c93123-512")
                                                            .isAvailable(false)
                                                            .build())
                                    .build());
        games.add(GameSelectionDatum.builder()
                                    .id(2)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(3)
                                                            .name("Honux")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U74KKLB0D-4f2767985e3d-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(4)
                                                            .name("Yagom")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-UGC7G9DJM-776a188ac654-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .build());
        games.add(GameSelectionDatum.builder()
                                    .id(3)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(5)
                                                            .name("Sarah")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U9HQY3J2V-9d5f0f61e24f-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(6)
                                                            .name("Head")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-UCPASM4UQ-5db147338014-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .build());
        games.add(GameSelectionDatum.builder()
                                    .id(4)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(1)
                                                            .name("JK")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U75J67NMV-0b94bf9f88a1-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(2)
                                                            .name("Crong")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U74HAJ05S-b82cb3c93123-512")
                                                            .isAvailable(false)
                                                            .build())
                                    .build());
        games.add(GameSelectionDatum.builder()
                                    .id(5)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(3)
                                                            .name("Honux")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U74KKLB0D-4f2767985e3d-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(4)
                                                            .name("Yagom")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-UGC7G9DJM-776a188ac654-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .build());
        games.add(GameSelectionDatum.builder()
                                    .id(6)
                                    .home(TeamSelectionDatum.builder()
                                                            .id(5)
                                                            .name("Sarah")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-U9HQY3J2V-9d5f0f61e24f-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .away(TeamSelectionDatum.builder()
                                                            .id(6)
                                                            .name("Head")
                                                            .imageURL(
                                                            "https://ca.slack-edge.com/T74H5245A-UCPASM4UQ-5db147338014-512")
                                                            .isAvailable(true)
                                                            .build())
                                    .build());
        return ResponseEntity.ok(games);
    }

    @PutMapping("/games/{gameId}/teams/{teamId}")
    public ResponseEntity<TeamSelectionResponse> selectTeam(@PathVariable long gameId, @PathVariable long teamId) {
        return ResponseEntity.ok(new TeamSelectionResponse(true));
    }

    @GetMapping("/games/{gameId}")
    public ResponseEntity<GameScreenData> joinGameAsTeam(@PathVariable long gameId) {
        GameScreenData gameScreenData = GameScreenData.builder()
                                                      .scoreBoard(ScoreBoardSummary.builder()
                                                                                   .homeName("Captain")
                                                                                   .awayName("Marvel")
                                                                                   .homeScore(1)
                                                                                   .awayScore(5)
                                                                                   .userIsHome(true)
                                                                                   .build())
                                                      .currentAtBat(CurrentAtBat.builder()
                                                                                .pitcherName("최동원")
                                                                                .pitchCount(39)
                                                                                .batterName("류현진")
                                                                                .atBatCount(1)
                                                                                .hitCount(0)
                                                                                .build())
                                                      .halfInningStatus(HalfInningStatus.builder()
                                                                                        .strikeCount(2)
                                                                                        .ballCount(3)
                                                                                        .outCount(2)
                                                                                        .inning(2)
                                                                                        .inningIsTop(true)
                                                                                        .userIsOffense(false)
                                                                                        .runnerIsOnFirstBase(true)
                                                                                        .runnerIsOnSecondBase(true)
                                                                                        .runnerIsOnThirdBase(true)
                                                                                        .build())
                                                      .atBats(getAtBats1())
                                                      .build();
        return ResponseEntity.ok(gameScreenData);
    }

    @PutMapping("/games/{gameId}/pitch")
    public ResponseEntity<PitchOutcomeDetail> getPitchOutcome(@PathVariable long gameId, @RequestBody PitcherChoice body) {
        GameScreenData gameScreenData = GameScreenData.builder()
                                                      .scoreBoard(ScoreBoardSummary.builder()
                                                                                   .homeName("Captain")
                                                                                   .awayName("Marvel")
                                                                                   .homeScore(1)
                                                                                   .awayScore(6)
                                                                                   .userIsHome(true)
                                                                                   .build())
                                                      .currentAtBat(CurrentAtBat.builder()
                                                                                .pitcherName("최동원")
                                                                                .pitchCount(40)
                                                                                .batterName("이승엽")
                                                                                .atBatCount(1)
                                                                                .hitCount(1)
                                                                                .build())
                                                      .halfInningStatus(HalfInningStatus.builder()
                                                                                        .strikeCount(0)
                                                                                        .ballCount(0)
                                                                                        .outCount(2)
                                                                                        .inning(2)
                                                                                        .inningIsTop(true)
                                                                                        .userIsOffense(false)
                                                                                        .runnerIsOnFirstBase(true)
                                                                                        .runnerIsOnSecondBase(true)
                                                                                        .runnerIsOnThirdBase(true)
                                                                                        .build())
                                                      .atBats(getAtBats2())
                                                      .build();
        PitchOutcomeDetail pitchOutcomeDetail = PitchOutcomeDetail.builder()
                                                                  .endOfHalfInning(false)
                                                                  .pitchDetail(PitchDetail.builder()
                                                                                          .message("투수 선택: 스트라이크 " +
                                                                                                   "투구 결과: 스트라이크 " +
                                                                                                   "타자 선택: 스윙 " +
                                                                                                   "결과: 안타")
                                                                                          .pitcherChoseStrike(true)
                                                                                          .pitcherThrewStrike(true)
                                                                                          .batterChoseSwing(true)
                                                                                          .outcomeIsHit(true)
                                                                                          .build())
                                                                  .baserunning(Baserunning.builder()
                                                                                          .runnerAdvancesToFirstBase(true)
                                                                                          .runnerAdvancesToSecondBase(true)
                                                                                          .runnerAdvancesToThirdBase(true)
                                                                                          .runnerAdvancesToHomeBase(true)
                                                                                          .build())
                                                                  .gameScreenData(gameScreenData)
                                                                  .build();
        return ResponseEntity.ok(pitchOutcomeDetail);
    }

    @PutMapping("/games/{gameId}/bat")
    public ResponseEntity<PitchOutcomeDetail> getBatOutcome(@PathVariable long gameId, @RequestBody BatterChoice body) {
        return getPitchOutcome(gameId, null);
    }

    @GetMapping("/games/{gameId}/game-summary")
    public ResponseEntity<GameSummary> getGameSummary(@PathVariable long gameId) {
        GameSummary gameSummary = GameSummary.builder()
                                             .scoreBoard(getGameSummary())
                                             .home(getTeamStatResponse1(true))
                                             .away(getTeamStatResponse2(false))
                                             .build();
        return ResponseEntity.ok(gameSummary);
    }

    private List<AtBat> getAtBats1() {
        List<AtBat> atBats = new ArrayList<>();
        atBats.add(AtBat.builder()
                        .battingOrder(5)
                        .batterName("추신수")
                        .pitchOutcomes(getPitchResults1())
                        .build());
        atBats.add(AtBat.builder()
                        .battingOrder(6)
                        .batterName("이용대")
                        .pitchOutcomes(getPitchResults2())
                        .build());
        atBats.add(AtBat.builder()
                        .battingOrder(7)
                        .batterName("류현진")
                        .pitchOutcomes(getPitchResults3())
                        .build());
        return atBats;
    }

    private List<AtBat> getAtBats2() {
        List<AtBat> atBats = new ArrayList<>();
        atBats.add(AtBat.builder()
                        .battingOrder(5)
                        .batterName("추신수")
                        .pitchOutcomes(getPitchResults1())
                        .build());
        atBats.add(AtBat.builder()
                        .battingOrder(6)
                        .batterName("이용대")
                        .pitchOutcomes(getPitchResults2())
                        .build());
        atBats.add(AtBat.builder()
                        .battingOrder(7)
                        .batterName("류현진")
                        .pitchOutcomes(getPitchResults4())
                        .build());
        atBats.add(AtBat.builder()
                        .battingOrder(8)
                        .batterName("이승엽")
                        .pitchOutcomes(new ArrayList<>())
                        .build());
        return atBats;
    }

    private List<PitchOutcomeSummary> getPitchResults1() {
        List<PitchOutcomeSummary> pitchOutcomes = new ArrayList<>();
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(1)
                                             .isStrike(true)
                                             .strikeCount(1)
                                             .ballCount(0)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(2)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(1)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(3)
                                             .isStrike(true)
                                             .strikeCount(2)
                                             .ballCount(1)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(4)
                                             .isStrike(true)
                                             .isOut(true)
                                             .strikeCount(-1)
                                             .ballCount(-1)
                                             .build());
        return pitchOutcomes;
    }

    private List<PitchOutcomeSummary> getPitchResults2() {
        List<PitchOutcomeSummary> pitchOutcomes = new ArrayList<>();
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(1)
                                             .isStrike(true)
                                             .strikeCount(1)
                                             .ballCount(0)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(2)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(1)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(3)
                                             .strikeCount(-1)
                                             .ballCount(-1)
                                             .isHit(true)
                                             .build());
        return pitchOutcomes;
    }

    private List<PitchOutcomeSummary> getPitchResults3() {
        List<PitchOutcomeSummary> pitchOutcomes = new ArrayList<>();
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(1)
                                             .isStrike(true)
                                             .strikeCount(1)
                                             .ballCount(0)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(2)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(1)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(3)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(2)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(4)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(3)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(5)
                                             .isStrike(true)
                                             .strikeCount(2)
                                             .ballCount(3)
                                             .build());
        return pitchOutcomes;
    }

    private List<PitchOutcomeSummary> getPitchResults4() {
        List<PitchOutcomeSummary> pitchOutcomes = new ArrayList<>();
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(1)
                                             .isStrike(true)
                                             .strikeCount(1)
                                             .ballCount(0)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(2)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(1)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(3)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(2)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(4)
                                             .isBall(true)
                                             .strikeCount(1)
                                             .ballCount(3)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(5)
                                             .isStrike(true)
                                             .strikeCount(2)
                                             .ballCount(3)
                                             .build());
        pitchOutcomes.add(PitchOutcomeSummary.builder()
                                             .pitchCount(6)
                                             .isHit(true)
                                             .strikeCount(-1)
                                             .ballCount(-1)
                                             .build());
        return pitchOutcomes;
    }

    private ScoreBoardDetail getGameSummary() {
        return ScoreBoardDetail.builder()
                               .homeName("Captain")
                               .awayName("Marvel")
                               .homeScore(1)
                               .awayScore(5)
                               .homeIsOffense(true)
                               .userIsHome(true)
                               .homeInningScores(getInningScores1())
                               .awayInningScores(getInningScores2())
                               .build();
    }

    private List<Integer> getInningScores1() {
        List<Integer> inningScores = new ArrayList<>();
        inningScores.add(1);
        inningScores.add(0);
        inningScores.add(0);
        inningScores.add(0);
        return inningScores;
    }

    private List<Integer> getInningScores2() {
        List<Integer> inningScores = new ArrayList<>();
        inningScores.add(1);
        inningScores.add(2);
        inningScores.add(2);
        return inningScores;
    }

    private TeamStat getTeamStatResponse1(boolean asHome) {
        return TeamStat.builder()
                       .teamName("Captain")
                       .isUser(asHome)
                       .battingOrder(6)
                       .teamAtBatCount(9)
                       .teamHitCount(4)
                       .teamOutCount(5)
                       .batterStats(getBatterStatResponses())
                       .build();
    }

    private TeamStat getTeamStatResponse2(boolean asHome) {
        return TeamStat.builder()
                       .teamName("Marvel")
                       .isUser(asHome)
                       .battingOrder(7)
                       .teamAtBatCount(9)
                       .teamHitCount(4)
                       .teamOutCount(5)
                       .batterStats(getBatterStatResponses())
                       .build();
    }

    private List<BatterStat> getBatterStatResponses() {
        List<BatterStat> batterStats = new ArrayList<>();
        batterStats.add(BatterStat.builder()
                                  .batterName("김광진")
                                  .atBatCount(1)
                                  .hitCount(1)
                                  .outCount(0)
                                  .average("1.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("이동규")
                                  .atBatCount(1)
                                  .hitCount(0)
                                  .outCount(1)
                                  .average("0.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("김진수")
                                  .atBatCount(1)
                                  .hitCount(0)
                                  .outCount(1)
                                  .average("0.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("박영권")
                                  .atBatCount(1)
                                  .hitCount(1)
                                  .outCount(0)
                                  .average("1.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("추신수")
                                  .atBatCount(1)
                                  .hitCount(1)
                                  .outCount(0)
                                  .average("1.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("이용대")
                                  .atBatCount(1)
                                  .hitCount(0)
                                  .outCount(1)
                                  .average("0.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("류현진")
                                  .atBatCount(1)
                                  .hitCount(0)
                                  .outCount(1)
                                  .average("0.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("최동수")
                                  .atBatCount(1)
                                  .hitCount(1)
                                  .outCount(0)
                                  .average("1.000")
                                  .build());
        batterStats.add(BatterStat.builder()
                                  .batterName("한양범")
                                  .atBatCount(1)
                                  .hitCount(1)
                                  .outCount(0)
                                  .average("1.000")
                                  .build());
        return batterStats;
    }

}
