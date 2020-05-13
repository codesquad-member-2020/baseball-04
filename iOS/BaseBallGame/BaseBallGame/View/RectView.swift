//
//  RectView.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/04.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

@IBDesignable
class RectView: UIView {
    
    @IBInspectable var colorToFill: UIColor  = .clear
    @IBInspectable var borderColor: UIColor  = .darkGray
    @IBInspectable var borderWidth: CGFloat  = 5
    @IBInspectable var rotationAngle: CGFloat  = 45.0

    override func draw(_ rect: CGRect) {
        drawRect(rect: rect)
        drawBorder(rect: rect)
    }
    
    private func drawRect(rect: CGRect) {
        let path = UIBezierPath(rect: rect)
        colorToFill.setFill()
        path.fill()
        rotate()
    }
    
    private func drawBorder(rect: CGRect) {
        let path = UIBezierPath()
        borderColor.setStroke()
        path.lineWidth = borderWidth
        let startPoint = CGPoint(x: rect.minX, y: rect.minY)
        path.move(to: startPoint)
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.minY))
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
        path.addLine(to: CGPoint(x: rect.minX, y: rect.maxY))
        path.close()
        path.stroke()
        rotate()
    }
    
    private func rotate() {
        self.transform = CGAffineTransform(rotationAngle: rotationAngle * CGFloat.pi / 180.0)
    }
}
