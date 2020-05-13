//
//  CurrentAtBatView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/12.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

@IBDesignable
class CurrentAtBatView: UIView {
    
    @IBInspectable var playerImage: UIImage {
        get{
            return image
        }
        set{
            image = newValue
        }
    }
    private var image: UIImage = #imageLiteral(resourceName: "PitchingPerson") {
        didSet {
            imageView.image = image
        }
    }
    var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
        }()
    var totalStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.alignment = .fill
        stackView.distribution = .fill
        stackView.axis = .horizontal
        return stackView
    }()
    var infoStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.alignment = .fill
        stackView.distribution = .fill
        stackView.axis = .vertical
        return stackView
    }()
    var roleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.text = "roleLabel"
        label.font = UIFont(name: CustomFont.mainFont, size: 20)
        return label
    }()
    var nameLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = "nameLabel"
        label.textColor = UIColor(named: CustomColor.BabyPink)
        label.font = UIFont(name: CustomFont.mainFont, size: 25)
        return label
    }()
    var infoLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = "info"
        label.textColor = .systemYellow
        label.font = UIFont(name: CustomFont.mainFont, size: 20)
        label.numberOfLines = 2
        return label
    }()
    let spacingLabel: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
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
        imageView.image = image
        infoStackView.addArrangedSubview(spacingLabel)
        infoStackView.addArrangedSubview(roleLabel)
        infoStackView.addArrangedSubview(nameLabel)
        infoStackView.addArrangedSubview(infoLabel)
        totalStackView.addArrangedSubview(imageView)
        totalStackView.addArrangedSubview(infoStackView)
        self.addSubview(totalStackView)
        setupConstraint()
    }
    
    private func setupConstraint() {
        spacingLabel.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 0.15).isActive = true
        totalStackView.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
        totalStackView.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
        totalStackView.leadingAnchor.constraint(equalTo: self.leadingAnchor).isActive = true
        totalStackView.trailingAnchor.constraint(equalTo: self.trailingAnchor).isActive = true
       imageView.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 0.5).isActive = true
        imageView.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 1).isActive = true
    }
}
