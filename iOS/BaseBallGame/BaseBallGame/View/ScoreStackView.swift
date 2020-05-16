//
//  ScoreStackView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/14.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class ScoreStackView: UIStackView {
    
        override init(frame: CGRect) {
            super.init(frame: frame)
            setupView()
        }
        
        required init(coder: NSCoder) {
            super.init(coder: coder)
            setupView()
        }
    
    private func setupView() {
        self.layer.borderColor = CGColor(srgbRed: 0, green: 0, blue: 0, alpha: 1)
    }
        
        func makeLabel(data: String) -> UILabel {
            let label = UILabel()
            label.text = data
            label.font = UIFont(name: CustomFont.mainFont, size: 14)
            return label
        }
        
        func addLabel(newGame: UILabel) {
            self.addArrangedSubview(newGame)
        }
    }
