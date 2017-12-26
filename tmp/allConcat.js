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
  var cellClick = function() {
    $(this).children().show();
    if (firstClick === true) {
      firstClick = false;
    } else {
      firstClick = true;
      $("td").off("click");
      var twoClicked = function() {
        $("td").children().hide();
        $("td").on("click", cellClick);
      };
      setTimeout(twoClicked, 2000);
    }
  };

  $("td").on("click", cellClick);
});
