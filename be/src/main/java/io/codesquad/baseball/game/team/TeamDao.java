package io.codesquad.baseball.game.team;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Repository
public class TeamDao {

    private final JdbcTemplate jdbcTemplate;

    public TeamDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public Map<String, TeamSelectionDatum> findTeamSelectionDatumByGameId(long gameId) {
        String sql = "SELECT t.id, t.name, t.image_url, ts.is_home, ts.is_available FROM game g " +
                     "JOIN team_stat ts ON g.id = ts.game " +
                     "JOIN team t ON ts.team = t.id " +
                     "WHERE g.id = ?";
        return jdbcTemplate.query(sql, new Object[]{gameId}, rs -> {
            Map<String, TeamSelectionDatum> teamSelectionData = new HashMap<>();
            while (rs.next()) {
                TeamSelectionDatum teamSelectionDatum = TeamSelectionDatum.builder()
                                                                          .id(rs.getLong("t.id"))
                                                                          .name(rs.getString("t.name"))
                                                                          .imageURL(rs.getString("t.image_url"))
                                                                          .isAvailable(rs.getBoolean("ts.is_available"))
                                                                          .build();
                boolean isHome = rs.getBoolean("ts.is_home");
                if (isHome) {
                    teamSelectionData.put("home", teamSelectionDatum);
                } else {
                    teamSelectionData.put("away", teamSelectionDatum);
                }
            }
            return teamSelectionData;
        });
    }

}
