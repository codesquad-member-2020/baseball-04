//
//  OvalView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/12.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit


@IBDesignable
class OvalView: UIView {
    
    @IBInspectable var colorToFill: UIColor  = .clear
    @IBInspectable var borderColor: UIColor  = .darkGray
    @IBInspectable var borderWidth: CGFloat  = 5
    
    override func draw(_ rect: CGRect) {
        drawOval(rect: rect)
    }
    
    private func drawOval(rect: CGRect) {
        let path = UIBezierPath(arcCenter: CGPoint(x: rect.midX, y: rect.midY), radius: self.frame.size.width / 4, startAngle: 0, endAngle: 360, clockwise: true)
        path.lineWidth = borderWidth
        colorToFill.setFill()
        borderColor.setStroke()
        path.fill()
        path.stroke()
    }
}
