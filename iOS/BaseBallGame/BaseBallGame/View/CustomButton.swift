//
//  CustomButton.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/12.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit
@IBDesignable

class CustomButton: UIButton {

    override init(frame: CGRect) {
        super.init(frame: frame)
        animateView(self)
        updateLayerProperties()

    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        animateView(self)
        updateLayerProperties()
    }
    
     private func animateView(_ viewToAnimate: UIView) {
        UIView.animate(withDuration: 0.3, delay: 0, usingSpringWithDamping: 0.2, initialSpringVelocity: 0.5, options: .curveEaseIn, animations: {
            viewToAnimate.transform = CGAffineTransform(scaleX: 0.92, y: 0.92)
        }) {(_) in
            UIView.animate(withDuration: 0.3, delay: 0, usingSpringWithDamping: 0.4, initialSpringVelocity: 2, options: .curveEaseIn, animations: {
                viewToAnimate.transform = CGAffineTransform(scaleX: 1, y: 1)},completion: nil)
        }
    }
    
    private func updateLayerProperties() {
        self.layer.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.75).cgColor
        self.layer.shadowOffset = CGSize(width: 0, height: 3)
        self.layer.shadowOpacity = 1.0
        self.layer.shadowRadius = 10.0
        self.layer.masksToBounds = false
    }

}
