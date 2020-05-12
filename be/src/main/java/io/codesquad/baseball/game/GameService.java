package io.codesquad.baseball.game;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Service
public class GameService {

    private final GameDao gameDao;

    public GameService(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    public List<GameSelectionDatum> getGameSelectionData() {
        return gameDao.findAllGameSelectionData();
    }

    @Transactional
    public boolean selectTeam(long gameId, long teamId, HttpSession session) {
        Map<String, Boolean> teamData = gameDao.findTeamData(gameId, teamId);
        boolean teamIsAvailable = teamData.get("isAvailable");
        if (teamIsAvailable) {
            gameDao.updateTeamAsUnavailable(gameId, teamId);
            session.setAttribute("gameId", gameId);
            session.setAttribute("isHome", teamData.get("isHome"));
        }
        return teamIsAvailable;
    }

}
