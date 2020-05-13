//
//  BaseBallGameInfo.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import Foundation

struct GameListInfo {
    let gameList: [Game]
}

struct GameInfo {
    let gameNumber: Int
    let homeTeam: String
    let awayTeam: String
}

// GamePage
// Game List (Get)
struct GamesInfo: Codable {
    let away: GameGeneralInfo
    let home: GameGeneralInfo
    let id: Int
}

struct GameGeneralInfo: Codable {
    let id: Int
    let imageURL: String
    let isAvailable: Bool
    let name: String
}

// In Game (Get)
struct InGameInfo: Codable {
    let atBats: [AtBatsInfo]
    let currentAtBat: CurrentAtBat
    let halfInningStatus: HalfInningStatus
    let scoreBoard: ScoreBoard
}

// In Game - At Bats Info
struct AtBatsInfo: Codable {
    let batterName: String
    let battingOrder: Int
    let pitchOutcomes: [PitchOutcomes]
}

struct PitchOutcomes: Codable {
    let ballCount : Int
    let isBall : Bool
    let isHit : Bool
    let isOut : Bool
    let isStrike : Bool
    let pitchCount : Int
    let strikeCount : Int
}

// In Game - current At Bat
struct CurrentAtBat: Codable {
    let atBatCount: Int
    let batterName: String
    let hitCount: Int
    let pitchCount: Int
    let pitcherName: String
}

// In Game - half Inning Status
struct HalfInningStatus: Codable {
    let ballCount: Int
    let inning: Int
    let inningIsTop: Bool
    let outCount: Int
    let runnerIsOnFirstBase: Bool
    let runnerIsOnSecondBase: Bool
    let runnerIsOnThirdBase: Bool
    let strikeCount: Int
    let userIsOffense: Bool
}

// In Game - score Board
struct ScoreBoard: Codable {
    let awayImageUrl: String
    let awayName: String
    let awayScore: Int
    let homeImageUrl: String
    let homeName: String
    let homeScore: Int
    let userIsHome: Bool
}

// Get Bat Outcome (Put)
// request
struct SwingChoice: Codable {
    let choseSwing: Bool
}

// response
struct ActionOutcome: Codable {
    let baserunning: BaseRunning
    let endOfHalfInning: Bool
    let gameScreenData: InGameInfo
    let pitchDetail: PitchDetail
}

struct BaseRunning: Codable {
    let runnerAdvancesToFirstBase: Bool
    let runnerAdvancesToHomeBase: Bool
    let runnerAdvancesToSecondBase: Bool
    let runnerAdvancesToThirdBase: Bool
}

struct PitchDetail: Codable {
    let batterChoseSwing: Bool
    let message: Bool
    let outcomeIsBall: Bool
    let outcomeIsHit: Bool
    let outcomeIsOut: Bool
    let outcomeIsStrike: Bool
    let pitcherChoseStrike: Bool
    let pitcherThrewStrike: Bool
}

// ScoreDetailPage
// Get Game Summary (Get)
struct GameSummaryInfo: Codable {
    let away: TeamSummaryInfo
    let home: TeamSummaryInfo
    let scoreBoard: DetailedScoreBoard
}

struct TeamSummaryInfo: Codable {
    let batterStats: [BatterStats]
    let battingOrder: Int
    let isUser: Bool
    let teamAtBatCount: Int
    let teamHitCount: Int
    let teamName: String
    let teamOutCount: Int
}

struct BatterStats: Codable {
    let atBatCount: Int
    let average: String
    let batterName: String
    let hitCount: Int
    let outCount: Int
}

struct DetailedScoreBoard: Codable {
    let awayInningScores: [Int]
    let awayName: String
    let awayScore: Int
    let homeInningScores: [Int]
    let homeIsOffense: Bool
    let homeName: String
    let homeScore: Int
    let userIsHome: Bool
}

// GetPitchOutcome (Put)
// request
struct PitchOutcome: Codable {
    let choseStrike: Bool
}

// response is same as ActionOutcome.struct

// Select Team (Put)
struct TeamSelectionAccepted: Codable {
    let teamSelectionAccepted: Bool
}
