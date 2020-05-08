//
//  GameListViewController.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class GameListViewController: UIViewController {
    
    private var gameListInfo: GameListInfo?
    @IBOutlet weak var gameListView: UIView!
    @IBOutlet weak var gameListStackView: GameStackView!
    @IBOutlet weak var firstViewInStackView: UIView! 
    
    override func viewDidLoad() {
        super.viewDidLoad()
        firstViewInStackView.isHidden = true
        let dummy = GameInfo(gameNumber: 1, homeTeam: "h", awayTeam: "a")
        let game = gameListStackView.makeGame(data: dummy)
        let game2 = gameListStackView.makeGame(data: dummy)
        gameListStackView.addGame(newGame: game)
        gameListStackView.addGame(newGame: game2)
        setupGameConstraint(game: game)
        setupGameConstraint(game: game2)
    }
    
    private func setupGameConstraint(game: Game) {
        game.widthAnchor.constraint(equalTo: gameListStackView.widthAnchor, multiplier: 0.9).isActive = true
        game.heightAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.1).isActive = true
    }
}
