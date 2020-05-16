//
//  NetworkManager.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/14.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import Foundation

class NetworkManager {
    
    var gameId = ""
    
    //get
    func getResource(from url: String, handler: @escaping (Data?, Error?) -> ()) throws {
        guard let url = URL(string: url) else {
            throw NetworkErrorCase.InvalidURL
        }
        URLSession.shared.dataTask(with: url) {
            (data, response, error) in
            handler(data, error)
        }.resume()
    }
    
    //put
    func requestData(to url: String, handler: @escaping (Data?, Error?) -> ()) throws {
        guard let url = URL(string: url) else {
            throw NetworkErrorCase.InvalidURL
        }
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.sortedKeys, .prettyPrinted]
        var request = URLRequest(url: url)
        request.httpMethod = HTTPMethod.PUT
        request.addValue(gameId, forHTTPHeaderField: "Authorization")
        URLSession.shared.dataTask(with: request){ (data, response, error) in
            handler(data, error)
            }
        .resume()
    }
}

enum ErrorMessage: String, CustomStringConvertible{
    var description: String{return self.rawValue}
    case InvalidURL = "유효하지 않은 URL입니다😭"
    case NotFound = "데이터를 가지고 오는데 실패했습니다😭"
    case DecodingError = "디코딩 실패했습니다😭"
    case Mistery = "알 수 없는 오류입니다😭"
}

enum NetworkErrorCase : Error {
    case InvalidURL
    case NotFound
    case DecodingError
}

enum HTTPMethod {
    static let GET = "GET"
    static let PUT = "PUT"
}

enum EndPoint {
    static let URL = "http://52.78.203.80/api/"
    static let gameURL = URL + "mock/games/"
    static let requestBatOutcome = "bat"
    static let gameSummary = "game-summary"
    static let requestPitchOutcome = "pitch"
    static let requestSelectTeam = "teams"
}
