INSERT INTO team (name, image_url)
VALUES ('JK', 'https://ca.slack-edge.com/T74H5245A-U75J67NMV-0b94bf9f88a1-512');
INSERT INTO team (name, image_url)
VALUES ('Crong', 'https://ca.slack-edge.com/T74H5245A-U74HAJ05S-b82cb3c93123-512');
INSERT INTO team (name, image_url)
VALUES ('Honux', 'https://ca.slack-edge.com/T74H5245A-U74KKLB0D-4f2767985e3d-512');
INSERT INTO team (name, image_url)
VALUES ('Yagom', 'https://ca.slack-edge.com/T74H5245A-UGC7G9DJM-776a188ac654-512');
INSERT INTO team (name, image_url)
VALUES ('Sarah', 'https://ca.slack-edge.com/T74H5245A-U9HQY3J2V-9d5f0f61e24f-512');
INSERT INTO team (name, image_url)
VALUES ('Head', 'https://ca.slack-edge.com/T74H5245A-UCPASM4UQ-5db147338014-512');

INSERT INTO game (is_top)
VALUES (TRUE);
INSERT INTO game ()
VALUES ();
INSERT INTO game ()
VALUES ();
INSERT INTO game ()
VALUES ();
INSERT INTO game ()
VALUES ();
INSERT INTO game ()
VALUES ();

INSERT INTO team_stat (game, team, is_home, is_available, pitcher)
VALUES (1, 1, TRUE, TRUE, 1);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order)
VALUES (1, 2, FALSE, TRUE, 1);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (2, 3, TRUE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (2, 4, FALSE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (3, 5, TRUE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (3, 6, FALSE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (4, 2, TRUE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (4, 3, FALSE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (5, 4, TRUE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (5, 5, FALSE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (6, 6, TRUE, TRUE);
INSERT INTO team_stat (game, team, is_home, is_available)
VALUES (6, 1, FALSE, TRUE);

INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (1, 1, TRUE, 1);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (2, 1, FALSE, 3);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (1, 2, TRUE, 2);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (2, 2, FALSE, 0);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (1, 3, TRUE, 5);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (2, 3, FALSE, 2);
INSERT INTO half_inning (team_stat, inning, is_top, score)
VALUES (1, 4, TRUE, 2);

INSERT INTO player (team, name, batting_average, pitching_accuracy)
VALUES (1, '최동원', 0.111, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy)
VALUES (2, '류현진', 0.222, 0.9);

INSERT INTO pitcher_stat (pitcher, team_stat)
VALUES (1, 1);
INSERT INTO batter_stat (batter, team_stat, batting_order)
VALUES (2, 2, 1);

INSERT INTO at_bat (half_inning, batter_stat, is_hit)
VALUES (1, 1, FALSE);
INSERT INTO at_bat (half_inning, batter_stat)
VALUES (7, 1);

INSERT INTO pitch (at_bat, pitcher_stat)
VALUES (1, 1);
INSERT INTO pitch (at_bat, pitcher_stat)
VALUES (1, 1);
INSERT INTO pitch (at_bat, pitcher_stat, is_out)
VALUES (1, 1, TRUE);
INSERT INTO pitch (at_bat, pitcher_stat)
VALUES (2, 1);
INSERT INTO pitch (at_bat, pitcher_stat)
VALUES (2, 1);

