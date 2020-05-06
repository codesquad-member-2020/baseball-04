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

    @IBInspectable var borderColor: UIColor  = .black
    
    override func draw(_ rect: CGRect) {
        drawRect(rect: rect)
        drawInsideRect(rect: rect)
    }
    
    func drawRect(rect: CGRect) {
        let path = UIBezierPath()
        borderColor.setStroke()
        path.lineWidth = 9
        let startPoint = CGPoint(x: rect.minX, y: rect.minY)
        path.move(to: startPoint)
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.minY))
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
        path.addLine(to: CGPoint(x: rect.minX, y: rect.maxY))
        path.close()
        path.stroke()
    }
    
    func drawInsideRect(rect: CGRect) {
        let path = UIBezierPath()
        borderColor.setStroke()
        path.lineWidth = 8
        let startPoint = CGPoint(x: rect.maxX  / 3, y: rect.maxY / 3)
        path.move(to: startPoint)
        path.addLine(to: CGPoint(x: rect.maxX * 2/3, y: rect.maxY * 1 / 3))
        path.addLine(to: CGPoint(x: rect.maxX * 2/3, y: rect.maxY * 2 / 3))
        path.addLine(to: CGPoint(x: rect.maxX * 1/3, y: rect.maxY * 2 / 3))
        path.close()
        path.stroke()
    }
}
