//
//  UseCase.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/14.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import Foundation

class UseCase {
    
    private let manager = NetworkManager()
    var gameId = "1"
    
    func getGames(completed: @escaping ([GamesInfo]) -> ()) {
        try? manager.getResource(from: EndPoint.gameURL) { (data, error) in
            guard let data = data else { return }
            do {
                let allGames = try JSONDecoder().decode([GamesInfo].self, from: data)
                completed(allGames)
            } catch {
                self.noticeError(error: error)
            }
        }
    }
    
    func getScreenData(completed: @escaping (InGameInfo) -> ()) {
        try? manager.getResource(from: EndPoint.gameURL + gameId) { (data, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            do{
                let decodedScreenData = try decoder.decode(InGameInfo.self, from: data)
                completed(decodedScreenData)
            } catch {
                self.noticeError(error: error)
            }
        }
    }
    
    func getImage(imageURL: String, completed: @escaping (Data?) -> ()){
        try? manager.getResource(from: imageURL){ data , error in
            completed(data)
        }
    }
    
    
    private func noticeError(error: Error) {
        switch error {
        case NetworkErrorCase.InvalidURL:  ErrorMessage.InvalidURL.description
        case NetworkErrorCase.NotFound:  ErrorMessage.NotFound.description
        case NetworkErrorCase.DecodingError:  ErrorMessage.DecodingError.description
        default:
            ErrorMessage.Mistery.description
        }
    }
}

enum JsonType {
    static let gamesInfo = GamesInfo.self
    static let inGameInfo = InGameInfo.self
    static let swingChoice = SwingChoice.self
    static let actionOutcome = ActionOutcome.self
    static let gameSummaryInfo = GameSummaryInfo.self
    static let pitchOutcome = PitchOutcome.self
    static let teamSelectionAccepted = TeamSelectionAccepted.self
}
