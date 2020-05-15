-- GAME ------------------------------------------------------------------------------
INSERT INTO game (inning, is_top) VALUES (1, TRUE);
INSERT INTO game (inning, is_top) VALUES (1, TRUE);
INSERT INTO game (inning, is_top) VALUES (1, TRUE);
INSERT INTO game (inning, is_top) VALUES (1, TRUE);
INSERT INTO game (inning, is_top) VALUES (1, TRUE);
INSERT INTO game (inning, is_top) VALUES (1, TRUE);

-- TEAM ------------------------------------------------------------------------------
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

-- TEAM STAT ------------------------------------------------------------------------------
-- 위 3 게임 --
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (1, 1, TRUE, TRUE, 1, 1);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (1, 2, FALSE, TRUE, 1, 10);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (2, 3, TRUE, TRUE, 1, 19);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (2, 4, FALSE, TRUE, 1, 28);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (3, 5, TRUE, TRUE, 1, 37);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (3, 6, FALSE, TRUE, 1, 46);
-- 아래 3 게임 --
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (4, 2, TRUE, TRUE, 1, 10);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (4, 3, FALSE, TRUE, 1, 19);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (5, 4, TRUE, TRUE, 1, 28);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (5, 5, FALSE, TRUE, 1, 37);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (6, 6, TRUE, TRUE, 1, 46);
INSERT INTO team_stat (game, team, is_home, is_available, batting_order, pitcher)
VALUES (6, 1, FALSE, TRUE, 1, 1);

-- HALF INNING ------------------------------------------------------------------------------
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (1, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (2, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (3,  1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (4, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (5, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (6, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (7, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (8, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (9, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (10, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (11, 1, TRUE, 0, 0, false, false, false);
INSERT INTO half_inning (team_stat, inning, is_top, score, out_count, first_base, second_base, third_base)
VALUES (12, 1, TRUE, 0, 0, false, false, false);

-- AT BAT ------------------------------------------------------------------------------


-- PITCH ------------------------------------------------------------------------------


-- PLAYER ------------------------------------------------------------------------------
-- 1팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '코리', 0.232, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '제이', 0.234, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '푸글', 0.371, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '엑스피', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '빽코', 0.222, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '모스', 0.231, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '리즈', 0.312, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '디온', 0.234, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (1, '딩고', 0.432, null);
-- 2팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '올라프', 0.411, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '솔라', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '린', 0.222, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '샐리', 0.431, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '하밀', 0.235, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '데이빗', 0.213, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '레나', 0.323, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '조이', 0.223, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (2, '휴이', 0.322, null);
-- 3팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '에버', 0.112, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '모카', 0.411, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '제이슨', 0.377, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '단', 0.237, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '시그리드', 0.361, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '또치', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '엘린', 0.231, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '라임', 0.323, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (3, '델마', 0.231, null);
-- 4팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '엘리', 0.421, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '린', 0.345, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '젤로', 0.212, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '강운', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '헨리', 0.363, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '알렉스', 0.324, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '한', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '원', 0.231, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (4, '후', 0.421, null);
-- 5팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '에드', 0.223, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '호이', 0.321, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '잭', 0.361, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '에이치', 0.342, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '써니', 0.234, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '하이디', 0.423, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '택', 0.412, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '지니', 0.123, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (5, '랙돌', 0.124, null);
-- 6팀 --
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '아리', 0.423, 0.95);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '지유', 0.323, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '수아', 0.311, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '시연', 0.323, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '유현', 0.421, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '다미', 0.123, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '한동', 0.423, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '가현', 0.142, null);
INSERT INTO player (team, name, batting_average, pitching_accuracy) VALUES (6, '한별', 0.232, null);

-- BATTING STAT ------------------------------------------------------------------------------
-- play id, team_stat_id, 타순
-- team_stat 1 - 1팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (2, 1, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (3, 1, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (4, 1, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (5, 1, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (6, 1, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (7, 1, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (8, 1, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (9, 1, 8);
-- team_stat 2 - 2팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (11, 2, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (12, 2, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (13, 2, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (14, 2, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (15, 2, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (16, 2, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (17, 2, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (18, 2, 8);
-- team_stat 3 - 3팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (20, 3, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (21, 3, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (22, 3, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (23, 3, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (24, 3, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (25, 3, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (26, 3, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (27, 3, 8);
-- team_stat 4 - 4팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (29, 4, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (30, 4, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (31, 4, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (32, 4, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (33, 4, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (34, 4, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (35, 4, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (36, 4, 8);
-- team_stat 5 - 5팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (38, 5, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (39, 5, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (40, 5, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (41, 5, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (42, 5, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (43, 5, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (44, 5, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (45, 5, 8);
-- team_stat 6 - 6팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (47, 6, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (48, 6, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (49, 6, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (50, 6, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (51, 6, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (52, 6, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (53, 6, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (54, 6, 8);
-- team_stat 7 - 2팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (11, 7, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (12, 7, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (13, 7, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (14, 7, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (15, 7, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (16, 7, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (17, 7, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (18, 7, 8);
-- team_stat 8 - 3팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (20, 8, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (21, 8, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (22, 8, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (23, 8, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (24, 8, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (25, 8, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (26, 8, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (27, 8, 8);
-- team_stat 9 - 4팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (29, 9, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (30, 9, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (31, 9, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (32, 9, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (33, 9, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (34, 9, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (35, 9, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (36, 9, 8);
-- team_stat 10 - 5팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (38, 10, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (39, 10, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (40, 10, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (41, 10, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (42, 10, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (43, 10, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (44, 10, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (45, 10, 8);
-- team_stat 11 - 6팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (47, 11, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (48, 11, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (49, 11, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (50, 11, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (51, 11, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (52, 11, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (53, 11, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (54, 11, 8);
-- team_stat 12 - 1팀
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (2, 12, 1);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (3, 12, 2);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (4, 12, 3);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (5, 12, 4);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (6, 12, 5);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (7, 12, 6);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (8, 12, 7);
INSERT INTO batter_stat(batter, team_stat, batting_order) VALUES (9, 12, 8);

-- PITCHING STAT ------------------------------------------------------------------------------
-- 위 3게임
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (1, 1);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (10, 2);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (19, 3);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (28, 4);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (37, 5);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (46, 6);
-- 아래 3게임
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (10, 7);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (19, 8);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (28, 9);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (37, 10);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (46, 11);
INSERT INTO pitcher_stat(pitcher, team_stat) VALUES (1, 12);

