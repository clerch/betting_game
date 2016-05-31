$(function(){

"use strict";

var money = 100;


$("#start-new").click(function(e){
  e.preventDefault();
  money = 100;
  // $("#money_balance").text(money);
  play_game();
  //trigger game starting
});

$("#play-submit").click(function(e){
  e.preventDefault();
  play_game();
});

//initialize the game

function play_game(){
  var number = parseInt($("#number").val());
  while (number > 10 || number < 1){
    number = prompt("Incorrect entry: Please pick a number between 1 and 10.");
  }


  var bet = parseInt(document.getElementById("bet").value);
  while (bet > 10 || bet < 5){
    bet = prompt("Incorrect entry: Please place a bet between $5 and $10");
  }


  if (money > 0 && bet <= money){
      
      $("#number_selected").text(number);

      var random_number = Math.floor((Math.random() * 10) + 1);
      $("#random_number").text(random_number);

      var winnings = check_number(random_number, number, bet);
      $("#turn_winnings").text(winnings);

      money = money + winnings;
      $("#money_balance").text(money);
      } else {
    prompt("Thanks for the money!");
  }
}

function check_number(random_number,number, bet){
  if (number == random_number){
    console.log("You guessed correctly!");
    return bet;
  } else if (number + 1 == random_number) {
    return 0;
  } else if (number - 1 == random_number) {
    return 0;
  } else {
    return (bet * -1);
  }
}


});





// function prompt_bet(){
//   var bet = prompt("Please place a bet between $5 and $10");
//   while (bet > 10 || bet < 5){
//     bet = prompt("Incorrect entry: Please place a bet between $5 and $10");
//   }
//   return bet;
// }

// function validate_bet(bet){

//   if (bet <= 10 && bet >= 5){
//     return bet;
//   } else {
//     return prompt_bet();
//   }
// }

// function prompt_number(bet){

  //   var number = prompt("You are betting " + bet + ". Please pick a number between 1 and 10.");
  //   while (number > 10 || number < 1){
  //     number = prompt("Incorrect entry: Please pick a number between 1 and 10.");
  //   }
  //   return number;
  // }

// function validate_number(number,bet){

//     if (number <= 10){
//       return number;
//     } else {
//       return prompt_number(bet);
//     }
// }








