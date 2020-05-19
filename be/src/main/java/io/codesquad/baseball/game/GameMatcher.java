package io.codesquad.baseball.game;

import io.codesquad.baseball.exception.InvalidMatchRequestException;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.CountDownLatch;

@Service
public class GameMatcher {

    @Getter
    @Setter
    private static class GameStatus {

        private CountDownLatch countDownLatch;
        private boolean isHomeReady;
        private boolean isAwayReady;

        private GameStatus() {
            countDownLatch = new CountDownLatch(2);
            isHomeReady = false;
            isAwayReady = false;
        }

        private void checkIfValidMatchRequest(boolean isHome) {
            if (isHome && isHomeReady || !isHome && isAwayReady) {
                throw new InvalidMatchRequestException("Invalid match request.");
            }
        }

        private void match(boolean isHome) throws InterruptedException {
            updateReadyStatus(isHome);
            countDownLatch.countDown();
            countDownLatch.await();
        }

        private void updateReadyStatus(boolean isHome) {
            if (isHome) {
                isHomeReady = true;
            } else {
                isAwayReady = true;
            }
        }

    }

    private final ConcurrentMap<Long, GameStatus> gameStatuses;

    public GameMatcher() {
        gameStatuses = new ConcurrentHashMap<>();
    }

    public void matchGame(long gameId, HttpSession session) throws InterruptedException {
        checkWithSessionData(gameId, session);
        GameStatus gameStatus = getGameStatusOrCreateIfAbsent(gameId);
        boolean isHome = (boolean) session.getAttribute("isHome");
        gameStatus.checkIfValidMatchRequest(isHome);
        gameStatus.match(isHome);
        session.setAttribute("isInGame", true);
    }

    private void checkWithSessionData(long gameId, HttpSession session) {
        if (gameId != (long) session.getAttribute("gameId")) {
            throw new InvalidMatchRequestException("Requested game ID and selected ID do not match.");
        }
    }

    private GameStatus getGameStatusOrCreateIfAbsent(long gameId) {
        GameStatus gameStatus = gameStatuses.get(gameId);
        if (gameStatus == null) {
            gameStatus = new GameStatus();
            gameStatuses.put(gameId, gameStatus);
        }
        return gameStatus;
    }

}
