'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = "X";
  var dataCell = $('[data-cell]');
  var message = $('#announce-winner');

  dataCell.click(function(){
    if ($(this).text() === ""){
      $(this).text(playerTurn);
      message.empty();
      playerTurn = (playerTurn === "X" ? "O" : "X");
    }
    else message.text("You can't click here");
    });
    
  //Clear Board Function
  $('#clear').click(function(){
    dataCell.empty();
    message.empty();
  });
});
