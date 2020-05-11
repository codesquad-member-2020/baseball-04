//
//  TeamScoreView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/11.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class TeamScoreView: UIView {
    
    
    var configuration: GameInfo? {
        didSet{
            setupView()
        }
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupView()
    }
    
    private func setupView(){
        
    }
}
