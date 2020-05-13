package io.codesquad.baseball.game;

import io.codesquad.baseball.game.atbat.CurrentAtBat;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class GameViewer {

    private final GameDao gameDao;

    public GameViewer(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    public ScoreBoardSummary getScoreBoardSummary(long gameId, HttpSession session) {
        boolean isHome = (boolean) session.getAttribute("isHome");
        return gameDao.findScoreBoardSummary(gameId, isHome);
    }

    public CurrentAtBat getCurrentAtBat(long gameId) {
        return gameDao.findCurrentAtBat(gameId);
    }

}
