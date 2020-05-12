package io.codesquad.baseball.game;

import io.codesquad.baseball.exception.InvalidTeamSelectionException;
import io.codesquad.baseball.game.team.TeamDao;
import io.codesquad.baseball.game.team.TeamSelectionDatum;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class GameDao {

    private final TeamDao teamDao;

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public GameDao(DataSource dataSource, TeamDao teamDao) {
        this.teamDao = teamDao;
        jdbcTemplate = new JdbcTemplate(dataSource);
        namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
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

    public Map<String, Boolean> findTeamData(long gameId, long teamId) {
        String sql = "SELECT is_available, is_home FROM team_stat " +
                     "WHERE game = :g_id AND team = :t_id";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource()
                                                .addValue("g_id", gameId)
                                                .addValue("t_id", teamId);
        try {
            return namedParameterJdbcTemplate.queryForObject(sql, sqlParameterSource, (rs, rowNum) -> {
                Map<String, Boolean> teamData = new HashMap<>();
                teamData.put("isAvailable", rs.getBoolean("is_available"));
                teamData.put("isHome", rs.getBoolean("is_home"));
                return teamData;
            });
        } catch (EmptyResultDataAccessException ex) {
            throw new InvalidTeamSelectionException("Invalid team selection.");
        }
    }

    @Modifying
    public void updateTeamAsUnavailable(long gameId, long teamId) {
        String sql = "UPDATE team_stat " +
                     "SET is_available = FALSE " +
                     "WHERE game = :g_id AND team = :t_id";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource()
                                                .addValue("g_id", gameId)
                                                .addValue("t_id", teamId);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }

}
