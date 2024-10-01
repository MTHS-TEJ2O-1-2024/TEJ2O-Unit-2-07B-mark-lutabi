/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark
 * Created on: Sep 2024
 * This program adds cookies when the switch is pressed
*/

// adds cookies

let cookieNumber: number
cookieNumber = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    cookieNumber = (cookieNumber + 1)
    basic.showNumber(cookieNumber)
})

// resets variable to 0
input.onButtonPressed(Button.B, function () {
    cookieNumber = 0
    basic.showString(cookieNumber.toString())
})