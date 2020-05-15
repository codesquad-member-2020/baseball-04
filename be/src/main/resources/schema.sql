DROP TABLE IF EXISTS pitcher_stat;
DROP TABLE IF EXISTS batter_stat;
DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS pitch;
DROP TABLE IF EXISTS at_bat;
DROP TABLE IF EXISTS half_inning;
DROP TABLE IF EXISTS team_stat;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS game;

CREATE TABLE game
(
    id     BIGINT AUTO_INCREMENT PRIMARY KEY,
    inning INT,
    is_top TINYINT(1)
);

CREATE TABLE team
(
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(64),
    image_url VARCHAR(256)
);

CREATE TABLE team_stat
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    game          BIGINT REFERENCES game (id),
    team          BIGINT REFERENCES team (id),
    is_home       TINYINT(1),
    is_available  TINYINT(1),
    batting_order INT,
    pitcher       BIGINT REFERENCES player (id)
);

CREATE TABLE half_inning
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    team_stat   BIGINT REFERENCES team_stat (id),
    inning      INT,        -- also functions as index
    is_top      TINYINT(1),
    score       INT,        -- changes
    out_count   INT,        -- changes
    first_base  TINYINT(1), -- changes
    second_base TINYINT(1), -- changes
    third_base  TINYINT(1)  -- changes
);

CREATE TABLE at_bat
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    half_inning BIGINT REFERENCES half_inning (id),
    batter_stat BIGINT REFERENCES batter_stat (id), -- find batterName and battingOrder
    is_hit      TINYINT(1)                          -- if false, then out
    -- compute strike and ball counts from pitch
);

CREATE TABLE pitch
(
    id                   BIGINT AUTO_INCREMENT PRIMARY KEY,
    at_bat               BIGINT REFERENCES at_bat (id),
    count                INT, -- also functions as index
    pitcher_stat         BIGINT REFERENCES pitcher_stat (id),
    pitcher_chose_strike TINYINT(1),
    pitcher_threw_strike TINYINT(1),
    batter_chose_swing   TINYINT(1),
    is_strike            TINYINT(1),
    is_ball              TINYINT(1),
    is_hit               TINYINT(1),
    is_out               TINYINT(1)
);

CREATE TABLE player
(
    id                BIGINT AUTO_INCREMENT PRIMARY KEY,
    team              BIGINT REFERENCES team (id),
    name              VARCHAR(64),
    batting_average   DECIMAL(4, 3),
    pitching_accuracy DECIMAL(4, 3) -- null if not a pitcher
);

CREATE TABLE batter_stat
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    batter        BIGINT REFERENCES player (id),
    team_stat     BIGINT REFERENCES team_stat (id),
    batting_order INT -- also functions as index
);

CREATE TABLE pitcher_stat
(
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    pitcher   BIGINT REFERENCES player (id),
    team_stat BIGINT REFERENCES team_stat (id)
)
