//
//  GameViewController.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class GameViewController: UIViewController {
    
    @IBOutlet weak var playerImageView: UIImageView!
    @IBOutlet weak var playActionButton: CustomButton!
    @IBOutlet var popView: UIView!
    @IBOutlet weak var historyButton: CustomButton!
    @IBOutlet weak var missButton: UIButton!
    @IBOutlet weak var hitButton: CustomButton!
    var hitButtonCenter: CGPoint!
    var missButtonCenter: CGPoint!
    @IBOutlet weak var currentBatterPlayer: CurrentAtBatView!
    @IBOutlet weak var currentPitchPlayer: CurrentAtBatView!
    @IBOutlet weak var ballLightStackView: UIStackView!
    @IBOutlet weak var ballCountLabel: UILabel!
    @IBOutlet weak var inningInfoLabel: UILabel!
    @IBOutlet weak var strikeCountLabel: UILabel!
    @IBOutlet weak var strikeLightStackView: UIStackView!
    @IBOutlet weak var outCountLabel: UILabel!
    @IBOutlet weak var outLightStackView: UIStackView!
    @IBOutlet weak var homeTeamLabel: UILabel!
    @IBOutlet weak var awayTeamLabel: UILabel!
    @IBOutlet weak var homeRoundView: RectView!
    
    @IBOutlet weak var firstBaseView: RectView!
    
    @IBOutlet weak var thirdBaseView: RectView!
    @IBOutlet weak var secondBaseView: RectView!
    private var baseView = [RectView]()
    var number = 0
    private var useCase = UseCase()
    private var inGameInfo: InGameInfo?
    private var isOffensive = true
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.baseView = [homeRoundView ,firstBaseView,thirdBaseView]
        setupView()
        useCase.getScreenData(){ screenData in
            self.inGameInfo = screenData
            self.currentBatterPlayer.isBatter = false
            self.currentBatterPlayer.configuration = self.inGameInfo
            self.currentPitchPlayer.isBatter = true
            self.currentPitchPlayer.configuration = self.inGameInfo
            
        }
    }
    
    private func movePlayerAnimation() {
        UIView.animate(withDuration: 0.3, animations: {
            DispatchQueue.main.async {
                self.playerImageView.center = self.baseView[self.number].center
                self.playerImageView.center = self.missButtonCenter
                if self.number == 4 {
                    self.number = 0
                } else {
                    self.number += 1
                }
            }
        })
    }
    
    @IBAction func historyButtonTapped(_ sender: Any) {
        self.view.addSubview(popView)
        popView.center = self.view.center
    }
    
    @IBAction func closeButtonTapped(_ sender: Any) {
        self.popView.removeFromSuperview()
    }
    
    @IBAction func playActionButtonTapped(_ sender: UIButton) {
        if sender.currentTitle == PlayButtonCase.Hitting.description {
            showHittingOptions(sender: sender)
        } else {
            hideHittingOptions(sender: sender)
        }
    }
    
    private func showHittingOptions(sender: UIButton) {
        UIView.animate(withDuration: 0.3, animations: {
            self.hitButton.center = self.hitButtonCenter
            self.missButton.center = self.missButtonCenter
        })
        sender.setTitle("Select!", for: .normal)
    }
    
    private func hideHittingOptions(sender: UIButton) {
        UIView.animate(withDuration: 0.3, animations: {
            self.hitButton.center = self.playActionButton.center
            self.missButton.center = self.playActionButton.center
        })
        sender.setTitle(PlayButtonCase.Hitting.description, for: .normal)
    }
    
    private func setupView() {
        hitButtonCenter = hitButton.center
        missButtonCenter = missButton.center
        hitButton.center = playActionButton.center
        missButton.center = playActionButton.center
    }
    
    @IBAction func hitButtonTapped(_ sender: Any) {
        self.movePlayerAnimation()
    }
}
