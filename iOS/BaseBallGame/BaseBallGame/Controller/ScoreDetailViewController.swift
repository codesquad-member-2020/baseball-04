//
//  ScoreDetailViewController.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/06.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class ScoreDetailViewController: UIViewController {

    @IBOutlet weak var teamNameStackView: ScoreStackView!
    @IBOutlet weak var inningStackView: ScoreStackView!
    @IBOutlet weak var homeTeamScoreStackView: ScoreStackView!
    @IBOutlet weak var AwayTeamScoreStackView: ScoreStackView!
    @IBOutlet weak var teamSegmentedControl: UISegmentedControl!
    @IBOutlet weak var scoreDetailTableView: UITableView!
    private let dataSource = ScoreDetailTableDataSource()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupTableView()
    }
    
    private func setupTableView() {
        scoreDetailTableView.dataSource = dataSource
    }
}
