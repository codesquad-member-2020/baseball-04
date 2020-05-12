DROP TABLE IF EXISTS game;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS team_stat;
DROP TABLE IF EXISTS half_inning;
DROP TABLE IF EXISTS at_bat;
DROP TABLE IF EXISTS pitch;
DROP TABLE IF EXISTS batter;
DROP TABLE IF EXISTS batter_stat;
DROP TABLE IF EXISTS pitcher;
DROP TABLE IF EXISTS pitcher_stat;

CREATE TABLE game
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE team
(
    id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(64),
    image_url VARCHAR(256)
);

CREATE TABLE team_stat
(
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    game         BIGINT REFERENCES game (id),
    team         BIGINT REFERENCES team (id),
    is_home      TINYINT(1),
    is_available TINYINT(1)
);

CREATE TABLE half_inning
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    team_stat   BIGINT REFERENCES team_stat (id),
    inning      INT, -- index
    score       INT,
    out_count   INT,
    first_base  TINYINT(1),
    second_base TINYINT(1),
    third_base  TINYINT(1)
);

CREATE TABLE at_bat
(
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    half_inning     BIGINT REFERENCES half_inning (id),
    half_inning_key INT,
    batter          BIGINT REFERENCES batter (id),
    hit             TINYINT(1),
    `out`           TINYINT(1)
);

CREATE TABLE pitch
(
    id     BIGINT AUTO_INCREMENT PRIMARY KEY,
    at_bat BIGINT REFERENCES at_bat (id),
    count  INT, -- index
    strike TINYINT(1),
    ball   TINYINT(1),
    hit    TINYINT(1),
    `out`  TINYINT(1)
);

CREATE TABLE batter
(
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    team            BIGINT REFERENCES team (id),
    name            VARCHAR(64),
    batting_average DECIMAL
);

CREATE TABLE batter_stat
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    batter        BIGINT REFERENCES batter (id),
    game          BIGINT REFERENCES game (id),
    batting_order INT,
    at_bat        INT,
    hit           INT -- compute out count and game average with at_bat and hit
);

CREATE TABLE pitcher
(
    id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    team     BIGINT REFERENCES team (id),
    name     VARCHAR(64),
    accuracy DECIMAL
);

CREATE TABLE pitcher_stat
(
    id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    pitcher BIGINT REFERENCES pitcher (id),
    game    BIGINT REFERENCES game (id)
)
