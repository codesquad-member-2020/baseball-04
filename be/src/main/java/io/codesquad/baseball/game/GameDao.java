package io.codesquad.baseball.game;

import io.codesquad.baseball.game.team.TeamDao;
import io.codesquad.baseball.game.team.TeamSelectionDatum;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class GameDao {

    private final TeamDao teamDao;

    private final JdbcTemplate jdbcTemplate;

    public GameDao(DataSource dataSource, TeamDao teamDao) {
        this.teamDao = teamDao;
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<GameSelectionDatum> findAllGameSelectionData() {
        List<GameSelectionDatum> gameSelectionData = new ArrayList<>();
        findAllGameIds().forEach(gameId -> {
            Map<String, TeamSelectionDatum> teamSelectionData = teamDao.findTeamSelectionDatumByGameId(gameId);
            gameSelectionData.add(GameSelectionDatum.builder()
                                                    .id(gameId)
                                                    .home(teamSelectionData.get("home"))
                                                    .away(teamSelectionData.get("away"))
                                                    .build());
        });
        return gameSelectionData;
    }

    private List<Long> findAllGameIds() {
        String sql = "SELECT id FROM game";
        return jdbcTemplate.queryForList(sql, Long.class);
    }

}
