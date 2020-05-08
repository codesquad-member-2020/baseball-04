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
    
    @IBOutlet weak var gameNumberLabel: UILabel!
    @IBOutlet weak var homeTeamButton: UIButton!
    @IBOutlet weak var awayTeamButton: UIButton!
    var gameStackCellDelegate: GameDelegate!
    var configuration: GameInfo? {
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
        inputData()
    }
    
    private func setupButton(button: UIButton) {
        button.titleLabel?.textAlignment = .center
        button.titleLabel?.numberOfLines = 2
        button.titleLabel?.adjustsFontForContentSizeCategory = true
    }
    
    private func inputData() {
        guard let gameNumber = configuration?.gameNumber else { return }
        gameNumberLabel.text = "Game \(gameNumber)"
        guard let homeTeam = configuration?.homeTeam else { return }
        homeTeamButton.setTitle(homeTeam, for: .normal)
        guard let awayTeam = configuration?.awayTeam else { return }
        awayTeamButton.setTitle(awayTeam, for: .normal)
    }
    
    @IBAction func homeTeamButtonTapped(_ sender: Any) {
        gameStackCellDelegate.didTapGameCell(gameId: "testHomeTeam")
    }
    
    @IBAction func awayTeamButtonTapped(_ sender: Any) {
        gameStackCellDelegate.didTapGameCell(gameId: "testAwayTeam")
    }
    
}

