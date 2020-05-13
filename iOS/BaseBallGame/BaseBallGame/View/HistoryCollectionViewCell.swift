//
//  HistoryCollectionViewCell.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/13.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

@IBDesignable
class HistoryCollectionViewCell: UICollectionViewCell {
    
    let totalStackView : UIStackView = {
       let stackView = UIStackView()
        stackView.alignment = .fill
        stackView.distribution = .fillProportionally
        stackView.axis = .vertical
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    let playResultStackView: UIStackView = {
       let stackView = UIStackView()
        stackView.alignment = .fill
        stackView.distribution = .fillProportionally
        stackView.axis = .horizontal
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    let playerRecordStackView: UIStackView = {
       let stackView = UIStackView()
        stackView.alignment = .fill
        stackView.distribution = .fillEqually
        stackView.axis = .vertical
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    let playerInfoLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.text = "playerInfoLabel"
        label.font = UIFont(name: CustomFont.mainFont, size: 17)
        label.backgroundColor = UIColor(named: "ClassicBlue")
        label.layer.cornerRadius = label.frame.width / 2
        label.clipsToBounds = true
        label.textAlignment = .center
        return label
    }()
    
    let numberLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.text = "1."
        label.backgroundColor = UIColor(named: "ClassicBlue")
        label.font = UIFont(name: CustomFont.mainFont, size: 14)
        label.textAlignment = .center
        label.clipsToBounds = true
        return label
    }()
    
    let playResultLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.text = "스트라이크"
        label.font = UIFont(name: CustomFont.mainFont, size: 17)
        label.textAlignment = .center
        label.clipsToBounds = true
        return label
    }()

    let statLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.text = "2B 3S"
        label.font = UIFont(name: CustomFont.mainFont, size: 17)
        label.textAlignment = .center
        label.clipsToBounds = true
        return label
    }()
        
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupView()
    }

    private func setupView() {
        self.backgroundColor = .lightGray
        playResultStackView.addArrangedSubview(numberLabel)
        playResultStackView.addArrangedSubview(playResultLabel)
        playResultStackView.addArrangedSubview(statLabel)
        playerRecordStackView.addArrangedSubview(playResultStackView)
        totalStackView.addArrangedSubview(playerInfoLabel)
        totalStackView.addArrangedSubview(playerRecordStackView)
        contentView.addSubview(totalStackView)
        setConstraints()
    }
    
    private func setConstraints() {
//        totalStackView.centerXAnchor.constraint(equalToSystemSpacingAfter: self.centerXAnchor, multiplier: 1).isActive = true
        totalStackView.centerYAnchor.constraint(equalToSystemSpacingBelow: self.centerYAnchor, multiplier: 1).isActive = true
        totalStackView.topAnchor.constraint(equalTo: contentView.safeAreaLayoutGuide.topAnchor).isActive = true
        totalStackView.bottomAnchor.constraint(equalTo: contentView.safeAreaLayoutGuide.bottomAnchor).isActive = true
        totalStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        totalStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true

        playerInfoLabel.heightAnchor.constraint(equalTo: totalStackView.heightAnchor, multiplier: 0.2).isActive = true
    }

}
