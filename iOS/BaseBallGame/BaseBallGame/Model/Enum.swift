//
//  Enum.swift
//  BaseBallGame
//
//  Created by Keunna Lee on 2020/05/11.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import Foundation

enum SegueIdentifer {
    static let matchingSegueIdentifer = "matchingVC"
}

enum NotificationUserInfoKey {
    static let gameId = "gameId"
}

enum CustomFont {
    static let mainFont = "NeoDunggeunmo"
}

enum CustomColor {
    static let BabyPink = "BabyPink"
}

enum PlayButtonCase: String, CustomStringConvertible {
    var description: String {
        return self.rawValue
    }
    
    case Pitch = "Pitch", Hitting = "Hitting"
}

