package io.codesquad.baseball.auth;

import com.codesquad.oauthgithublibrary.oauth.github.GitHubOauthService;
import com.codesquad.oauthgithublibrary.oauth.github.GitHubOauthServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.io.IOException;

@RestController
public class AuthController {

    private final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private final GitHubOauthService gitHubOauthService;

    public AuthController(GitHubOauthService gitHubOauthService) {
        this.gitHubOauthService = gitHubOauthService;
    }

    @GetMapping("/login")
    public void login(@PathParam("code") @Valid String code, HttpServletRequest request, HttpServletResponse response) {
        try {
            logger.info("##### code1: {}", code);
            gitHubOauthService.login(request, response, "http://localhost:8080",code);
        } catch (IOException e) {
            e.getMessage();
        }
    }

    // replace with Github login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> githubLogin (@RequestBody AuthCredential authCredential, HttpSession session) {
        if ("codesquad".equals(authCredential.getCredential())) {
            logger.info("##### authCredential1 : {}", authCredential.getCredential());
            return ResponseEntity.ok(AuthResponse.builder()
                                                 .authorizationSuccessful(true)
                                                 .build());
        } else {
            logger.info("##### authCredential1 : {}", authCredential.getCredential());
            session.invalidate();
            return ResponseEntity.ok(AuthResponse.builder()
                                                 .authorizationSuccessful(false)
                                                 .build());
        }
    }

}
