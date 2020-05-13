//
//  roundView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/11.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

@IBDesignable
class RoundRectView: UIView {

    @IBInspectable var colorToFill: UIColor  = .clear
    @IBInspectable var borderColor: UIColor  = .darkGray
    @IBInspectable var borderWidth: CGFloat  = 5
    @IBInspectable var cornerRadiusAngle: CGFloat  = 15.0
    @IBInspectable var allroundingCorners: Bool = true
    

    override func draw(_ rect: CGRect) {
        drawRoundRect(rect: rect)
    }
    
    private func drawRoundRect(rect: CGRect) {
        let path = UIBezierPath(roundedRect: self.bounds, cornerRadius: cornerRadiusAngle)
        path.lineWidth = borderWidth
        colorToFill.setFill()
        borderColor.setStroke()
        path.fill()
        path.stroke()
    }
}
