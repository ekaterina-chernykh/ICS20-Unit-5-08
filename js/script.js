// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-08/sw.js", {
    scope: "/ICS20-Unit-5-08/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const val1 = parseInt(document.getElementById("val1").value)
  const val2 = parseInt(document.getElementById("val2").value)
  let result = 0
  let counter = 0
  let val1pos
  let val2pos
  let remainder

  // process
  val1pos = Math.abs(val1)
  val2pos = Math.abs(val2)
  remainder = val1pos

  while (remainder >= val2pos) {
    remainder = remainder - val2pos
    counter = counter + 1
  }
  result = counter

  if ((val1 < 0 && val2 > 0) || (val1 > 0 && val2 < 0)) {
    result = result * (-1)
  }
  
  // output
  document.getElementById("result").innerHTML = "The result is: " + result + "R" + remainder
}
