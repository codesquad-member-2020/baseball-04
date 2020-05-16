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
    let useCase = UseCase()
    private var gamesInfo: [GamesInfo]?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        firstViewInStackView.isHidden = true
        configureUseCase()
        setupGameList()
        
        
        let dummy = GameGeneralInfo(id: 0, imageURL: "https://www.google.com/search?q=something+image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjw3qjl4rPpAhUj7GEKHQZ_A98Q_AUoAXoECAoQAw&biw=1742&bih=968#imgrc=tsEjK6c-blxdiM", isAvailable: true, name: "Dummy")
        gameListStackView.makeGame(data: GamesInfo(away: dummy, home: dummy, id: 1)) { game in
            guard let game = game else {return}
            game.gameStackCellDelegate = self
            self.gameListStackView.addGame(newGame: game)
            self.setupGameConstraint(game: game)
        }
    }
    
    private func setupGameList() {
        guard let gamesInfo = self.gamesInfo else {return}
        gamesInfo.forEach{ game in
            gameListStackView.makeGame(data: game){ gameView in
                guard let gameView = gameView else {return}
                gameView.configuration = game
                gameView.gameStackCellDelegate = self
                DispatchQueue.main.async {
                    self.gameListStackView.addGame(newGame: gameView)
                    self.setupGameConstraint(game: gameView)
                }
            }
        }
    }
    
    private func configureUseCase() {
        useCase.getGames{ games in
            self.gamesInfo = games
            print(#function)
        }
    }
    
    private func setupGameConstraint(game: Game) {
        game.widthAnchor.constraint(equalTo: gameListStackView.widthAnchor, multiplier: 0.9).isActive = true
        game.heightAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.1).isActive = true
    }
}

extension GameListViewController: GameDelegate {
    func didTapGameCell(gameId: String) {
        
        let matchingVC = self.storyboard?.instantiateViewController(withIdentifier: SegueIdentifer.matchingSegueIdentifer)
        matchingVC?.modalPresentationStyle = .fullScreen
        self.present(matchingVC!, animated: true, completion: nil)
    }
}
