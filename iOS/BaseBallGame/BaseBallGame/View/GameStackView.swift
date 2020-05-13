//
//  GameStackView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/08.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class GameStackView: UIStackView {
       
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        
    }
    
    func makeGame(data: GameInfo) -> Game {
        guard let gameCell = Bundle.main.loadNibNamed("GameStackCell", owner: self, options: nil)?.first as? Game else { return Game()}
        let dummydata = GameInfo(gameNumber: 1, homeTeam: "homehome", awayTeam: "teamteam")
        gameCell.configuration = dummydata
        return gameCell
    }
    
    func addGame(newGame: Game) {
        self.addArrangedSubview(newGame)
    }
}
