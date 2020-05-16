//
//  Game.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

protocol GameDelegate {
    func didTapGameCell(gameId: String)
}

class Game: UIView {
    
    let useCase = UseCase()
    var gameNumber = 1
    var homeGameId = 0
    var awayGameId = 0
    var homeIsAvailable = true
    var awayIsAvailable = true
    @IBOutlet weak var gameNumberLabel: UILabel!
    @IBOutlet weak var homeTeamButton: UIButton!
    @IBOutlet weak var awayTeamButton: UIButton!
    @IBOutlet weak var homeTeamImageView: UIImageView!
    @IBOutlet weak var awayTeamImageView: UIImageView!
    
    var gameStackCellDelegate: GameDelegate!
    var configuration: GamesInfo? {
        didSet{
            setupView()
        }
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        setupView()
    }
    
    private func setupView(){
        self.layer.cornerRadius = 20
        self.translatesAutoresizingMaskIntoConstraints = false
        setupButton(button: homeTeamButton)
        setupButton(button: awayTeamButton)
        inputDataIntoView()
    }
    
    private func setupButton(button: UIButton) {
        button.titleLabel?.textAlignment = .center
        button.titleLabel?.numberOfLines = 2
        button.titleLabel?.adjustsFontForContentSizeCategory = true
    }
    
    private func inputDataIntoView() {
        guard let configuration = self.configuration else {return}
        setupHomeTeamView(configuration: configuration)
        setupAwayTeamView(configuration: configuration)
    }
    
    private func setupHomeTeamView(configuration: GamesInfo) {
        let home = configuration.home
        homeGameId = home.id
        homeTeamButton.setTitle(home.name, for: .normal)
        homeIsAvailable = home.isAvailable
        useCase.getImage(imageURL: home.imageURL){
            imageData in
            guard let imageData = imageData else {return}
            let teamImage = UIImage(data: imageData)
            DispatchQueue.main.async {
                self.homeTeamImageView.image = teamImage
            }
        }
    }
    
    private func setupAwayTeamView(configuration: GamesInfo) {
        let away = configuration.away
        awayGameId = away.id
        awayTeamButton.setTitle(away.name, for: .normal)
        awayIsAvailable = away.isAvailable
        useCase.getImage(imageURL: away.imageURL){
            imageData in
            guard let imageData = imageData else {return}
            let teamImage = UIImage(data: imageData)
            DispatchQueue.main.async {
                self.awayTeamImageView.image = teamImage
            }
        }
    }
    
    @IBAction func homeTeamButtonTapped(_ sender: Any) {
        gameStackCellDelegate.didTapGameCell(gameId: "testHomeTeam")
    }
    
    @IBAction func awayTeamButtonTapped(_ sender: Any) {
        gameStackCellDelegate.didTapGameCell(gameId: "testAwayTeam")
    }
    
}

