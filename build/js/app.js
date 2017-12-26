(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Board() {
  this.squares = [1,2,3,4,4,3,2,1];
}

exports.boardModule = Board;

},{}],2:[function(require,module,exports){
var Board = require('./../js/memory.js').boardModule;

$(document).ready(function() {
  var board = new Board();
  for (i=0; i<8; i++) {
    $("#" + (i).toString()).text(board.squares[i]);
    $("#" + (i).toString()).addClass(board.squares[i].toString());
  }

  // var lastClickedBox;
  // var lastClickedContents;
  // for (i=0; i<8; i++) {
  //   $("#" + (i).toString()).click(function() {
  //     if(board.squares[i] != lastClickedContents) {
  //       $(this).hide;
  //     }
  //
  //   })
  // }

  var firstClick = true;
  $("td").click(function(){
    $(this).children().show();
    if (firstClick === true) {
      firstClick = false;
    } else {
      firstClick = true;
      setTimeout(function() {$("td").children().hide();}, 2000);
    }
  });
});

},{"./../js/memory.js":1}]},{},[2]);
