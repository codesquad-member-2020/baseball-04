package io.codesquad.baseball.exception;

public class InvalidMatchRequestException extends RuntimeException {
    public InvalidMatchRequestException(String s) {
        super(s);
    }
}
