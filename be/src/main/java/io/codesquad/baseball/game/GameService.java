package io.codesquad.baseball.game;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameDao gameDao;

    public GameService(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    public List<GameSelectionDatum> getGameSelectionData() {
        return gameDao.findAllGameSelectionData();
    }

}
