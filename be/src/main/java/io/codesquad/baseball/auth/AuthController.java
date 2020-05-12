package io.codesquad.baseball.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class AuthController {

    // replace with Github login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthCredential authCredential, HttpSession session) {
        if ("codesquad".equals(authCredential.getCredential())) {
            return ResponseEntity.ok(AuthResponse.builder()
                                                 .authorizationSuccessful(true)
                                                 .build());
        } else {
            session.invalidate();
            return ResponseEntity.ok(AuthResponse.builder()
                                                 .authorizationSuccessful(false)
                                                 .build());
        }
    }

}
