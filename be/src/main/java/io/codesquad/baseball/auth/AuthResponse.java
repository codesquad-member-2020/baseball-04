package io.codesquad.baseball.auth;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class AuthResponse {

    boolean authorizationSuccessful;

}
