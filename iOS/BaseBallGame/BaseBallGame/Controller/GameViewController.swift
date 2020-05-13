//
//  GameViewController.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class GameViewController: UIViewController {
    
    @IBOutlet weak var playActionButton: CustomButton!
    @IBOutlet var popView: UIView!
    @IBOutlet weak var historyButton: CustomButton!
    @IBOutlet weak var missButton: CustomButton!
    @IBOutlet weak var hitButton: CustomButton!
    var hitButtonCenter: CGPoint!
    var missButtonCenter: CGPoint!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupView()
    }
    
    @IBAction func historyButtonTapped(_ sender: Any) {
        self.view.addSubview(popView)
        popView.center = self.view.center
    }
    
    @IBAction func closeButtonTapped(_ sender: Any) {
        self.popView.removeFromSuperview()
    }
    
    @IBAction func playActionButtonTapped(_ sender: UIButton) {
        if sender.currentTitle == PlayButtonCase.Pitch.description {
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
        sender.setTitle(PlayButtonCase.Pitch.description, for: .normal)
    }
    
    private func setupView() {
        hitButtonCenter = hitButton.center
        missButtonCenter = missButton.center
        hitButton.center = playActionButton.center
        missButton.center = playActionButton.center
    }
    
}
enum PlayButtonCase: String, CustomStringConvertible {
    var description: String {
        return self.rawValue
    }
    
    case Pitch = "Pitch", Hitting = "Hitting"
}
