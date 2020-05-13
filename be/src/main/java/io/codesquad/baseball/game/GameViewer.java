package io.codesquad.baseball.game;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class GameViewer {

    private final GameDao gameDao;

    public GameViewer(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    public ScoreBoardSummary getScoreBoardSummary(long gameId, HttpSession session) {
        return null;
    }

}
